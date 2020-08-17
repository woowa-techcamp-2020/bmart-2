import { Request, Response, NextFunction } from 'express';

function wrapAsync(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
}

// eslint-disable-next-line import/prefer-default-export
export { wrapAsync };
