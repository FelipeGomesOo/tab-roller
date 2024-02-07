/*
  Warnings:

  - You are about to drop the `Chord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lyric` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chords` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lyrics` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chord" DROP CONSTRAINT "Chord_song_id_fkey";

-- DropForeignKey
ALTER TABLE "Lyric" DROP CONSTRAINT "Lyric_song_id_fkey";

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "chords" TEXT NOT NULL,
ADD COLUMN     "lyrics" TEXT NOT NULL;

-- DropTable
DROP TABLE "Chord";

-- DropTable
DROP TABLE "Lyric";
