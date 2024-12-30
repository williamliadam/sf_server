/*
  Warnings:

  - You are about to drop the column `wxId` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('WECHAT', 'EMAIL', 'PHONE');

-- DropIndex
DROP INDEX "User_wxId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "wxId",
ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserAuth" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "authType" "AuthType" NOT NULL,
    "openId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_openId_key" ON "UserAuth"("openId");

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
