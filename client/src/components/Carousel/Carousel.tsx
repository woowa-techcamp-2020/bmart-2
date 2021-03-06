import React, { useEffect, useRef, useState } from 'react';

import {
  StyledWrapper,
  StyledHourse,
  StyledCarousel,
  StyledThumb,
  StyledPaginationWrapper,
  StyledBullet,
  StyledCheckedBullet,
  StyledCurrentThumb,
} from './Carousel.styles';

interface bannerInfo {
  id: number;
  img_url: string;
}

interface CarouselProps {
  banners: Array<bannerInfo>;
}

const Carousel = ({ banners }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalId = useRef(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    translateByIndex(1);
    initScrollEvent();
    setSwiperInterval();
  }, []);

  const setSwiperInterval = () => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    intervalId.current = setInterval(() => {
      swipe();
    }, 3000);
  };

  const clearSwiperInterval = () => {
    clearInterval(intervalId.current);
  };

  const translateByIndex = (i: number) => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    const carouselElementWidth = carouselElement.clientWidth;
    const hourseWidth = (carouselElementWidth * 85) / 100;
    const initWidth = (carouselElementWidth * 75) / 100;
    carouselElement.style.scrollBehavior = 'initial';
    carouselElement.scrollLeft = initWidth + hourseWidth * i;
    carouselElement.style.scrollBehavior = 'smooth';
  };

  const swipe = () => {
    const carouselElement = carouselRef.current;

    if (!carouselElement) return;
    const carouselElementWidth = carouselElement.clientWidth;
    const hourseWidth = (carouselElementWidth * 85) / 100;
    carouselElement.style.scrollBehavior = 'smooth';
    carouselElement.scrollLeft += hourseWidth;
  };
  const createRenderData = (banners: Array<bannerInfo>) => {
    const { length } = banners;
    return [
      banners[length - 2],
      banners[length - 1],
      ...banners,
      banners[0],
      banners[1],
    ];
  };

  const getIndexByScrollLeft = (): number => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return -1;
    const carouselElementWidth = carouselElement.clientWidth;
    const hourseWidth = (carouselElementWidth * 85) / 100;
    const initWidth = (carouselElementWidth * 75) / 100;
    const { scrollLeft } = carouselElement;
    return Math.round((scrollLeft - initWidth) / hourseWidth);
  };

  const initScrollEvent = () => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    let timer: any = null;
    carouselElement.addEventListener('scroll', () => {
      const curIndex = getIndexByScrollLeft();
      if (getIndexByScrollLeft() >= banners.length + 1)
        setIndex(curIndex - 1 - banners.length);
      else if (getIndexByScrollLeft() <= 0)
        setIndex(banners.length + curIndex - 1);
      else if (curIndex && curIndex - 1 >= 0 && curIndex <= banners.length)
        setIndex(curIndex - 1);
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        if (getIndexByScrollLeft() >= banners.length + 1) {
          translateByIndex(getIndexByScrollLeft() - banners.length);
        } else if (getIndexByScrollLeft() <= 0) {
          translateByIndex(banners.length + getIndexByScrollLeft());
        }
      }, 50);
    });
    carouselElement.addEventListener('touchstart', () => {
      clearSwiperInterval();
    });
    carouselElement.addEventListener('touchend', () => {
      setSwiperInterval();
    });
  };

  const renderHorses = () => {
    return createRenderData(banners).map((info, i) => {
      const Thumb = info.id === index ? StyledCurrentThumb : StyledThumb;
      return (
        <StyledHourse key={`horse_${i}`}>
          <Thumb src={info.img_url} key={`img_${i}`} />
        </StyledHourse>
      );
    });
  };

  const renderBullet = (info: bannerInfo) => {
    const Bullet = index === info.id ? StyledCheckedBullet : StyledBullet;
    return (
      <Bullet key={`label_${info.id + 1}`}>
        <input
          type="radio"
          key={`bullet_${info.id + 1}`}
          value={info.id + 1}
          name="page"
          onChange={(e) => {
            clearSwiperInterval();
            translateByIndex(parseInt(e.target.value));
            setSwiperInterval();
          }}
          checked={index === info.id}
        />
      </Bullet>
    );
  };
  const renderPagination = () => {
    return (
      <StyledPaginationWrapper>
        {banners.map((info) => {
          return renderBullet(info);
        })}
      </StyledPaginationWrapper>
    );
  };
  return (
    <StyledWrapper>
      <StyledCarousel ref={carouselRef}>{renderHorses()}</StyledCarousel>
      {renderPagination()}
    </StyledWrapper>
  );
}

Carousel.defaultProps = {
  banners: [
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
      id: 4,
      img_url:
        'https://img-cf.kurly.com/shop/data/m/event/bc9b91586a619ffcfa8d7d5de83aae86.jpg',
    },
  ],
} as Partial<CarouselProps>;

export default Carousel;