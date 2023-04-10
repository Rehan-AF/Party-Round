import React, { useEffect, useState } from 'react';
import IOSSwitch from '../Switch';
import Carousel from 'react-simply-carousel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';

import './index.css';
export const MonthlySlider = ({ button, show }) => {
  console.log(show, 'show in compo');
  const [activeSlide, setActiveSlide] = useState(0);
  const [value, setValue] = useState(500);
  const classes = useStyles();
  useEffect(() => {
    if (value >= 0 && value <= 500) {
      setActiveSlide(0);
    } else if (value > 500 && value <= 2500) {
      setActiveSlide(1);
    } else {
      setActiveSlide(2);
    }
  }, [value]);

  return (
    <div>
      <div className={classes.SliderBox}>
        <div className={classes.sliderInfoBox}>
          <Typography className={classes.sliderInfo}>Gameplays*</Typography>
          <Typography className={classes.sliderInfo}>
            {value > 2500 ? '2500+' : value}
          </Typography>
        </div>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={3500}
          step={1}
          size="lg"
          tooltip="off"
          variant="secondary"
        />
      </div>
      <Typography className={classes.sliderTypo}>
        Find a plan that suits your business based on expected gameplays per
        month.
      </Typography>
      <div className={classes.switchBox}>
        <Typography className={classes.priceType}>Monthly</Typography>
        {button || <IOSSwitch />}
        <Typography className={classes.priceType}>Annual</Typography>
      </div>
      <Fade in={!show} timeout={800}>
        <div>
          <Carousel
            containerProps={{
              overflow: 'visible',
              style: {
                width: '100%',
                userSelect: 'none',
                // display: 'flex',
                // gap: '32px',
                // justifyContent: 'space-between',
                // margin: '20xp',
              },
            }}
            className={classes.slider}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: '#222',
                color: 'white',
                border: '1px solid hsla(0,0%,100%,.06)',
                boxShadow: '0 2px 10px 4px rgb(0 0 0 / 32%)',
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
            itemsToShow={4}
            speed={500}
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Series
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 85 /mo
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Beyond
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 195 /mo
                </Typography>
                <Typography className={classes.priceSub}>
                  For multiple stores that want to leverage our technology and
                  have access to our LABS.
                </Typography>
              </div>
              <div>
                <ul className={classes.priceDetails}>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    White-label integration
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    ZERO gameplay restrictions
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Custom game dev with LABS
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Host multiple tournamaents
                  </li>
                </ul>
              </div>
              <div className={classes.btnBox}>
                <Button className={classes.btnBox} variant="contained">
                  Start Now
                </Button>
              </div>
            </div>
            <div className={classes.fix}></div>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
export const AnnualSlider = ({ button, show }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [value, setValue] = useState(500);
  const classes = useStyles();
  useEffect(() => {
    if (value >= 0 && value <= 500) {
      setActiveSlide(0);
    } else if (value > 500 && value <= 2500) {
      setActiveSlide(1);
    } else {
      setActiveSlide(2);
    }
  }, [value]);

  return (
    <div>
      <div className={classes.SliderBox}>
        <div className={classes.sliderInfoBox}>
          <Typography className={classes.sliderInfo}>Gameplays*</Typography>
          <Typography className={classes.sliderInfo}>
            {value > 2500 ? '2500+' : value}
          </Typography>
        </div>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={3500}
          step={1}
          size="lg"
          tooltip="off"
          variant="secondary"
        />
      </div>
      <Typography className={classes.sliderTypo}>
        Find a plan that suits your business based on expected gameplays per
        month.
      </Typography>
      <div className={classes.switchBox}>
        <Typography className={classes.priceType}>Monthly</Typography>
        {button || <IOSSwitch />}
        <Typography className={classes.priceType}>Annual</Typography>
      </div>
      <Fade in={show} timeout={800}>
        <div>
          <Carousel
            containerProps={{
              overflow: 'visible',
              style: {
                width: '100%',
                userSelect: 'none',
                // display: 'flex',
                // gap: '32px',
                // justifyContent: 'space-between',
                // margin: '20xp',
              },
            }}
            className={classes.slider}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: '#222',
                color: 'white',
                border: '1px solid hsla(0,0%,100%,.06)',
                boxShadow: '0 2px 10px 4px rgb(0 0 0 / 32%)',
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
            itemsToShow={4}
            speed={500}
          >
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography className={classes.priceTitle}>Seed</Typography>
                <Typography className={classes.price}>
                  <span>£ </span>624 /yr
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Series
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 816 /yr
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Beyond
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 1872 /yr
                </Typography>
                <Typography className={classes.priceSub}>
                  For multiple stores that want to leverage our technology and
                  have access to our LABS.
                </Typography>
              </div>
              <div>
                <ul className={classes.priceDetails}>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    White-label integration
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    ZERO gameplay restrictions
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Custom game dev with LABS
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Host multiple tournamaents
                  </li>
                </ul>
              </div>
              <div className={classes.btnBox}>
                <Button className={classes.btnBox} variant="contained">
                  Start Now
                </Button>
              </div>
            </div>
            <div className={classes.fix}></div>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
export const MobileMonthlySlider = ({ button, show }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [value, setValue] = useState(500);
  const classes = useStyles();
  useEffect(() => {
    if (value >= 0 && value <= 500) {
      setActiveSlide(0);
    } else if (value > 500 && value <= 2500) {
      setActiveSlide(1);
    } else {
      setActiveSlide(2);
    }
  }, [value]);

  return (
    <div>
      <div className={classes.SliderBox}>
        <div className={classes.sliderInfoBox}>
          <Typography className={classes.sliderInfo}>Gameplays*</Typography>
          <Typography className={classes.sliderInfo}>
            {value > 2500 ? '2500+' : value}
          </Typography>
        </div>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={3500}
          step={1}
          size="lg"
          tooltip="off"
          variant="secondary"
        />
      </div>
      <Typography className={classes.sliderTypo}>
        Find a plan that suits your business based on expected gameplays per
        month.
      </Typography>
      <div className={classes.switchBox}>
        <Typography className={classes.priceType}>Monthly</Typography>
        {button || <IOSSwitch />}
        <Typography className={classes.priceType}>Annual</Typography>
      </div>
      <Fade in={!show} timeout={800}>
        <div>
          <Carousel
            containerProps={{
              overflow: 'visible',
              style: {
                width: '100%',
                userSelect: 'none',
                // display: 'flex',
                // gap: '32px',
                // justifyContent: 'space-between',
                // margin: '20xp',
              },
            }}
            className={classes.slider}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: '#222',
                color: 'white',
                border: '1px solid hsla(0,0%,100%,.06)',
                boxShadow: '0 2px 10px 4px rgb(0 0 0 / 32%)',
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
              show: true,
              itemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: '50%',
                  border: 0,
                  margin: '15px 3px',
                  backgroundColor: '#1D2939',
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: '50%',
                  border: 0,
                  margin: '15px 3px',
                  backgroundColor: '#7b7b7b',
                },
              },
            }}
            itemsToShow={1}
            speed={500}
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Series
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 85 /mo
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Beyond
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 195 /mo
                </Typography>
                <Typography className={classes.priceSub}>
                  For multiple stores that want to leverage our technology and
                  have access to our LABS.
                </Typography>
              </div>
              <div>
                <ul className={classes.priceDetails}>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    White-label integration
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    ZERO gameplay restrictions
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Custom game dev with LABS
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Host multiple tournamaents
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
      </Fade>
    </div>
  );
};
export const MobileAnnualSlider = ({ button, show }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [value, setValue] = useState(500);
  const classes = useStyles();
  useEffect(() => {
    if (value >= 0 && value <= 500) {
      setActiveSlide(0);
    } else if (value > 500 && value <= 2500) {
      setActiveSlide(1);
    } else {
      setActiveSlide(2);
    }
  }, [value]);

  return (
    <div>
      <div className={classes.SliderBox}>
        <div className={classes.sliderInfoBox}>
          <Typography className={classes.sliderInfo}>Gameplays*</Typography>
          <Typography className={classes.sliderInfo}>
            {value > 2500 ? '2500+' : value}
          </Typography>
        </div>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={3500}
          step={1}
          size="lg"
          tooltip="off"
          variant="secondary"
        />
      </div>
      <Typography className={classes.sliderTypo}>
        Find a plan that suits your business based on expected gameplays per
        month.
      </Typography>
      <div className={classes.switchBox}>
        <Typography className={classes.priceType}>Monthly</Typography>
        {button || <IOSSwitch />}
        <Typography className={classes.priceType}>Annual</Typography>
      </div>
      <Fade in={show} timeout={800}>
        <div>
          <Carousel
            containerProps={{
              overflow: 'visible',
              style: {
                width: '100%',
                userSelect: 'none',
                // display: 'flex',
                // gap: '32px',
                // justifyContent: 'space-between',
                // margin: '20xp',
              },
            }}
            className={classes.slider}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: '#222',
                color: 'white',
                border: '1px solid hsla(0,0%,100%,.06)',
                boxShadow: '0 2px 10px 4px rgb(0 0 0 / 32%)',
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
              show: true,
              itemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: '50%',
                  border: 0,
                  margin: '15px 3px',
                  backgroundColor: '#1D2939',
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: '50%',
                  border: 0,
                  margin: '15px 3px',
                  backgroundColor: '#7b7b7b',
                },
              },
            }}
            itemsToShow={1}
            speed={500}
          >
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography className={classes.priceTitle}>Seed</Typography>
                <Typography className={classes.price}>
                  <span>£ </span>624 /yr
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Series
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 816 /yr
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
            <div className={classes.PriceingCard}>
              <div className={classes.pricingBox}>
                <Typography
                  className={classes.priceTitle}
                  style={{ marginBottom: '00px' }}
                >
                  Beyond
                </Typography>
                <Typography
                  className={classes.priceSub}
                  style={{ marginBottom: '0px' }}
                >
                  Starting now for
                </Typography>
                <Typography className={classes.price}>
                  <span>£</span> 1872 /yr
                </Typography>
                <Typography className={classes.priceSub}>
                  For multiple stores that want to leverage our technology and
                  have access to our LABS.
                </Typography>
              </div>
              <div>
                <ul className={classes.priceDetails}>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    White-label integration
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    ZERO gameplay restrictions
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Custom game dev with LABS
                  </li>
                  <li className={classes.priceList}>
                    <CheckCircleIcon />
                    Host multiple tournamaents
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
      </Fade>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  fix: {
    width: '55px',
  },
  slider: {
    '& div div': {
      maxWidth: 586 + 16,
    },
  },
  SliderBox: {
    padding: '0 100px',
    [theme.breakpoints.down('md')]: {
      padding: '0px',
    },
  },
  sliderInfoBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sliderInfo: {
    fontSize: '30px',
    // fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  sliderTypo: {
    fontSize: '18px',
    opacity: '90%',
    textAlign: 'center',
    marginTop: '22px',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px',
      marginTop: '12px',
    },
  },
  switchBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
    margin: '32px 0',
    [theme.breakpoints.down('md')]: {
      margin: '22px 0',
    },
  },
  priceType: {
    fontSize: '15px',
  },
  PriceingCard: {
    width: '292.5px',
    marginRight: '16px !important',
    backgroundColor: 'white',
    color: 'black',
    padding: '21px 25px',
    borderRadius: '16px',
    zIndex: 100,
  },
  pricingBox: {
    textAlign: 'center',
  },
  priceTitle: {
    fontSize: '27px',
    // fontWeight: '900',
    marginBottom: '15px',
  },
  price: {
    // fontWeight: '900',
    fontSize: '46px',
    marginBottom: '12px',
    '& span': {
      fontSize: '16px',
    },
  },
  priceSub: {
    marginBottom: '67px',
    fontSize: '15px',
    opacity: '90%',
  },
  priceDetails: {
    listStyle: 'none',
    paddingLeft: '10px',
    marginBottom: '57px',
  },
  priceList: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '13px',
  },
  btnBox: {
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#414CD3',
    color: 'white',
    '&:hover': {
      backgroundColor: '#414CD3',
    },
  },
}));
