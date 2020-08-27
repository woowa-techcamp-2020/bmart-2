/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response, NextFunction } from 'express';
import Dib from '../models/Dib';
import { DibService } from '../services';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const dib = await Dib.create({ ...req.body, userId: req.user as number });
  res.status(200).send(dib);
};

const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const productId = parseInt(params.productId, 10);
  await Dib.destroy({ where: { productId, userId: req.user as number } });
  res.status(200).send({ success: true });
};

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user as number;
  const result = await DibService.findDibIncludeProductByUserId(userId);
  const dibs = result.map((row) => {
    // eslint-disable-next-line no-shadow
    const { userId, ...product } = row;
    return { userId, product };
  });
  res.status(200).send(dibs);
};

export default { create, remove, find };
