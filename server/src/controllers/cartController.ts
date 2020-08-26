/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response, NextFunction } from 'express';
import Cart from '../models/Cart';
import { CartService } from '../services';

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

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const userId = parseInt(params.userId, 10);
  const result = await CartService.findCartIncludeProductByUserId(userId);
  const carts = result.map((row) => {
    // eslint-disable-next-line no-shadow
    const { userId, count, ...product } = row;
    return { userId, count, product };
  });
  res.status(200).send(carts);
};

const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId, productId, count } = req.body;
  await Cart.update({ count }, { where: { userId, productId } });
  res.status(200).send({ success: true });
};

export default { create, remove, find, update };
