import React, { useEffect, useCallback } from 'react';
import {
  StyledSelectListContaienr,
  StyledSelectListWrapper,
  StyledImageContentWrapper,
  StyledSelectList,
  StyledImageContent,
  StyledProductName,
  StyledProductMaxCount,
  StyledSelectProductCartContent,
  StyledProductPrice,
  StyledProductCountWrapper,
  StyledSelectListButtonWrapper,
  StyledSelectListButton,
  StyledCountDown,
  StyledCountUp,
  StyledCountText,
} from './SelectList.styles';

interface SelectListPropType {
  openList: boolean;
  setOpenList: Function;
}

const SelectList = ({ openList, setOpenList }: SelectListPropType) => {
  const [clickbtn, setClicked] = React.useState(false);
  const detailContainer = React.useRef<HTMLDivElement>(null);

  const clickedButton = useCallback(
    (e) => {
      setClicked(true);
      // 담긴 후에
      // setTiming(false);
      // 지금은 걍 setTimeout 해야지
      setTimeout(() => {
        setOpenList(false);
        setClicked(false);
      }, 1500);
    },
    [clickbtn]
  );

  return (
    <StyledSelectListContaienr open={openList} clickbtn={clickbtn.toString()}>
      <StyledSelectListWrapper>
        <StyledSelectList clickbtn={clickbtn.toString()} open={openList}>
          <StyledImageContentWrapper ref={detailContainer}>
            <StyledImageContent url="https://img-cf.kurly.com/shop/data/goods/1530775904381y0.jpg"></StyledImageContent>
          </StyledImageContentWrapper>
          <StyledProductName>[다담] 찌개 양념장 6종</StyledProductName>
          <StyledProductMaxCount>
            1회 최대 구매 수량: 10개{' '}
          </StyledProductMaxCount>
          <StyledSelectProductCartContent>
            <StyledProductPrice>3,700원</StyledProductPrice>
            <StyledProductCountWrapper>
              <StyledCountUp></StyledCountUp>
              <StyledCountText>1</StyledCountText>

              <StyledCountDown></StyledCountDown>
            </StyledProductCountWrapper>
          </StyledSelectProductCartContent>
        </StyledSelectList>
      </StyledSelectListWrapper>
      <StyledSelectListButtonWrapper>
        <StyledSelectListButton
          open={openList}
          onPointerUp={clickedButton}
          clickbtn={clickbtn.toString()}
        ></StyledSelectListButton>
      </StyledSelectListButtonWrapper>
    </StyledSelectListContaienr>
  );
};

export default SelectList;
