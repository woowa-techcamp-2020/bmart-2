import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { IProduct } from '../../../types/modelTypes';

const findDibIncludeProductByUserId = async (
  userId: number
): Promise<any[]> => {
  const result = await sequelize.query(
    'SELECT product.*, dib.userId from product, (SELECT productId, userId FROM dib WHERE userId = :userId) dib WHERE product.id = dib.productId;',
    {
      replacements: { userId },
      type: QueryTypes.SELECT,
    }
  );
  return result;
};

export default { findDibIncludeProductByUserId };
