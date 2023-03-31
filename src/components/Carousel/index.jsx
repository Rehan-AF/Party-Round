import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import StepCard from '../stepCard';
import img1 from '../../assets/ss1.png';
import img2 from '../../assets/ss2.png';
import img3 from '../../assets/ss3.png';
import { makeStyles } from '@material-ui/core';
const MobileCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const classes = useStyles();
  return (
    <div className={classes.contoiner}>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'none',
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        // activeSlideProps={{
        //   style: {
        //     background: "blue"
        //   }
        // }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          show: false,
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        backwardBtnProps={{
          show: false,
          children: '<',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0,
              // background: "black"
            },
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        <StepCard
          img={img1}
          nmbr={1}
          title={'Receipt scanned'}
          detail={
            'A.I powered verification system used to ensure a valid game entry.'
          }
        />
        <StepCard
          img={img2}
          nmbr={2}
          title={'Immersive gameplay '}
          detail={
            'Your brands engagement taken to new heights from our library of games.'
          }
        />
        <StepCard
          img={img3}
          nmbr={3}
          title={'Purposefully deployed'}
          detail={
            'Dependent on campaign, players can enjoy an instant win or enter in to a prize pool competition.'
          }
        />
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
const useStyles = makeStyles(() => ({
  main: {
    '&.buttons': {
      display: 'none',
    },
  },
}));
