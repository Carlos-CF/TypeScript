import prismaClient from "../../prisma";

class ListOpenOrderService {
  async execute(date: Date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

    const orders = await prismaClient.pedido.findMany({
      where: {
        rascunho: false,
        status: false,
        criado_em: {
          gte: startDate.toISOString(),
          lte: endDate.toISOString(),
        },
      },
      orderBy: {
        criado_em: "desc",
      },
    });

    return orders;
  }
}

export { ListOpenOrderService };