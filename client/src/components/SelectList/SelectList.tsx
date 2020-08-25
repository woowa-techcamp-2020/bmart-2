import React, { useCallback, useEffect } from 'react';
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

import { numberToString } from '../../util/common';
import { IProduct } from '../../../../types/modelTypes';

interface SelectListPropType {
  openList: boolean;
  setOpenList: Function;
  product: IProduct;
}

// TODO
// 장바구니에 있는 것까지 카운트하기

const SelectList = ({ openList, setOpenList, product }: SelectListPropType) => {
  const [clickbtn, setClicked] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const detailContainer = React.useRef<HTMLDivElement>(null);

  const clickedButton = useCallback(
    (e) => {
      if (clickbtn) return;
      setClicked(true);
      setTimeout(() => {
        setOpenList(false);
        setClicked(false);
        setCount(1);
      }, 1500);
    },
    [clickbtn, setOpenList]
  );

  const countDown = () => {
    setCount(count - 1);
  };
  const countUp = () => {
    setCount(count + 1);
  };

  const cancelList = () => {
    setOpenList(false);
    setCount(1);
  };

  return (
    <StyledSelectListContaienr open={openList} clickbtn={clickbtn.toString()}>
      <StyledSelectListWrapper>
        <StyledSelectList clickbtn={clickbtn.toString()} open={openList}>
          <StyledImageContentWrapper ref={detailContainer}>
            <StyledImageContent url={product.mainImgUrl}></StyledImageContent>
          </StyledImageContentWrapper>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductMaxCount>
            1회 최대 구매 수량: {product.maxQuantity}개
          </StyledProductMaxCount>
          <StyledSelectProductCartContent>
            <StyledProductPrice>
              {numberToString(
                Math.floor((product.price * (100 - product.discount)) / 100) *
                  count
              )}
              원
            </StyledProductPrice>
            <StyledProductCountWrapper>
              <StyledCountUp
                onPointerUp={countUp}
                count={count}
              ></StyledCountUp>
              <StyledCountText>{count}</StyledCountText>
              <StyledCountDown
                onPointerUp={countDown}
                count={count}
              ></StyledCountDown>
            </StyledProductCountWrapper>
          </StyledSelectProductCartContent>
        </StyledSelectList>
      </StyledSelectListWrapper>
      <div style={{ flex: 1 }} onPointerUp={cancelList}></div>
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
