/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "accountType" AS ENUM ('FREELANCER', 'CLIENT');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "assignedAt" TIMESTAMP(3),
ADD COLUMN     "deadline" TIMESTAMP(3),
ADD COLUMN     "freelancerId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageUrl",
ADD COLUMN     "accountType" "accountType",
ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPhoneVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "linkedInUrl" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "portfolioUrl" TEXT,
ADD COLUMN     "totalEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_freelancerId_fkey" FOREIGN KEY ("freelancerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
