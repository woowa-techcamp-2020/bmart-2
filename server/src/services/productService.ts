import SubCategory from '../models/SubCategory';
import Product from '../models/Product';
import { ISubcategory, IProduct, ICategory } from '../../../types/modelTypes';
import Category from '../models/Category';

const findProductBySubcategory = async ({
  subcategoryId,
}: {
  subcategoryId: string;
}): Promise<IProduct[]> => {
  const productsByCategory = (await SubCategory.findAll({
    include: [
      {
        model: Product,
      },
    ],
    where: {
      id: subcategoryId,
    },
  })) as ISubcategory[];

  return productsByCategory[0].Products!;
};

const findProductByCategory = async ({
  categoryId,
}: {
  categoryId: string;
}): Promise<IProduct[]> => {
  const numberOfItem = 30;
  const productsByCategory = (await Category.findAll({
    include: [
      {
        model: SubCategory,
        include: [
          {
            model: Product,
            limit: parseInt(`${numberOfItem}`, 10),
          },
        ],
      },
    ],
    where: {
      id: categoryId,
    },
  })) as ICategory[];
  const category: ICategory = productsByCategory[0];
  const products: IProduct[] = [];
  category.SubCategories?.map((subcategory) => {
    subcategory.Products?.map((product) => {
      products.push(product);
    });
  });

  return products;
};

export default { findProductBySubcategory, findProductByCategory };
