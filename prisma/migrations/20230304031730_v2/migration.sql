/*
  Warnings:

  - You are about to drop the column `details` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Todo` DROP COLUMN `details`,
    ADD COLUMN `detail` VARCHAR(191) NULL;
