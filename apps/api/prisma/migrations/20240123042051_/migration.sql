/*
  Warnings:

  - You are about to drop the column `isDiscountEligible` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `referredBy` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categoryonevents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eventimages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refereerewards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `referralrewards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `categoryonevents` DROP FOREIGN KEY `CategoryOnEvents_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `categoryonevents` DROP FOREIGN KEY `CategoryOnEvents_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `eventimages` DROP FOREIGN KEY `EventImages_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_organizerId_fkey`;

-- DropForeignKey
ALTER TABLE `refereerewards` DROP FOREIGN KEY `RefereeRewards_userId_fkey`;

-- DropForeignKey
ALTER TABLE `referralrewards` DROP FOREIGN KEY `ReferralRewards_userId_fkey`;

-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `Reviews_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `Reviews_userId_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_transactionId_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_userId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_referredBy_fkey`;

-- DropIndex
DROP INDEX `Users_referralCode_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `isDiscountEligible`,
    DROP COLUMN `points`,
    DROP COLUMN `referralCode`,
    DROP COLUMN `referredBy`;

-- DropTable
DROP TABLE `categories`;

-- DropTable
DROP TABLE `categoryonevents`;

-- DropTable
DROP TABLE `eventimages`;

-- DropTable
DROP TABLE `events`;

-- DropTable
DROP TABLE `refereerewards`;

-- DropTable
DROP TABLE `referralrewards`;

-- DropTable
DROP TABLE `reviews`;

-- DropTable
DROP TABLE `tickets`;

-- DropTable
DROP TABLE `transactions`;
