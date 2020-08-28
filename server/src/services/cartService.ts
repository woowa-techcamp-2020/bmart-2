import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';

const findCartIncludeProductByUserId = async (
  userId: number
): Promise<any[]> => {
  const result = await sequelize.query(
    'SELECT product.*, cart.count, cart.userId from product, (SELECT productId, count, userId FROM cart WHERE userId = :userId) cart WHERE product.id = cart.productId;',
    {
      replacements: { userId },
      type: QueryTypes.SELECT,
    }
  );
  return result;
};

const isExist = async (userId: number, productId: number): Promise<any[]> => {
  const result = await sequelize.query(
    'select * from cart where userid = :userId and productId = :productId;',
    {
      replacements: { userId, productId },
      type: QueryTypes.SELECT,
    }
  );
  return result;
};

export default { findCartIncludeProductByUserId, isExist };
