import { Request, Response, NextFunction } from 'express';
import { SearchHistoryService } from '../services';

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const searchHistories = await SearchHistoryService.findAll(params.userId);
  res.status(200).send(searchHistories);
};

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const history = await SearchHistoryService.create(req.body);
  if (history) res.status(200).send(history);
  else next();
};

const deleteSearchHistoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const deletedId = await SearchHistoryService.deleteSearchHistoryById(
    params.id
  );
  console.log(`deleteId: ${deletedId}`);
  res.status(200).send({ id: deletedId });
};

const deleteSearchHistoryByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { params } = req;
  const deletedId = await SearchHistoryService.deleteSearchHistoryByUserID(
    params.userId
  );
  console.log(`deleteId: ${deletedId}`);
  res.status(200).send({ id: deletedId });
};

export default {
  findAll,
  create,
  deleteSearchHistoryById,
  deleteSearchHistoryByUserId,
};
