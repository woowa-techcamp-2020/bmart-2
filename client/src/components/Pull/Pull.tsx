import React, { useEffect, useRef, useState } from 'react';
import { StyledPullContainer, StyledSlotsWrap } from './Pull.styles';
import { StyledMainWrap } from '../../pages/Main/Main.styles';

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
  const [imgTopHeight, setImgTopHeight] = useState(defaultTopHeight);
  const [dataIdx, setDataIdx] = useState(0);

  const isPullingFinished = boxHeight === minBoxSize && !isPulling;
  const pullContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPullingFinished) {
      const slotAnimation = () => {
        const maxTime = 1000;
        let time = 0;
        const timeDiff = 30;
        const changeTopHeight = () => {
          setTimeout(() => {
            if (time >= maxTime) {
              setDataIdx(-1);
              setImgTopHeight(0);
              return;
            }
            setImgTopHeight(((maxTime - time) % range) - rangeHalf);
            setDataIdx(
              Math.round(Math.abs((maxTime - time + rangeHalf) / range)) %
                datas.length
            );
            time += timeDiff;
            changeTopHeight();
          }, timeDiff);
        };
        changeTopHeight();
      };
      slotAnimation();
    } else {
      setImgTopHeight((boxHeight % range) - rangeHalf);
      setDataIdx(
        Math.round(Math.abs((boxHeight + rangeHalf) / range)) % datas.length
      );
    }
  }, [boxHeight, isPullingFinished]);

  const slotsOpacity = 1 - Math.abs(imgTopHeight / rangeHalf);
  const transformOption = () => {
    const newHight = boxHeight / 4;
    if (newHight <= 0 || newHight >= window.innerHeight) {
      return `translate(0px, 0px)`;
    }
    if (isPullingFinished) {
      return `translate(0px, 50px)`;
    }
    return `translate(0px, ${newHight}px)`;
  };

  return (
    <StyledPullContainer
      style={{ height: `${boxHeight}px`, transform: transformOption() }}
      ref={pullContainerRef}
    >
      <StyledSlotsWrap
        style={{ top: `${imgTopHeight}px`, opacity: slotsOpacity }}
      >
        {dataIdx === -1 ? '핫도그가' : datas[dataIdx].emoji}
      </StyledSlotsWrap>
      <div>땡겨요</div>
    </StyledPullContainer>
  );
};

export default Pull;
