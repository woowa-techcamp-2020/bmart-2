import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledInput } from './Swiper.styles';
import 'swiper/swiper.scss';

export default function ADSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
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
