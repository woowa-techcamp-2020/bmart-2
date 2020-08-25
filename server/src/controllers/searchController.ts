import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { elasticClient } from '../models';
import { IProduct } from '../../../types/modelTypes';

const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { keyword } = req.query;
  if (typeof keyword !== 'string') next();
  if ((keyword as string).trim() === '') next();
  const body = {
    size: 200,
    from: 0,
    query: {
      match: {
        description: keyword,
      },
    },
  };
  try {
    const elasticRes = await elasticClient.search({
      index: 'products',
      body,
      type: '',
    });
    const result: IProduct[] = [];

    elasticRes.hits?.hits.map((data) => {
      // eslint-disable-next-line no-underscore-dangle
      result.push(data._source as IProduct);
    });

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export default { findAll };
