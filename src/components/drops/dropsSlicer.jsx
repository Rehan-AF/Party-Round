import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import DropCard from '../dropCard';
import game1 from '../../assets/game1.png';
import game2 from '../../assets/game2.png';
import game3 from '../../assets/game3.png';
import './index.css';

const data = [
  {
    title: 'Ball-em',
    describe:
      'Perfectly chosen, different sized blocks give your audience the context of shape and size of your product.',
    background: game1,
  },
  {
    title: 'Pool',
    describe:
      'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.',
    background: game2,
  },
  {
    title: 'Pool',
    describe:
      'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.',
    background: game3,
  },
];

const DropSlicer = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        mousewheel={true}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
          blur: 1,
          speed: 2000,
        }}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={0}
        pagination={{
          el: false,
        }}
        breakpoints={{
          // when window width is >= 480px
          300: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: null,
            },
            initialSlide: 0,
            allowTouchMove: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
              speed: 2000,
            },
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 32,
            allowTouchMove: false,
            pagination: {
              el: null,
            },
            initialSlide: 1,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
              speed: 2000,
            },
          },
        }}
        className="mySwiper"
      >
        {data.map(({ title, describe, background }, index) => (
          <SwiperSlide key={index}>
            <DropCard
              title={title}
              Description={describe}
              background={background}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default DropSlicer;
