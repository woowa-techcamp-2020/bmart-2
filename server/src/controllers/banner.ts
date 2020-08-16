import { Request, Response, NextFunction } from 'express';
import Banner from '../models/Banner';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const banner = await Banner.create(req.body);
  res.status(200).send(banner);
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const banners = await Banner.findAll();
  res.status(200).send(banners);
};

export default { create, findAll };
