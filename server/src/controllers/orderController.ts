import { Request, Response, NextFunction } from 'express';
import Order from '../models/Order';
import { OrderService } from '../services';

interface IOrderProduct {
  id: number;
  count: number;
}

interface IOrder {
  userId: string;
  products: IOrderProduct[];
}

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId, products } = req.body as IOrder;
  const order = await Order.create({ userId });
  console.log(order);
  await OrderService.createOrderProductRelation(order.id, products);
  res.status(200).send({ success: true });
};

export default { create };
