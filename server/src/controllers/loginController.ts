import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

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
  // Successful authentication, redirect home.
  res.redirect('/');
};

export default { logout, githubCallback };
