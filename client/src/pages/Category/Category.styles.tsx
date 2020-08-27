import styled, { css } from 'styled-components';

interface SubCategoryType {
  selected: boolean;
}

export const CategoryTitle = styled.div`
  font-size: ${(props) => props.theme.font.subTitle};
  font-weight: 600;
  margin: 1.3rem 0 1rem;
  display: flex;
  img {
    width: ${(props) => props.theme.font.subTitle};
    height: ${(props) => props.theme.font.subTitle};
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
      background: ${(props) => props.theme.colors.main};
    `}
`;
