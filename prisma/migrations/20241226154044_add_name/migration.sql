-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "subcompanyid1span" TEXT NOT NULL,
    "workcode" TEXT NOT NULL,
    "jobtitle" TEXT NOT NULL,
    "departmentidspan" TEXT NOT NULL,
    "idspan" TEXT NOT NULL,
    "departmentid" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "subcompanyid1" TEXT NOT NULL,
    "telephonespan" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "jobtitlespan" TEXT NOT NULL,
    "workcodespan" TEXT NOT NULL,
    "lastnamespan" TEXT NOT NULL,
    "emailspan" TEXT NOT NULL,
    "randomFieldIdspan" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "randomFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
