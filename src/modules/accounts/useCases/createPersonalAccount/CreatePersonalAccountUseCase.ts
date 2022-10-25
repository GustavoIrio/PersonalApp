import { firebaseAdmin } from "../../../../database/Firebase-admin";
import { prisma } from "../../../../database/PrismaClient";

interface IPersonalAccount {
  fullName: string;
  email: string;
  password: string;
  cpf: string;
  hourPrice: number;
  description: string;
  telephone: string;
  cityName: string;
  specializations: string[];
}

export class CreatePersonalAccountUseCase {
  async execute({
    fullName,
    email,
    password,
    cpf,
    hourPrice,
    description,
    telephone,
    cityName,
    specializations,
  }: IPersonalAccount) {
    // checking if email exists
    const emailExist = await prisma.personal.findUnique({
      where: {
        email,
      },
    });

    if (emailExist) {
      throw new Error("Email already exists!");
    }

    var uid;
    // create user on Firebase
    await firebaseAdmin
      .auth()
      .createUser({
        displayName: fullName,
        email,
        password,
      })
      .then((UserRecord) => {
        uid = UserRecord.uid;
      });

    // create user on Database
    const userPrisma = await prisma.personal.create({
      data: {
        name: fullName,
        email,
        cpf,
        description,
        hours_price: hourPrice,
        city: {
          connectOrCreate: {
            where: {
              name: cityName,
            },
            create: {
              name: cityName,
            },
          },
        },
      },
    });

    const userSpecialties = specializations.map((specialty) =>
      prisma.personal_Specialty.create({
        data: {
          personal: {
            connect: {
              id: userPrisma.id,
            },
          },
          specialty: {
            connectOrCreate: {
              where: {
                name: specialty,
              },
              create: {
                name: specialty,
              },
            },
          },
        },
      })
    );

    Promise.all(userSpecialties);

    return "Personal created";
  }
}
