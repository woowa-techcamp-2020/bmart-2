import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCategoryIconsWrap = styled.div`
  margin: 1vw 0 3vw;
`;

export const StyledCategoryIconsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCategoryIconsCol = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 8px;
    font-size: 0.7rem;
    font-weight: bolder;
    margin-top: 5px;
    border-radius: 20px;
    width: 9vw;
    height: 9vw;
    box-shadow: ${(props) => props.theme.shadow};
  }
  img {
    width: 100%;
  }
  p {
    font-size: 0.7rem;
    margin: 8px 0;
  }
`;
