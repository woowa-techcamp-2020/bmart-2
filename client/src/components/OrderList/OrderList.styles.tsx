import styled from 'styled-components';
export const OrderListWrapper = styled.div`
  padding: 4vw;
  border-radius: 20px;
  margin: 4vw 0;
  box-shadow: ${(props) => props.theme.shadow};
  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    height: 1.1rem;
    svg {
      /* width: 2rem; */
      color: #dd4470;
      height: 1.1rem;
      margin-right: 0.4rem;
    }
  }
`;

export const StyledSummaryInfo = styled.div`
  font-weight: bold;
  margin-top: 1vh;
  display: flex;
  font-size: 1.1rem;
  h4 {
    display: inline-block;
    flex: 1;
    font-size: 1.1rem;
  }
`;

export const OrderProduct = styled.div`
  display: flex;
  margin: 1rem 0 0;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
  }
  div {
    padding-left: 0.4rem;
    font-size: 1.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    span {
      font-size: 1.1rem;
      line-height: 2rem;
      margin-left: 0.4rem;
    }
    div {
      font-size: 0.9rem;
      line-height: 2rem;
      span {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
`;
