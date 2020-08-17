import { Request, Response, NextFunction } from 'express';
import Product from '../models/Product';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const product = await Product.create(req.body);
  res.status(200).send(product);
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const products = await Product.findAll();
  res.status(200).send({ success: true, products });
};

const softDelete = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const id = parseInt(params.id, 10);
  await Product.update({ removed: true }, { where: { id } });
  res.status(200).send({ success: true });
};

export default { create, findAll, softDelete };
