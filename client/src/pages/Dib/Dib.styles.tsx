import styled from 'styled-components';
import { Grid } from '@material-ui/core';
export const DibTitle = styled.div`
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
  background: #dd4470;
  border-radius: 20px;
  svg {
    margin: 15%;
    width: 70%;
    height: 70%;
    color: white;
  }
`;

export const DibCount = styled.div`
  color: #777;
  font-size: 1rem;
  padding: 1rem 0;
`;

export const DibItem = styled(Grid)``;

export default {};
