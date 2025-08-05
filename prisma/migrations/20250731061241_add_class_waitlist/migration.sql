-- CreateEnum
CREATE TYPE "waitlist_status" AS ENUM ('ACTIVE', 'CONTACTED', 'ENROLLED', 'DECLINED', 'EXPIRED');

-- CreateTable
CREATE TABLE "class_waitlists" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "classLevel" "class_level" NOT NULL,
    "preferredContact" "preferred_contact" NOT NULL DEFAULT 'EMAIL',
    "message" TEXT,
    "notifyWhenAvailable" BOOLEAN NOT NULL DEFAULT true,
    "status" "waitlist_status" NOT NULL DEFAULT 'ACTIVE',
    "priority" INTEGER NOT NULL DEFAULT 1,
    "signupDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactedDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_waitlists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "class_waitlists_email_classLevel_key" ON "class_waitlists"("email", "classLevel");
