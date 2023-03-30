import React, { useState } from 'react';
import IOSSwitch from '../Switch';
import Carousel from 'react-simply-carousel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const MonthlySlider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [value, setValue] = useState(1000);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.SliderBox}>
        <div className={classes.sliderInfoBox}>
          <Typography className={classes.sliderInfo}>Gameplays*</Typography>
          <Typography className={classes.sliderInfo}>{value}</Typography>
        </div>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={10000}
          step={500}
          variant={'light'}
        />
      </div>
      <Typography className={classes.sliderTypo}>
        Find a plan that suits your business based on expected gameplays per
        month.
      </Typography>
      <div className={classes.switchBox}>
        <Typography className={classes.priceType}>Monthly</Typography>
        <IOSSwitch />
        <Typography className={classes.priceType}>Annual</Typography>
      </div>
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
          activeSlideProps={{
            style: {
              background: '#01004e',
              color: 'white',
            },
          }}
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
          itemsToShow={3}
          speed={400}
        >
          <div className={classes.PriceingCard}>
            <div className={classes.pricingBox}>
              <Typography className={classes.priceTitle}>Seed</Typography>
              <Typography className={classes.price}>
                <span>£ </span>65 /mo
              </Typography>
              <Typography className={classes.priceSub}>
                For brands that want to change the way consumers interact with
                them.
              </Typography>
            </div>
            <div>
              <ul className={classes.priceDetails}>
                <li className={classes.priceList}>
                  <CheckCircleIcon />
                  Complex filtering
                </li>
                <li className={classes.priceList}>
                  <CheckCircleIcon />
                  1,000 daily events
                </li>
                <li className={classes.priceList}>
                  <CheckCircleIcon />
                  Transaction Preview
                </li>
                <li className={classes.priceList}>
                  <CheckCircleIcon />
                  Gas refresh rate: 5 sec
                </li>
              </ul>
            </div>
            <div className={classes.btnBox}>
              <Button className={classes.btnBox} variant="contained">
                Start Now
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default MonthlySlider;
const useStyles = makeStyles((theme) => ({}));
