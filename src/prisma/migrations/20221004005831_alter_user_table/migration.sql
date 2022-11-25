/*
  Warnings:

  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "telephone" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "uid" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
