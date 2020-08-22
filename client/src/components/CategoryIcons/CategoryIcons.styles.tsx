import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCategoryIconsWrap = styled.div`
  margin-top: 10px;
`;

export const StyledCategoryIconsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCategoryIconsCol = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  height: 95px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 0.7rem;
    font-weight: bolder;
    margin-top: 5px;
  }
  img {
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 20px;
    width: 55px;
    height: 55px;
  }
`;
