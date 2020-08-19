import Category from '../models/Category';
import SubCategory from '../models/SubCategory';

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

export default { findCategoryIncludeSub };
