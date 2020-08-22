import React, { useCallback } from 'react';
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

interface SelectListPropType {
  openList: boolean;
  setOpenList: Function;
  data: any;
}

const SelectList = ({ openList, setOpenList, data }: SelectListPropType) => {
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
  };

  return (
    <StyledSelectListContaienr open={openList} clickbtn={clickbtn.toString()}>
      <StyledSelectListWrapper>
        <StyledSelectList clickbtn={clickbtn.toString()} open={openList}>
          <StyledImageContentWrapper ref={detailContainer}>
            <StyledImageContent url={data.imgUrl}></StyledImageContent>
          </StyledImageContentWrapper>
          <StyledProductName>{data.name}</StyledProductName>
          <StyledProductMaxCount>
            1회 최대 구매 수량: {data.max_quantity}개
          </StyledProductMaxCount>
          <StyledSelectProductCartContent>
            <StyledProductPrice>
              {numberToString(data.price * count)}원
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
