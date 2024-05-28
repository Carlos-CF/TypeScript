import prismaClient from "../../prisma";

interface ItemRequest { id_item: string; }

class RemoveItemService {
  async execute({ id_item }: ItemRequest) {
    const item = await prismaClient.item.findFirst({
      where: {
        id: id_item,
      },
      select: {
        id: true,
        pedido: true,
      },
    });

    if (!item) {
      throw new Error("Item inválido!");
    }

    if (!item.pedido.rascunho) {
      throw new Error("Pedido já iniciado, não é possível remover items.");
    }

    const itemRemove = await prismaClient.item.delete({
      where: {
        id:id_item,
      },
    });

    return itemRemove;
  }
}

export { RemoveItemService };