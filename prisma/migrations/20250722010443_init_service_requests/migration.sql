-- CreateEnum
CREATE TYPE "inquiry_type" AS ENUM ('SERVICE', 'CLASS', 'SHOP', 'GENERAL');

-- CreateEnum
CREATE TYPE "service_category" AS ENUM ('LONGARM', 'CUSTOM', 'REPAIR', 'BINDING');

-- CreateEnum
CREATE TYPE "shop_category" AS ENUM ('FABRICS', 'NOTIONS', 'PATTERNS', 'KITS');

-- CreateEnum
CREATE TYPE "class_level" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'WORKSHOP');

-- CreateEnum
CREATE TYPE "preferred_contact" AS ENUM ('EMAIL', 'PHONE');

-- CreateEnum
CREATE TYPE "request_status" AS ENUM ('NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateTable
CREATE TABLE "service_requests" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "inquiryType" "inquiry_type" NOT NULL,
    "serviceCategory" "service_category",
    "shopCategory" "shop_category",
    "classLevel" "class_level",
    "quiltSize" TEXT,
    "projectDetails" TEXT,
    "timeline" TEXT,
    "budget" TEXT,
    "preferredContact" "preferred_contact" NOT NULL,
    "message" TEXT NOT NULL,
    "status" "request_status" NOT NULL DEFAULT 'NEW',
    "priority" "priority" NOT NULL DEFAULT 'MEDIUM',
    "assignedTo" TEXT,
    "notes" TEXT,
    "followUpDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_requests_pkey" PRIMARY KEY ("id")
);
