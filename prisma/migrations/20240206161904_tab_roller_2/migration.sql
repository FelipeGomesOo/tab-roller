/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_albumId_fkey";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SongChord" ALTER COLUMN "chord" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SongLyric" ALTER COLUMN "lyric" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" VARCHAR(256) NOT NULL;

-- DropTable
DROP TABLE "Album";
