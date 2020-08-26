import React, { useEffect, useMemo, useRef, useState } from 'react';
import SaleNow from '../../components/SaleNow';
import Pull from '../../components/Pull';
import Carousel from '../../components/Carousel';
import { StyledMainWrap } from './Main.styles';
import CategoryIcons from '../../components/CategoryIcons';
import MainProductList from '../../components/MainProductList';
import { ICategory } from '../../../../types/modelTypes';
import apis from '../../apis';

let lastTouchY = 0;
let startTouchY = 0;
const minBoxSize = 100;

const defaultTransitionTime = 0;
const finishTransitionTime = 200;
let isPulling = false;
let finishTimeoutId: number | undefined;
let isFinishing = false;
let isTouchStart = false;

const Main = () => {
  const [boxHeight, setBoxHeight] = useState(0);
  const transitionContainerRef = useRef<HTMLDivElement>(null);
  const [productsInCategories, setProductsInCategories] = useState<ICategory[]>(
    []
  );

  useEffect(() => {
    const getProductByCategory = async () => {
      const res = await apis.get('/category?product=true');
      setProductsInCategories(res.data);
    };
    getProductByCategory();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setTransitionTime = (time: number) => {
    if (transitionContainerRef.current) {
      if (transitionContainerRef.current.style) {
        transitionContainerRef.current.style.transition = `transform ${time}ms linear`;
      }
    }
  };
  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    isTouchStart = true;
    if (isPulling) return;
    setTransitionTime(defaultTransitionTime);
    if (event.targetTouches && !isPulling) {
      const touch = event.targetTouches[0];
      lastTouchY = touch.clientY;
      startTouchY = touch.clientY;
      isPulling = true;
    }
  };

  const setBoxHeightByDiff = (touch: React.Touch) => {
    const defaultPadding = 80;
    const heightDiffer =
      touch.clientY -
      startTouchY +
      (isFinishing ? minBoxSize + defaultPadding : 0);
    const newHeight = Math.round(heightDiffer / 2);
    if (newHeight === boxHeight) return;
    setBoxHeight(newHeight);
  };

  const isScrollInTop = () => {
    return window.scrollY === 0;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isPulling) return;
    const { touches } = event;
    const touch = touches[0];
    if (touch.clientY - lastTouchY > 0 && isScrollInTop()) {
      setBoxHeightByDiff(touch);
      lastTouchY = touch.clientY;
    } else if (touch.clientY - lastTouchY < 0) {
      setBoxHeightByDiff(touch);
    }
  };

  const setBoxHeightToZero = () => {
    const second = 2;
    setTransitionTime(finishTransitionTime);
    setBoxHeight(minBoxSize);
    isFinishing = true;
    // finish동작은 동작 중 1번만 일어나게
    clearTimeout(finishTimeoutId);
    finishTimeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (!isTouchStart) {
          setBoxHeight(0);
          isFinishing = false;
          clearInterval(intervalId);
        }
      }, 100);
    }, second * 1000);
  };

  const onTouchEnd = () => {
    if (boxHeight > minBoxSize) {
      setBoxHeightToZero();
    } else {
      setBoxHeight(0);
    }
    isPulling = false;
    isTouchStart = false;
  };

  const getMainProductList = useMemo(() => {
    return <MainProductList productsInCategories={productsInCategories} />;
  }, [productsInCategories.length]);

  const getPull = useMemo(() => {
    return <Pull boxHeight={boxHeight} isPulling={isPulling} />;
  }, [boxHeight]);

  const transformOption = () => {
    if (boxHeight <= 0) return `translate(0px, 0px)`;
    return `translate(0px, ${boxHeight}px)`;
  };

  return (
    <StyledMainWrap
      transitionTime={defaultTransitionTime}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {getPull}
      <div
        style={{ transform: transformOption() }}
        ref={transitionContainerRef}
      >
        <CategoryIcons />
        <Carousel />
        <SaleNow />
        {getMainProductList}
      </div>
    </StyledMainWrap>
  );
};

export default Main;
