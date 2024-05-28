import { Request, Response } from "express";
import { CloseOrderService } from "../../services/order/CloseOrderService";

class CloseOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;
        const sendOrderService = new CloseOrderService();
        const order = await sendOrderService.execute({ order_id });
        return res.json(order);
    }
}
export { CloseOrderController}