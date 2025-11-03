// é no model que fazemos a consulta para o banco de dados
// ex: SELECT * FROM bruxos; porém estamos usando o PRISMA
// que abstrai o comando SQL

//Importar o prisma Client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Crio a variavel findAll e já exporto
export const findAll = async () => {
    // SELECT * FROM bruxos = findMany
    return await prisma.easterEgg.findMany({
        orderBy: { id: 'asc' }
    });
}

// Crio a variavel findById e já exporto
export const findById = async (id) => {
    // SELECT * FROM bruxos WHERE id = 1;
    return await prisma.easterEgg.findUnique({
        where: { id: Number(id) }
    });
}

//Envia para o banco
export const create = async (data) => {
    return await prisma.easterEgg.create({
        data: {
            titulo: data.titulo,
            midia: data.midia,
            tipo: data.tipo,
            descricao: data.descricao,
            dificuldade: data.dificuldade,
            descoberto: data.descoberto,
            autor: data.autor,
            verificado: data.verificado
        }
    })
}

export const deleteBruxo = async (id) => {
    return await prisma.easterEgg.delete({
        where: { id: Number(id) }
    })
}


export const update = async (id, data) => {
    return await prisma.easterEgg.update({
        where: { id: Number(id) },
        data: {
            ...(data.titulo && { titulo: data.titulo }),
            ...(data.midia && { midia: data.midia }),
            ...(data.tipo && { tipo: data.tipo }),
            ...(data.descricao && { descricao: data.descricao }),
            ...(data.dificuldade && { dificuldade: data.dificuldade }),
            ...(data.descoberto !== undefined && { ativo: data.ativo }),
            ...(data.autor && { autor: data.autor }),
            ...(data.varificado !== undefined && { verificado: data.verificado })
        }
    })
}