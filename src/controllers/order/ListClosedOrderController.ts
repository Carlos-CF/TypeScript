import { Request, Response } from "express";
import { ListClosedOrderService } from "../../services/order/ListClosedOrderService";

class ListClosedOrderController {
    async handle(req: Request, res: Response) {
      const { date } = req.body;
      const listOrderService = new ListClosedOrderService();
      
      const selectedDate = new Date(date);
  
      const orders = await listOrderService.execute(selectedDate);
  
      return res.json(orders);
    }
  }
  
  export { ListClosedOrderController };