import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

interface ICategoryProps {
  hidden: boolean;
}

export const MenuPageButtonWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuCaegoryWrapper = styled(Grid)`
  width: 100%;
  margin: 1rem 0;
`;

export const MenuCategory = styled.div`
  display: flex;
  padding: 8px 0;
  img {
    width: 7vw;
    height: 7vw;
  }
  div {
    margin-left: 1rem;
    font-size: 0.9rem;
    line-height: 7vw;
  }
`;

export const MenuPageButton = styled.div`
  width: 20vw;
  height: 20vw;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    padding: 8px;
    font-size: 1rem;
  }
  svg {
    width: 7vw;
    height: 7vw;
  }
`;

export const StyledSubCategory = styled(Grid)`
  padding: 0.5rem;
  font-size: 0.9rem;
  color: #777;
`;

export const SubcategoryWrapper = styled(Grid)`
  ${(props: ICategoryProps) =>
    props.hidden &&
    css`
      display: none !important;
    `}
`;

export default {};
