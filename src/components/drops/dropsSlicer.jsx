import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import DropCard from '../dropCard';
import game1 from '../../assets/image40.png';
import game2 from '../../assets/image41.png';
import game3 from '../../assets/image42.png';
import { makeStyles } from '@material-ui/core';
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
  const classes = useStyles();
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        isIntrinsicHeight
        infinite={false}
        touchEnabled={window.innerWidth > 960 ? false : true}
        dragEnabled={window.innerWidth > 960 ? false : true}
        totalSlides={3}
        visibleSlides={window.innerWidth < 960 ? 1.15 : 3}
        currentSlide={0}
        enableSwipe={window.innerWidth > 960 ? false : true}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        <Slider className={classes.tray}>
          {data.map(({ title, describe, background }, index) => (
            <Slide key={index} index={index}>
              <DropCard
                title={title}
                Description={describe}
                background={background}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </>
  );
};
export default DropSlicer;
const useStyles = makeStyles((theme) => ({
  tray: {
    '&.carousel__slide': {
      [theme.breakpoints.up('md')]: {
        width: '360px !important',
      },
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));
