-- CreateTable
CREATE TABLE "Personal_Gym" (
    "id" SERIAL NOT NULL,
    "personal_id" INTEGER,
    "gym_id" INTEGER,

    CONSTRAINT "Personal_Gym_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Personal_Gym" ADD CONSTRAINT "Personal_Gym_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "personal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personal_Gym" ADD CONSTRAINT "Personal_Gym_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gym"("id") ON DELETE SET NULL ON UPDATE CASCADE;
