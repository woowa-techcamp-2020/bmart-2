import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

// Todo - 회원가입 로직 추가 필요
const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = await User.create(req.body);
  res.status(200).send(user);
};

export default { create };
