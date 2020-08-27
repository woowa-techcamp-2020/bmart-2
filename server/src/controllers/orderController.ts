/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  const { products } = req.body as IOrder;
  const order = await Order.create({ userId: req.user as number });
  await OrderService.createOrderProductRelation(order.id, products);
  res.status(200).send({ success: true });
};

const findByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const result = await OrderService.findByUserId(req.user as number);
  const orders = result.map((row: any) => {
    const { userId, orderId, lastUpdated, count, ...product } = row;
    return { userId, orderId, lastUpdated, count, product };
  });
  const groupByOrders = orders.reduce(function (acc: any, cur: any) {
    acc[cur.orderId] = acc[cur.orderId] || [];
    acc[cur.orderId].push(cur);
    return acc;
  }, Object.create(null));
  res.status(200).send({ success: true, orders: Object.values(groupByOrders) });
};

export default { create, findByUserId };
