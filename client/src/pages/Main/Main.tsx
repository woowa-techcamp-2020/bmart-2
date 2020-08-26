import React, { useEffect, useMemo, useState } from 'react';
import SaleNow from '../../components/SaleNow';
import Pull from '../../components/Pull';
import Carousel from '../../components/Carousel';
import { StyledMainWrap } from './Main.styles';
import CategoryIcons from '../../components/CategoryIcons';
import MainProductList from '../../components/MainProductList';
import { ICategory } from '../../../../types/modelTypes';
import apis from '../../apis';

let lastTouch: { x: number; y: number } = {
  x: 0,
  y: 0,
};
let startTouch: { x: number; y: number } = {
  x: 0,
  y: 0,
};
const Main = () => {
  const [boxHeight, setBoxHeight] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [transitionTime, setTransitionTime] = useState(0);
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
  const defaultTransitionTime = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTransitionTime(defaultTransitionTime);
    if (event.targetTouches && !isPulling) {
      const touch = event.targetTouches[0];
      lastTouch = { x: touch.clientX, y: touch.clientY };
      startTouch = { x: touch.clientX, y: touch.clientY };
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
      lastTouch = { x: touch.clientX, y: touch.clientY };
    } else if (touch.clientY - lastTouch.y < 0) {
      const heightDiffer = touch.clientY - startTouch.y;
      const newHeight = Math.round(heightDiffer / 2);
      if (newHeight === boxHeight) return;
      setBoxHeight(newHeight);
    }
  };

  const transformOption = () => {
    if (boxHeight <= 0) return `translate(0px, 0px)`;
    return `translate(0px, ${boxHeight}px)`;
  };

  const getMainProductList = useMemo(() => {
    return <MainProductList productsInCategories={productsInCategories} />;
  }, [productsInCategories.length]);

  return (
    <StyledMainWrap
      transitionTime={transitionTime}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Pull boxHeight={boxHeight} isPulling={isPulling} />
      <div style={{ transform: transformOption() }}>
        <CategoryIcons />
        {/* <SearchInput /> */}
        <Carousel />
        <SaleNow />
        {/* {boxHeight <= 0 ? <MainProductList /> : <></>} */}
        {getMainProductList}
      </div>
    </StyledMainWrap>
  );
};

export default Main;
