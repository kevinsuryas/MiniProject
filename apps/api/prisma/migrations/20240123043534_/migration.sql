-- DropIndex
DROP INDEX `Users_username_key` ON `users`;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `role` DROP DEFAULT,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
