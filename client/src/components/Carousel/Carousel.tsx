import React, { useEffect, useRef } from 'react';
import {
  StyledWrapper,
  StyledHourse,
  StyledCarousel,
  StyledThumb,
} from './Carousel.styles';

const bannerImg = [
  {
    id: 0,
    img_url:
      'https://img-cf.kurly.com/shop/data/m/event/fa9d6731b3f39c03dc830c02c414cc52.jpg',
  },
  {
    id: 1,
    img_url:
      'https://img-cf.kurly.com/shop/data/m/event/bc9b91586a619ffcfa8d7d5de83aae86.jpg',
  },
  {
    id: 2,
    img_url:
      'https://img-cf.kurly.com/shop/data/m/event/758688e5267c724d33ebcab68de2599c.jpg',
  },
  {
    id: 3,
    img_url:
      'https://img-cf.kurly.com/shop/data/m/event/fa9d6731b3f39c03dc830c02c414cc52.jpg',
  },
  {
    id: 1,
    img_url:
      'https://img-cf.kurly.com/shop/data/m/event/bc9b91586a619ffcfa8d7d5de83aae86.jpg',
  },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startSwipeInterval();
  }, []);

  const startSwipeInterval = () => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    const carouselElementWidth = carouselElement.clientWidth;
    const swipeWidth = (carouselElementWidth * 85) / 100;
    const initWidth = (carouselElementWidth * 75) / 100;
    carouselElement.scrollLeft = initWidth;
    console.log(carouselElement.scrollLeft);
    setInterval(() => {
      const { scrollLeft } = carouselElement;
      console.log(scrollLeft);
      carouselElement.style.scrollBehavior = 'smooth';
      carouselElement.scrollLeft = scrollLeft + swipeWidth;
    }, 1000);
  };

  const renderHorses = () => {
    return bannerImg.map((info) => {
      return (
        <StyledHourse key={`horse_${info.id}`}>
          <StyledThumb src={info.img_url} key={`img_${info.id}`} />
        </StyledHourse>
      );
    });
  };

  return (
    <StyledWrapper>
      <StyledCarousel ref={carouselRef}>{renderHorses()}</StyledCarousel>
    </StyledWrapper>
  );
}
