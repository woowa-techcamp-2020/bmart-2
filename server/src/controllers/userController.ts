import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import User from '../models/User';
import { IUser } from '../../../types/modelTypes';

// Todo - 회원가입 로직 추가 필요
const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user = await userService.create(req.body);
    res.status(200).send(user);
  } catch (e) {
    next();
  }
};

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const user = await userService.find(parseInt(id, 10));
  res.status(200).send(user);
};
export default { create, find };
