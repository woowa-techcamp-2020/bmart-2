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
    const { Carts, ...product } = row.dataValues;
    const cart = Carts[0].dataValues;
    return { ...cart, product };
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
