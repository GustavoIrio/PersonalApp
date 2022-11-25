/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `city` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "personal" ALTER COLUMN "telephone" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "city_name_key" ON "city"("name");
