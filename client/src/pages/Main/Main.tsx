import React, { useEffect, useState } from 'react';
import SaleNow from '../../components/SaleNow';
import Pull from '../../components/Pull';
import Carousel from '../../components/Carousel';
import { StyledMainWrap } from './Main.styles';

const Main = () => {
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 });
  const [boxHeight, setBoxHeight] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [transitionTime, setTransitionTime] = useState(0);
  const defaultTransitionTime = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTransitionTime(defaultTransitionTime);
    if (event.targetTouches && !isPulling) {
      const touch = event.targetTouches[0];
      setLastTouch({ x: touch.clientX, y: touch.clientY });
      setStartTouch({ x: touch.clientX, y: touch.clientY });
      setIsPulling(true);
    }
  };

  const isScrollInTop = () => {
    return window.scrollY === 0;
  };

  const onTouchEnd = () => {
    const minBoxSize = 100;
    if (boxHeight > minBoxSize) {
      setBoxHeight(minBoxSize);
      setTimeout(() => {
        setBoxHeight(0);
      }, 2 * 1000);
    } else {
      setBoxHeight(0);
    }

    setIsPulling(false);
    setTransitionTime(200);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isPulling) return;
    const { touches } = event;
    const touch = touches[0];
    if (touch.clientY - lastTouch.y > 0 && isScrollInTop()) {
      const heightDiffer = touch.clientY - startTouch.y;
      setBoxHeight(Math.round(heightDiffer / 2));
      setLastTouch({ x: touch.clientX, y: touch.clientY });
    } else if (touch.clientY - lastTouch.y < 0) {
      const heightDiffer = touch.clientY - startTouch.y;
      setBoxHeight(Math.round(heightDiffer / 2));
    }
  };

  return (
    <StyledMainWrap
      style={{ paddingTop: `${boxHeight}px` }}
      transitionTime={transitionTime}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Pull boxHeight={boxHeight} isPulling={isPulling} />
      <Carousel />
      <SaleNow />
    </StyledMainWrap>
  );
};

export default Main;
