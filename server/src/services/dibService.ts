import Dib from '../models/Dib';
import Product from '../models/Product';

const findDibIncludeProductByUserId = async (
  userId: number
): Promise<any[]> => {
  const result = await Product.findAll({
    include: [
      {
        model: Dib,
        where: {
          userId,
        },
        required: true,
      },
    ],
  });
  return result;
};

export default { findDibIncludeProductByUserId };
