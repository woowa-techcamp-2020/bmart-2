import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledMainWrap = styled.div<{
  transitionTime: number;
}>`
  transition: all ${(props) => `${props.transitionTime}`}ms linear;
  overflow-y: hidden;
`;
