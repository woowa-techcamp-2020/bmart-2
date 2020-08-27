import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const StyledFab = styled(Fab)`
  background-color: ${(props) => props.theme.colors.main} !important;
  position: fixed !important;
  bottom: 1rem;
  right: 1rem;
`;

export const StyledCount = styled.span`
  position: absolute;
  right: 20%;
  top: 20%;
  background-color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  font-size: 0.6rem;
  line-height: 0.8rem;
`;
