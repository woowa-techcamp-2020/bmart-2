import SubCategory from '../models/SubCategory';
import Product from '../models/Product';

const findProductByCategory = async ({
  count,
  categoryId,
}: {
  count: string;
  categoryId: string;
}): Promise<any[]> => {
  const productsByCategory = await SubCategory.findAll({
    include: [
      {
        model: Product,
      },
    ],
    where: {
      categoryId,
    },
    limit: parseInt(count, 10),
  });
  const products = productsByCategory.map((category) => {
    return (category as any)?.Product;
  });
  return products;
};

export default { findProductByCategory };
