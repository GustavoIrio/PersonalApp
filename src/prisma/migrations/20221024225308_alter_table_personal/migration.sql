/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `personal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "personal_uid_key" ON "personal"("uid");
