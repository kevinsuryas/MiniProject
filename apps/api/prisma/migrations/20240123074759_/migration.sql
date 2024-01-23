-- CreateTable
CREATE TABLE `ReferralRewards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` VARCHAR(191) NOT NULL,
    `points` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiresAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReferralRewards` ADD CONSTRAINT `ReferralRewards_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
