import prismaClient from "../../prisma";

interface ItemRequest { id_pedido: string; }

class DetailsOrderService {
    async execute({ id_pedido }: ItemRequest) {
        const order = await prismaClient.pedido.findFirst({
            where: { id: id_pedido },
            include: { items: true }
        });

        const items = await Promise.all(
            order.items.map(async (item) => {
                const product = await prismaClient.produto.findFirst({ where: { id: item.id_produto } });
                return {
                    quantidade: item.quantidade,
                    produto: product.nome,
                    valUnit: Number(product.preco)
                };
            })
        );

        const totalPayable = items.reduce((total, item) => total + (item.quantidade * item.valUnit), 0);

        return { totalPayable, items };
    }
}

export { DetailsOrderService };