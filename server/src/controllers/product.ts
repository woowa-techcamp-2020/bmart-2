import { Request, Response, NextFunction } from 'express';
import { ProcutService } from '../services';
import Product from '../models/Product';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const product = await Product.create(req.body);
  res.status(200).send(product);
};

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { count, categoryId } = req.query;
  if (typeof count === 'string' && typeof categoryId === 'string') {
    const products = await ProcutService.findProductByCategory({
      count,
      categoryId,
    });
    res.status(200).send({ success: true, products });
  } else {
    const products = await Product.findAll();
    res.status(200).send({ success: true, products });
  }
};

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const id = parseInt(params.id, 10);
  const products = await Product.findByPk(id);
  res.status(200).send({ success: true, products });
};

const softDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const id = parseInt(params.id, 10);
  await Product.update({ removed: true }, { where: { id } });
  res.status(200).send({ success: true });
};

export default { create, findAll, softDelete, find };
