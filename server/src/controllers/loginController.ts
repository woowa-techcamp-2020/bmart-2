import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { IUser } from '../../../types/modelTypes';

const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  req.logout();
  req.session?.save(() => {
    res.redirect('/auth/login');
  });
};

const githubCallback = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { user } = req;
  if (user !== undefined) {
    const newUser: IUser = {
      id: (user as IUser).id,
      name: (user as IUser).name,
      email: (user as IUser).email,
    };
    const token = jwt.sign(
      {
        data: newUser,
      },
      'secret',
      { expiresIn: 60 }
    );
    res.cookie('jwt', token);
  }
  res.redirect('/');
};

export default { logout, githubCallback };
