import React, { useEffect, useState } from 'react';
import { StyledPullContainer, StyledSlotsWrap } from './Pull.styles';

interface IPull {
  boxHeight: number;
  isPulling: boolean;
}

const range = 40;
const rangeHalf = range / 2;
const defaultTopHeight = 0;
const minBoxSize = 100;
const datas: {
  emoji: string;
  text: string;
}[] = [
  {
    emoji: '🍕',
    text: '피자',
  },
  {
    emoji: '🌭',
    text: '핫도',
  },
  {
    emoji: '🌮',
    text: '타코',
  },
  {
    emoji: '🥚',
    text: '달걀',
  },
  {
    emoji: '🧈',
    text: '버터',
  },
  {
    emoji: '🍜',
    text: '라면',
  },
  {
    emoji: '🍛',
    text: '카레',
  },
  {
    emoji: '🧁',
    text: '컵케이',
  },
];
const Pull = ({ boxHeight, isPulling }: IPull) => {
  const [topHeight, setTopHeight] = useState(defaultTopHeight);
  const [isFinishPull, setIsFinishPull] = useState(false);
  const [dataIdx, setDataIdx] = useState(0);

  const isPullingFinished = boxHeight === minBoxSize && !isPulling;

  useEffect(() => {
    if (isPullingFinished) {
      const slotAnimation = () => {
        const maxTime = 1000;
        let time = 0;
        const changeTopHeight = () => {
          setTimeout(() => {
            if (time >= maxTime) {
              setDataIdx(-1);
              setTopHeight(0);
              return;
            }
            setTopHeight(((maxTime - time) % range) - rangeHalf);
            setDataIdx(
              Math.round(Math.abs((maxTime - time + rangeHalf) / range)) %
                datas.length
            );
            time += 30;
            changeTopHeight();
          }, 30);
        };
        changeTopHeight();
      };
      slotAnimation();
    } else {
      setTopHeight((boxHeight % range) - rangeHalf);
      setDataIdx(
        Math.round(Math.abs((boxHeight + rangeHalf) / range)) % datas.length
      );
    }
  }, [boxHeight]);

  const slotsOpacity = 1 - Math.abs(topHeight / rangeHalf);

  return (
    <StyledPullContainer style={{ top: `${50 + boxHeight}px` }}>
      <StyledSlotsWrap style={{ top: `${topHeight}px`, opacity: slotsOpacity }}>
        {dataIdx === -1 ? '핫도그가' : datas[dataIdx].emoji}
      </StyledSlotsWrap>
      <div>땡겨요</div>
    </StyledPullContainer>
  );
};

export default Pull;
