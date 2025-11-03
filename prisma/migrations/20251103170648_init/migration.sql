-- CreateTable
CREATE TABLE "easterEgg" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "midia" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dificuldade" TEXT NOT NULL,
    "descoberto" BOOLEAN NOT NULL DEFAULT true,
    "autor" TEXT NOT NULL,
    "verificado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "easterEgg_pkey" PRIMARY KEY ("id")
);
