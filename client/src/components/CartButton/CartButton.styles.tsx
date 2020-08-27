import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const StyledFab = styled(Fab)`
  background-color: ${(props) => props.theme.colors.main} !important;
  position: fixed !important;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
`;

export const StyledCount = styled.span`
  position: absolute;
  right: 18%;
  top: 18%;
  background-color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  font-size: 0.6rem;
  line-height: 0.8rem;
`;
