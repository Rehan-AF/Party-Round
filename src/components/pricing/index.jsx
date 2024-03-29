import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PriceCard from '../priceCard';
import {
  CarouselProvider,
  Slider,
  Slide,
  WithStore,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './index.css';
import IOSSwitch from '../Switch';

const data = [
  {
    title: 'Seed',
    price: 65,
    description: 'For brands that want to level-up their revenue channels.',
    details: [
      '500 Accumulated Entries',
      'Single Games',
      'Basic Insights',
      'Single User Access',
    ],
  },
  {
    title: 'Series',
    price: 85,
    description: 'For brands that need to engage with  a bigger audience.',
    details: [
      '1K Accumulated Entries ',
      'Advanced Analytics',
      'Schedule Games',
      'Multiple User Access',
    ],
  },
  {
    title: 'Beyond',
    price: 195,
    description: 'For large brands who want limitless control.',
    details: [
      '5K Accumulated Entires',
      'Host Multiple Games',
      'Priority Support',
      'Own Domain',
    ],
  },
];
function Listener(props) {
  useEffect(() => {
    if (props.updatePlace) {
      props.updatePlace(props.currentSlide);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentSlide, props.updatePlace]);

  return null;
}

export const WrappedListener = WithStore(Listener, (state) => {
  return {
    currentSlide: state.currentSlide,
  };
});

const Pricing = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedB: false,
  });
  const [activeIndex, setActiveIndex] = useState(1);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [priceInputValue, setPriceInputValue] = useState(0);

  useEffect(() => {
    if (priceInputValue * 1 >= 0 && priceInputValue * 1 <= 500) {
      setActiveIndex(0);
    } else if (priceInputValue * 1 > 500 && priceInputValue * 1 <= 2500) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  }, [priceInputValue]);

  const updatePlace = (currentSlide) => {
    const index = Math.round(currentSlide);
    setActiveIndex(index);
  };
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Typography className={classes.smTitle}>CALM</Typography>

        <Typography className={classes.title}>
          Simple <span>pricing</span> that works at any <span>scale</span>.
        </Typography>
        <Typography className={classes.descrip}>
          Transparent pricing that works for everyone whether you're big or
          small
        </Typography>
        {/* <Typography className={classes.subTitle}>
          Each plan includes a 7-day trial and you can cancel at any time.
        </Typography> */}
      </div>

      <div className={classes.pricingSlider}>
        <div>
          <input
            type="range"
            id="gradient-range"
            steps={1}
            min={0}
            max={3000}
            onChange={(e) => setPriceInputValue(e.target.value)}
          />
        </div>
        <div className={classes.pricingSubDiv}>
          <Typography className={classes.pricingDetails}>Gameplays*</Typography>
          <Typography className={classes.pricingDetails}>
            {priceInputValue > 2500 ? '2500+' : priceInputValue}
          </Typography>
        </div>
      </div>
      <Typography className={classes.suggestion}>
        Find a plan that suits your business based on accumulated gameplays per
        month.
      </Typography>
      <div className={classes.toggleBox}>
        <Typography>Monthly</Typography>
        <IOSSwitch onChange={(event) => handleChange(event)} name="checkedB" />
        <Typography>Yearly</Typography>
      </div>
      <div>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={200}
          isIntrinsicHeight
          infinite={false}
          touchEnabled={window.innerWidth > 960 ? false : true}
          dragEnabled={window.innerWidth > 960 ? false : true}
          totalSlides={3}
          visibleSlides={window.innerWidth < 960 ? 1.15 : 3}
          currentSlide={window.innerWidth > 960 ? 0 : activeIndex}
          enableSwipe={window.innerWidth > 960 ? false : true}
          preventMovementUntilSwipeScrollTolerance={true}
          className={classes.final}
        >
          <WrappedListener updatePlace={updatePlace} />
          <Slider className={classes.tray}>
            {data.map((price, i) => (
              <Slide
                index={i}
                key={i}
                className={`${classes.swiper} ${
                  activeIndex === i
                    ? `mobileSwiper-slide-active ${classes.swiperSlideActive}`
                    : 'mobileSwiper-slide-notActive'
                }`}
              >
                <PriceCard
                  title={price.title}
                  price={price.price}
                  description={price.description}
                  details={price.details}
                  year={state.checkedB}
                  index={activeIndex === i ? true : false}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Pricing;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  top: {
    textAlign: 'center',
  },
  smTitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: '600',
    fontSize: '10px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
  },
  title: {
    fontSize: '35px',
    // fontWeight: '600',
    color: '#f6f6f6',
    marginBottom: '50px',
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      marginBottom: '32px',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  descrip: {
    fontSize: '24px',
    marginBottom: '50px',
    opacity: '90%',
    color: '#c9c9c9',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '17px',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.1,
    },
  },
  subTitle: {
    // fontWeight: '600',
    fontSize: '24px',
    marginBottom: '44px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '12px',
    },
  },
  pricingSlider: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      width: 926,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1100,
    },
  },
  pricingSubDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '17px 0',
    [theme.breakpoints.down('md')]: {
      margin: '10px 0',
    },
  },
  pricingDetails: {
    fontSize: '24px',
    color: '#E2E2E2',
    // fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
  },
  suggestion: {
    fontSize: '18px',
    color: '#F6F6F6CC',
    textAlign: 'center',
    margin: '10px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px',
      marginTop: '0px',
    },
  },
  toggleBox: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '45px',
    '& p': {
      fontSize: '15px',
    },
  },

  tray: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));
