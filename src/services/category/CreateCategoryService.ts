import prismaClient from "../../prisma";

export interface CategoryRequest {
    nome: string
}

class CreateCategoryService {

    async execute({ nome }: CategoryRequest) {

        if (nome === '') {
            throw new Error('Nome inválido')
        }

        const category = await prismaClient.categoria.create({
            data: { nome: nome },
            select: { id: true, nome: true }
        });

        return category;
    }

}

export { CreateCategoryService };