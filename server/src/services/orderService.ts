import { QueryTypes } from 'sequelize';
import OrderProductRelation from '../models/OrderProductRelation';
import { sequelize } from '../models';

interface IOrderProduct {
  id: number;
  count: number;
}

const createOrderProductRelation = async (
  orderId: number,
  products: IOrderProduct[]
): Promise<void> => {
  await OrderProductRelation.bulkCreate(
    products.map((product) => {
      return {
        orderId,
        productId: product.id,
        count: product.count,
      };
    })
  );
};

const FIND_BY_USER_ID =
  'SELECT REL.orderId, REL.lastUpdated, REL.userId, REL.count, P.* from product P, (select R.productId, R.count, O.orderId, O.lastUpdated, O.userId from orderProductRelation R, (select id as orderId, updatedAt as lastUpdated, userId from `order` where userId = :userId) O where O.orderId = R.orderId) REL where REL.productId = P.id order by REL.lastUpdated DESC;';

const findByUserId = async (userId: number): Promise<any> => {
  const result = await sequelize.query(FIND_BY_USER_ID, {
    replacements: { userId },
    type: QueryTypes.SELECT,
  });
  return result;
};

export default { createOrderProductRelation, findByUserId };
