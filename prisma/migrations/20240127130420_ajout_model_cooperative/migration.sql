/*
  Warnings:

  - You are about to drop the column `email` on the `Bus` table. All the data in the column will be lost.
  - Added the required column `coopId` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matricule` to the `Bus` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Cooperative" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matricule" TEXT NOT NULL,
    "coopId" INTEGER NOT NULL,
    "name" TEXT,
    CONSTRAINT "Bus_coopId_fkey" FOREIGN KEY ("coopId") REFERENCES "Cooperative" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bus" ("id", "name") SELECT "id", "name" FROM "Bus";
DROP TABLE "Bus";
ALTER TABLE "new_Bus" RENAME TO "Bus";
CREATE UNIQUE INDEX "Bus_matricule_key" ON "Bus"("matricule");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
