import { Request, Response, NextFunction } from 'express';
import { QueryTypes } from 'sequelize';
import { ProcutService } from '../services';
import Product from '../models/Product';
import { sequelize } from '../models';

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
  const { categoryId, subcategoryId } = req.query;
  if (typeof subcategoryId === 'string') {
    const products = await ProcutService.findProductBySubcategory({
      subcategoryId,
    });
    res.status(200).send({ success: true, products });
  }
  if (typeof categoryId === 'string') {
    const products = await ProcutService.findProductByCategory({
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

const FIND_LATEST = `SELECT * FROM product WHERE updatedAt ORDER BY updatedAt DESC LIMIT 6;`;

const findLatest = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await sequelize.query(FIND_LATEST, {
    type: QueryTypes.SELECT,
  });
  res.status(200).send({ success: true, result });
};

const FIND_RANDOM = `SELECT * FROM product WHERE updatedAt ORDER BY rand() DESC LIMIT 6;`;

const findRecommend = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await sequelize.query(FIND_RANDOM, {
    type: QueryTypes.SELECT,
  });
  res.status(200).send({ success: true, result });
};

export default { create, findAll, softDelete, find, findLatest, findRecommend };
