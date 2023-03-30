import React, { useState } from 'react';
import DropCard from '../dropCard';
import Carousel from 'react-simply-carousel';

const DropsCarousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            userSelect: 'none',
            // display: 'flex',
            // gap: '32px',
            // justifyContent: 'space-between',
            // margin: '20xp',
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        // activeSlideProps={{
        //   style: {
        //     background: 'blue',
        //   },
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
        itemsToShow={props.item || 3}
        speed={400}
      >
        <DropCard />
        <DropCard
          title={'Pool'}
          Description={
            'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.'
          }
        />
        <DropCard
          title={'Pool'}
          Description={
            'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.'
          }
        />
      </Carousel>
    </div>
  );
};

export default DropsCarousel;
