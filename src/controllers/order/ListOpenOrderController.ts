import { Request, Response } from "express";
import { ListOpenOrderService } from "../../services/order/ListOpenOrderService";

class ListOpenOrderController {
    async handle(req: Request, res: Response) {
      const { date } = req.body;
      const listOrderService = new ListOpenOrderService();
  
      
      const selectedDate = new Date(date);
  
      const orders = await listOrderService.execute(selectedDate);
  
      return res.json(orders);
    }
  }
  
  export { ListOpenOrderController };