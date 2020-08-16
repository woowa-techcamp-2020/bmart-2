import { Request, Response, NextFunction } from 'express';
import Category from '../models/category';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const category = await Category.create(req.body);
  res.status(200).send(category);
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const categories = await Category.findAll();
  res.status(200).send(categories);
};

export default { create, findAll };
