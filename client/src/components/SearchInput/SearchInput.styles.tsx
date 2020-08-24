import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Input } from '@material-ui/core';

export const StyledFormControl = styled(FormControl)``;

export const StyledInput = styled(Input)`
  line-height: 30px;
  root {
    color: #fff;
  }
  input {
    padding: 10px;
    font-size: 20px;
  }
`;
