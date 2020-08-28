import React, { useEffect, useMemo, useRef, useState } from 'react';
import SaleNow from '../../components/SaleNow';
import Pull from '../../components/Pull';
import Carousel from '../../components/Carousel';
import { StyledMainWrap } from './Main.styles';
import CategoryIcons from '../../components/CategoryIcons';
import MainProductList from '../../components/MainProductList';
import { ICategory } from '../../../../types/modelTypes';
import apis from '../../apis';
import ProductRecommendList from '../../components/ProductRecommendList';
import ProductSlideList from '../../components/ProductSlideList';

import { Container } from '@material-ui/core';

interface IPos {
  x: number;
  y: number;
}
let lastTouch: IPos = { x: 0, y: 0 };
let startTouch: IPos = { x: 0, y: 0 };
const minBoxSize = 100;

const defaultTransitionTime = 0;
const finishTransitionTime = 200;
let isPulling = false;
let isFinishing = false;
let isTouchStart = false;

function isPullDown(dy: number, dx: number) {
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

  return angleDeg > 60 && angleDeg < 120;
}

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
      lastTouch = { x: touch.clientX, y: touch.clientY };
      startTouch = { x: touch.clientX, y: touch.clientY };
      isPulling = true;
    }
  };

  const setBoxHeightByDiff = (touch: React.Touch) => {
    const defaultPadding = 80;
    const heightDiffer =
      touch.clientY -
      startTouch.y +
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
    if (!isPullDown(touch.clientY - lastTouch.y, touch.clientX - lastTouch.x))
      return;
    if (touch.clientY - lastTouch.y > 0 && isScrollInTop()) {
      setBoxHeightByDiff(touch);
      lastTouch = { x: touch.clientX, y: touch.clientY };
    } else if (touch.clientY - lastTouch.y < 0) {
      setBoxHeightByDiff(touch);
    }
  };

  const setBoxHeightToZero = () => {
    const second = 2;
    setTransitionTime(finishTransitionTime);
    setBoxHeight(minBoxSize);
    if (isFinishing) return;
    isFinishing = true;
    // finish동작은 동작 중 1번만 일어나게
    setTimeout(() => {
      const intervalDelay = 100;
      const intervalId = setInterval(() => {
        if (!isTouchStart) {
          setBoxHeight(0);
          isFinishing = false;
          clearInterval(intervalId);
          const reflashDelay = 400;
          setTimeout(() => {
            window.location.reload(false);
          }, reflashDelay);
        }
      }, intervalDelay);
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
        <Carousel />
        <Container maxWidth="md">
          <CategoryIcons />
          {/* <SaleNow /> */}
          <ProductSlideList></ProductSlideList>
          <ProductRecommendList></ProductRecommendList>
        </Container>
        {getMainProductList}
      </div>
    </StyledMainWrap>
  );
};

export default Main;
