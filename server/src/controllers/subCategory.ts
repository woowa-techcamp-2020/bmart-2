import { Request, Response } from 'express';
import SubCategory from '../models/SubCategory';

const findAll = async (req: Request, res: Response) => {
  const { params } = req;
  const subCategories = await SubCategory.findAll({
    where: { categoryId: params.categoryId },
  });
  res.status(200).send(subCategories);
};

const create = async (req: Request, res: Response) => {
  const subCategories = await SubCategory.create(req.body);
  res.status(200).send(subCategories);
};

export default { findAll, create };
