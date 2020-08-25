import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { elasticClient } from '../models';

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { keyword } = req.query;
  const body = {
    size: 200,
    from: 0,
    query: {
      match: {
        description: req.query.keyword,
      },
    },
  };
  try {
    const result = await elasticClient.search({
      index: 'product',
      body,
      type: '',
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export default { findAll };
