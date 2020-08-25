import Category from '../models/Category';
import SubCategory from '../models/SubCategory';
import Product from '../models/Product';
import { ICategory, IProduct, ISubcategory } from '../../../types/modelTypes';

const findCategoryIncludeSub = async (): Promise<any> => {
  const categories = await Category.findAll({
    include: [
      {
        model: SubCategory,
        attributes: ['id', 'name'],
      },
    ],
  });
  return categories;
};

const findCategoryIncludeProduct = async (): Promise<any> => {
  const numberOfItem = 6;
  const productsByCategory = (await Category.findAll({
    include: [
      {
        model: SubCategory,
        limit: 1,
        include: [
          {
            model: Product,
            limit: parseInt(`${numberOfItem}`, 10),
          },
        ],
      },
    ],
  })) as ICategory[];
  const productRemovedSub: ICategory[] = productsByCategory.map((category) => {
    const products = category.SubCategories?.[0].Products;

    return {
      id: category.id,
      name: category.name,
      imgUrl: category.imgUrl,
      Products: products as IProduct[],
    };
  });
  return productRemovedSub;
};

export default { findCategoryIncludeSub, findCategoryIncludeProduct };
