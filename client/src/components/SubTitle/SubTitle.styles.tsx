import styled from 'styled-components';

export const SubTitleWrapper = styled.div`
  display: flex;
  padding: 16px 0 0;
  height: 8vw;
  span {
    line-height: 8vw;
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

export const IconWrapper = styled.div`
  width: 8vw;
  height: 100%;
  background: ${(props) => props.theme.colors.main};
  border-radius: 20px;
  svg {
    margin: 15%;
    width: 70%;
    height: 70%;
    color: white;
  }
`;
