// Import Swiper React components
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledInput } from './Swiper.styles';
// Import Swiper styles
import 'swiper/swiper.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function ADSwiper() {
  const { height, width } = useWindowDimensions();
  console.log(width);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={width < 750 ? 1 : 4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <SwiperSlide>
        <StyledInput />
      </SwiperSlide>
      <SwiperSlide>
        <StyledInput />
      </SwiperSlide>
      <SwiperSlide>
        <StyledInput />
      </SwiperSlide>
      <SwiperSlide>
        <StyledInput />
      </SwiperSlide>
    </Swiper>
  );
}
