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
  const cart = await Cart.create({ ...req.body, userId: req.user as number });
  res.status(200).send(cart);
};

const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const productId = parseInt(params.productId, 10);
  const userId = req.user as number;
  await Cart.destroy({ where: { productId, userId } });
  res.status(200).send({ success: true });
};

const removeByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user as number;
  await Cart.destroy({ where: { userId } });
  res.status(200).send({ success: true });
};

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await CartService.findCartIncludeProductByUserId(
    req.user as number
  );
  const carts = result.map((row) => {
    // eslint-disable-next-line no-shadow
    const { userId, count, ...product } = row;
    return { userId, count, product };
  });
  res.status(200).send({ success: true, carts });
};

const isExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { productId } = req.params;
  console.log(productId);
  console.log(req.user);
  const cart = await CartService.isExist(
    req.user as number,
    parseInt(productId, 10)
  );
  res.status(200).send({ success: true, cart });
};

const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { productId, count } = req.body;
  const userId = req.user as number;
  await Cart.update({ count }, { where: { userId, productId } });
  res.status(200).send({ success: true });
};

export default { create, remove, find, update, removeByUser, isExist };
