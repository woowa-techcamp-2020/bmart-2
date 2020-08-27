import styled, { css } from 'styled-components';

interface SelectListType {
  selected?: boolean;
  open?: boolean;
}

export const StyledSelectListContaienr = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  opacity: 0;
  z-index: 2;
  visibility: hidden;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column-reverse;
  transition: all 0.3s;
  ${(props: SelectListType) =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
export const StyledSelectListWrapper = styled.div`
  height: 320px;
`;

export const StyledSelectList = styled.div`
  margin: 0 auto;
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: white;
  padding: 32px;
  transform: translate3d(0, 320px, 0);
  transition: all 0.4s;
  ${(props: SelectListType) =>
    props.open &&
    css`
      transform: translate3d(0, 0, 0);
    `}
  overflow: hidden;
`;

export const StyledItem = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 12px 0;
  color: #777;
  ${(props: SelectListType) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.colors.main};
      font-weight: 700;
    `}
`;
