import Cart from '../models/Cart';
import Product from '../models/Product';

const findCartIncludeProductByUserId = async (
  userId: number
): Promise<any[]> => {
  const result = await Product.findAll({
    include: [
      {
        model: Cart,
        where: {
          userId,
        },
        required: true,
      },
    ],
  });
  return result;
};

export default { findCartIncludeProductByUserId };
