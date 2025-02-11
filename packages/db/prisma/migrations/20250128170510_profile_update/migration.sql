/*
  Warnings:

  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "HourlyRate" INTEGER,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "yearOfExperience" INTEGER;

-- DropTable
DROP TABLE "Skills";
