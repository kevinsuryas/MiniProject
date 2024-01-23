/*
  Warnings:

  - You are about to drop the `referralrewards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `referralrewards` DROP FOREIGN KEY `ReferralRewards_ownerId_fkey`;

-- DropTable
DROP TABLE `referralrewards`;
