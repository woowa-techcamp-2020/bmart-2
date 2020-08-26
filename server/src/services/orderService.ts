import OrderProductRelation from '../models/OrderProductRelation';

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

export default { createOrderProductRelation };
