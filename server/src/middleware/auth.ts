/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface Error {
  status?: number;
  message?: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const token = req.cookies.jwt as string;
  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in',
    });
  }
  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const onError = (error: Error) => {
    console.log(error.message);
    res.status(403).json({
      success: false,
      message: error.message,
    });
  };

  p.then((decoded: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    req.user = decoded.data.id as string;
    next();
  }).catch(onError);
};

export default authMiddleware;
