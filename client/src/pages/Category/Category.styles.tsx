import styled, { css } from 'styled-components';

interface SubCategoryType {
  selected: boolean;
  listId: number;
}

export const CategoryPageWrapper = styled.div``;

export const CategoryTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 12px 0;
  display: flex;
  img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
`;
export const SubCategory = styled.div`
  border-radius: 12px;
  padding: 8px;
  background: white;
  text-align: center;
  display: inline-block;
  margin: 4px 12px 6px 0;
  user-select: none;
  color: #555;
  filter: drop-shadow(${(props) => props.theme.dropShadow});
  ${(props: SubCategoryType) =>
    props.selected &&
    css`
      color: white;
      font-weight: 500;
      background: #fe72a9;
      filter: drop-shadow(${(props) => props.theme.dropShadow});
    `}
`;
