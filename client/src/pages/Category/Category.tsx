import * as React from 'react';
import {
  CategoryPageWrapper,
  CategoryTitle,
  SubCategory,
} from './Category.styles';
import { useLocation } from 'react-router-dom';
import ProductSortList from '../../components/ProductSortList';
import { ICategory, IProduct } from '../../../../types/modelTypes';

import categoryApi from '../../apis';

interface ICategoryLocationState {
  category: ICategory;
  subCategoryId: number;
}
const selectedAll = {
  id: 0,
  name: '전체보기',
};

const Category = () => {
  const location = useLocation<ICategoryLocationState>();
  const { category, subCategoryId } = location.state;
  const [selected, setSelected] = React.useState(0);
  const [products, setProducts] = React.useState<IProduct[] | null>(null);

  React.useEffect(() => {
    subCategoryId && setSelected(subCategoryId);
    const fetchCategoryProducts = async () => {
      const res = await categoryApi.get(`/product?categoryId=${category.id}`);
      setProducts(res.data.products);
    };
    fetchCategoryProducts();
  }, []);

  const addSubCategory = () => {
    if (!category.SubCategories) return;
    const subCategory = [selectedAll, ...category.SubCategories];
    return subCategory.map((item) => (
      <SubCategory
        selected={selected === item.id}
        onClick={() => setSelected(item.id)}
        key={`category-page-sub-category-${item.id}`}
      >
        {item.name}
      </SubCategory>
    ));
  };

  const filteredProduct: IProduct[] | null = React.useMemo(() => {
    return selected !== 0 && products
      ? products.filter((product) => product.subcategoryId === selected)
      : products;
  }, [selected, products]);

  return (
    <CategoryPageWrapper>
      <CategoryTitle>
        <img src={category.imgUrl}></img>
        {category.name}
      </CategoryTitle>
      {addSubCategory()}
      <ProductSortList products={filteredProduct}></ProductSortList>
    </CategoryPageWrapper>
  );
};

export default Category;
