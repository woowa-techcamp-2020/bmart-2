import React, { useEffect, useRef, useState } from 'react';
import {
  StyledPullContainer,
  StyledPullText,
  StyledSlotsWrap,
} from './Pull.styles';
import { StyledMainWrap } from '../../pages/Main/Main.styles';

interface IPull {
  boxHeight: number;
  isPulling: boolean;
}

const range = 40;
const rangeHalf = range / 2;
const defaultTopHeight = 0;
const minBoxSize = 100;

interface IData {
  emoji: string;
  text: string;
}
const datas: IData[] = [
  {
    emoji: '🍕',
    text: '피자',
  },
  {
    emoji: '🌭',
    text: '핫도그',
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
    text: '컵케잌',
  },
];

let isFinishingState = false;
let isBeforeEnd = false;
let dataIdx = 0;

const shuffle = (array: IData[]) => {
  array.sort(() => Math.random() - 0.5);
};

const Pull = ({ boxHeight, isPulling }: IPull) => {
  const [imgTopHeight, setImgTopHeight] = useState(defaultTopHeight);
  const isPullingFinished = boxHeight === minBoxSize && !isPulling;
  const pullContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxHeight === 0) isBeforeEnd = false;
    if (isFinishingState || isBeforeEnd) return;
    if (isPullingFinished) {
      isFinishingState = true;
      isBeforeEnd = true;
      const slotAnimation = () => {
        const maxTime = 1000;
        let time = 0;
        const timeDiff = 30;
        const changeTopHeight = () => {
          setTimeout(() => {
            if (time >= maxTime) {
              dataIdx = -1;
              setImgTopHeight(0);
              isFinishingState = false;
              shuffle(datas);
              return;
            }
            setImgTopHeight(((maxTime - time) % range) - rangeHalf);
            dataIdx =
              Math.round(Math.abs((maxTime - time + rangeHalf) / range)) %
              datas.length;
            time += timeDiff;
            changeTopHeight();
          }, timeDiff);
        };
        changeTopHeight();
      };
      slotAnimation();
    } else {
      setImgTopHeight((boxHeight % range) - rangeHalf);
      dataIdx =
        Math.round(Math.abs((boxHeight + rangeHalf) / range)) % datas.length;
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
        {dataIdx === -1 ? `${datas[0].text}` : datas[dataIdx].emoji}
      </StyledSlotsWrap>
      <StyledPullText>땡겨요</StyledPullText>
    </StyledPullContainer>
  );
};

export default Pull;
