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
    title: 'UV Tennis',
    describe:
      'Play against the master as you race to increasing your dexterity and of course your score. ',
    background: game1,
  },
  {
    title: 'Table Tennis',
    describe:
      'A home game inspired by the nations favourite puts your racket skills to the test, progressively getting harder.',
    background: game2,
  },
  {
    title: 'BIT-Ball',
    describe:
      'Retro inspired graphics to give you a nostalgic gameplay. Save the 1x1 from entering into the goal.',
    background: game3,
  },
];

const DropSlicer = () => {
  const classes = useStyles();
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={294}
        naturalSlideHeight={200}
        isIntrinsicHeight
        infinite={false}
        touchEnabled={window.innerWidth > 960 ? false : true}
        dragEnabled={window.innerWidth > 960 ? false : true}
        totalSlides={3}
        visibleSlides={window.innerWidth < 960 ? 1.15 : 3}
        currentSlide={window.innerWidth > 960 ? 1 : 0}
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
