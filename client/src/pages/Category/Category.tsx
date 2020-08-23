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
}
const selectedAll = {
  id: 0,
  name: '전체보기',
};

const Category = () => {
  const location = useLocation<ICategoryLocationState>();
  const { category } = location.state;
  const [selected, setSelected] = React.useState(0);
  const [products, setProducts] = React.useState<IProduct[] | null>(null);
  React.useEffect(() => {
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
        onPointerUp={() => setSelected(item.id)}
        key={`category-page-sub-category-${item.id}`}
      >
        {item.name}
      </SubCategory>
    ));
  };

  const filteredProduct: IProduct[] | null = React.useMemo(
    () =>
      products
        ? products.filter((product) => product.subcategoryId === selected)
        : null,
    [selected]
  );

  return (
    <CategoryPageWrapper>
      <CategoryTitle>
        <img src={category.imgUrl}></img>
        {category.name}
      </CategoryTitle>
      {addSubCategory()}
      <ProductSortList
        products={selected ? filteredProduct : products}
      ></ProductSortList>
    </CategoryPageWrapper>
  );
};

export default Category;
