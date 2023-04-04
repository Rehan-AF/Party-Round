import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import PriceCard from '../priceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import IOSSwitch from '../Switch';
import { EffectCoverflow, Pagination } from 'swiper';
const data = [
  {
    title: 'Seed',
    price: 65,
    description:
      'For brands that want to change the way consumers interact with them.',
    details: [
      'Complex filtering',
      '1,000 daily events',
      'Transaction Preview',
      'Gas refresh rate: 5 sec',
    ],
  },
  {
    title: 'Series',
    price: 85,
    description:
      "You've got traction with our service and now you want to tell the whole world.",
    details: [
      'Complex filtering',
      '5,000 daily events',
      'Transaction Preview',
      'Gas refresh rate: 3 sec',
    ],
  },
  {
    title: 'Beyond',
    price: 195,
    description:
      'For multiple stores that want to leverage our technology and have access to our LABS.',
    details: [
      'White-label integration  ',
      'ZERO gameplay restrictions',
      'Transaction Preview',
      'Host multiple tournamaents',
    ],
  },
];
const Pricing = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedB: false,
  });
  const [initialSlideState, setInitialSlide] = useState(1);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [priceInputValue, setPriceInputValue] = useState('0');
  const priceInput = {
    0: '0',
    1: '500',
    2: '1000',
    3: '1500',
    4: '2000',
    5: '2500',
    6: '2500+',
  };

  const slider = useRef(null);
  useEffect(() => {
    slider.current.setAttribute('min', 0);
    slider.current.setAttribute('max', Object.keys(priceInput).length - 1);
  }, []);
  useEffect(() => {
    if (
      priceInput[priceInputValue] * 1 >= 0 &&
      priceInput[priceInputValue] * 1 <= 500
    ) {
      setInitialSlide(0);
    } else if (
      priceInput[priceInputValue] * 1 > 500 &&
      priceInput[priceInputValue] * 1 <= 2500
    ) {
      setInitialSlide(1);
    } else {
      setInitialSlide(2);
    }
  }, [priceInputValue]);
  console.log(initialSlideState);
  return (
    <div>
      <div className={classes.top}>
        <Typography className={classes.title}>
          Simple <span>pricing</span> that works at any scale.
        </Typography>
        <Typography className={classes.descrip}>
          Forget complex pricing structures, we believe in simple , transparent
          pricing that works for everyone, whether you’re big or small..
        </Typography>
        <Typography className={classes.subTitle}>
          Each plan includes a 7-day trial and you can cancel at any time.
        </Typography>
      </div>

      <div className="pricing-slider center-content">
        <input
          type="range"
          id="gradient-range"
          ref={slider}
          steps={1}
          defaultValue={priceInputValue}
          onChange={(e) => setPriceInputValue(e.target.value)}
        />

        <span className="tooltip">{priceInput[priceInputValue]}</span>
      </div>
      <div>
        <IOSSwitch onChange={(event) => handleChange(event)} name="checkedB" />
      </div>
      <div>
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
              pagination: {
                el: null,
              },
              spaceBetween: 50,
              initialSlide: 0,
              allowTouchMove: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
                speed: 2000,
              },
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
              allowTouchMove: false,
              centeredSlides: false,
              pagination: {
                el: null,
              },
              initialSlide: initialSlideState,
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
          {data.map(({ title, price, description, details }, index) => {
            return (
              <SwiperSlide key={index}>
                <PriceCard
                  title={title}
                  price={price}
                  description={description}
                  year={state.checkedB}
                  details={details}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Pricing;

const useStyles = makeStyles((theme) => ({
  top: {
    textAlign: 'center',
  },
  title: {
    fontSize: '35px',
    fontWeight: '600',
    marginBottom: '70px',
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
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '17px',
    },
  },
  subTitle: {
    fontWeight: '600',
    fontSize: '24px',
    marginBottom: '44px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '12px',
    },
  },
}));
