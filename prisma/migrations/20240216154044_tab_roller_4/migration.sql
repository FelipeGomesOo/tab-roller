/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `Song` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "url" VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "url" VARCHAR(256) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Artist_url_key" ON "Artist"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Song_url_key" ON "Song"("url");
