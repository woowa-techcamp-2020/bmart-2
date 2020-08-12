import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledLogoH = styled(Typography)`
  && {
    flex-grow: 1;
    text-indent: 40%;
  }
`;

const StyledInput = styled.input.attrs({
  placeholder: '어떤 상품을 찾으시나요?',
})`
  flex-grow: 1;
  padding: 6px 0;
  border-width: 0;
`;

export { StyledLogoH, StyledInput };
