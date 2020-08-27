import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const StyledAppBar = styled.div`
  width: 100%;
  background: red;
  height: 62px;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  z-index: 2;
`;

const ButtonZone = styled.div`
  flex: 3;
`;

const StyledLogoH = styled(Typography)`
  && {
    /* flex-grow: 1; */
    flex: 6;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  && {
    min-width: 32px;
  }
`;

const StyledToolbar = styled(Toolbar)``;

const StyledInput = styled.input.attrs({
  placeholder: '어떤 상품을 찾으시나요?',
})`
  flex-grow: 1;
  padding: 6px 0;
  border-width: 0;
`;

export {
  StyledLogoH,
  StyledInput,
  StyledToolbar,
  StyledButton,
  StyledAppBar,
  ButtonZone,
};
