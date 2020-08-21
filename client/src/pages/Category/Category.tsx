import * as React from 'react';
import {
  CategoryPageWrapper,
  CategoryTitle,
  SubCategory,
} from './Category.styles';

import ProductSortList from '../../components/ProductSortList';

const test = [
  '안녕하세요',
  '저는 이수정',
  '입니다ㅎㅎ',
  'api 연동을',
  '못했어요',
];
const title = '채소, 쌀';
const img =
  'https://bmart-2.s3.ap-northeast-2.amazonaws.com/category_images/%E1%84%8E%E1%85%A2%E1%84%89%E1%85%A9.png';
const Category = () => {
  const [selected, setSelected] = React.useState(0);
  const addSubCategory = () => {
    return test.map((item, index) => (
      <SubCategory
        selected={selected === index}
        onPointerUp={() => setSelected(index)}
        listId={index}
        key={`category-page-sub-category-${index}`}
      >
        {item}
      </SubCategory>
    ));
  };

  return (
    <CategoryPageWrapper>
      <CategoryTitle>
        <img src={img}></img>
        {title}
      </CategoryTitle>
      {addSubCategory()}
      <ProductSortList></ProductSortList>
    </CategoryPageWrapper>
  );
};

export default Category;
