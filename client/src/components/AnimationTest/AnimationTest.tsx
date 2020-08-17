import React, { useState, useCallback } from 'react';

import {
  StyledFood,
  StyeldAnimationWrapper,
  StyledFoodWrapper,
  StyledCartButton,
} from './AnimationTest.styles';

const url = 'https://img-cf.kurly.com/shop/data/goods/1593752126421y0.jpg';
const AnimationTest = () => {
  const [timing, setTiming] = useState(false);
  const [count, setCount] = useState(1);

  const onClick = useCallback(() => {
    setTiming(true);
    // 담긴 후에
    // setTiming(false);
    // 지금은 걍 setTimeout 해야지
    setTimeout(() => {
      // 버튼 카운트(?)나 글씨 바뀌어야함
      setCount(count + 1);
      setTiming(false);
    }, 1500);
  }, [timing]);

  return (
    <StyeldAnimationWrapper>
      <StyledFoodWrapper className="food-wrapper">
        <StyledFood timing={timing} url={url}></StyledFood>
      </StyledFoodWrapper>
      <StyledCartButton onPointerUp={onClick} timing={timing} disabled={true}>
        {count}
      </StyledCartButton>
    </StyeldAnimationWrapper>
  );
};

export default AnimationTest;
