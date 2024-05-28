import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string,
}
class CloseOrderService {
    async execute({ order_id }: OrderRequest) {
        const order = await prismaClient.pedido.update({
            where: {
                id: order_id
            },
            data: {
                status: true,
                atualizado_em: new Date()
            }
        })
        return order;
    }
}
export {CloseOrderService}