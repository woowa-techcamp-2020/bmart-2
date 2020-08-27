import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const StyledFormControl = styled.div`
  display: flex;
`;

export const StyledInput = styled(InputBase)`
  width: 100%;
  padding-top: 0.1rem;
  input {
    width: 100%;
    padding: 0.43rem;
    font-size: 1rem;
  }
`;
