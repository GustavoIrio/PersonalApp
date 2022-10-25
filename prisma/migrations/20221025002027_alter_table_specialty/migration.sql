/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `specialty` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "specialty" ALTER COLUMN "description" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "specialty_name_key" ON "specialty"("name");
