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

const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const productId = parseInt(params.productId, 10);
  await Cart.destroy({ where: { productId } });
  res.status(200).send({ success: true });
};

export default { create, remove };
