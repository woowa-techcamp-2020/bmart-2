import { Request, Response, NextFunction } from 'express';
import Cart from '../models/Cart';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const cart = await Cart.create(req.body);
  res.status(200).send(cart);
};

export default { create };
