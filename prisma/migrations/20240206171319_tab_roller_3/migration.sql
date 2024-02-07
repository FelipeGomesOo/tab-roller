/*
  Warnings:

  - You are about to drop the column `albumId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the `SongChord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SongLyric` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `key` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SongChord" DROP CONSTRAINT "SongChord_song_id_fkey";

-- DropForeignKey
ALTER TABLE "SongLyric" DROP CONSTRAINT "SongLyric_song_id_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "albumId",
ADD COLUMN     "key" VARCHAR(5) NOT NULL,
ALTER COLUMN "bpm" SET DEFAULT 60,
ALTER COLUMN "notesPerBar" SET DEFAULT 4;

-- DropTable
DROP TABLE "SongChord";

-- DropTable
DROP TABLE "SongLyric";

-- CreateTable
CREATE TABLE "Chord" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "duration" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,

    CONSTRAINT "Chord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lyric" (
    "id" SERIAL NOT NULL,
    "line" TEXT,
    "duration" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,

    CONSTRAINT "Lyric_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chord" ADD CONSTRAINT "Chord_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lyric" ADD CONSTRAINT "Lyric_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
