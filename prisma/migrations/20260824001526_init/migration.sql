-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'PRIVATE', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MediaStatus" AS ENUM ('ATTACHED', 'DRAFT', 'ORPHAN', 'DELETED');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
    "title" TEXT,
    "slug" TEXT,
    "content" JSONB,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "status" "MediaStatus" NOT NULL DEFAULT 'DRAFT',
    "r2Key" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Media_r2Key_key" ON "Media"("r2Key");

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
