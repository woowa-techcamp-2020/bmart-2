import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../services';
import Category from '../models/Category';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const category = await Category.create(req.body);
  res.status(200).send(category);
};

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { sub, product } = req.query;
  let categories = null;
  if (product === 'true') {
    categories = await CategoryService.findCategoryIncludeProduct();
  } else if (sub === 'true') {
    categories = await CategoryService.findCategoryIncludeSub();
  } else {
    categories = await Category.findAll();
  }
  res.status(200).send(categories);
};

export default { create, findAll };
