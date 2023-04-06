/* eslint-disable react-hooks/exhaustive-deps */
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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [state, setState] = useState({
    checkedB: false,
  });
  const [activeIndex, setActiveIndex] = useState(1);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [priceInputValue, setPriceInputValue] = useState(0);

  const slider = useRef(null);
  // useEffect(() => {
  //   slider.current.setAttribute('min', 0);
  //   slider.current.setAttribute('max', Object.keys(priceInput).length - 1);
  // }, []);
  useEffect(() => {
    if (priceInputValue * 1 >= 0 && priceInputValue * 1 <= 500) {
      ref1.current.style.filter = 'blur(0px)';
      ref2.current.style.filter = 'blur(5px)';
      ref3.current.style.filter = 'blur(5px)';
      setActiveIndex(0);
    } else if (priceInputValue * 1 > 500 && priceInputValue * 1 <= 2500) {
      ref1.current.style.filter = 'blur(5px)';
      ref2.current.style.filter = 'blur(0px)';
      ref3.current.style.filter = 'blur(5px)';
      setActiveIndex(1);
    } else {
      ref1.current.style.filter = 'blur(5px)';

      ref2.current.style.filter = 'blur(5px)';

      ref3.current.style.filter = 'blur(0px)';
      setActiveIndex(2);
    }
  }, [priceInputValue]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
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
          min={0}
          max={3000}
          onChange={(e) => setPriceInputValue(e.target.value)}
        />

        <span className="tooltip">
          {priceInputValue > 2500 ? '2500+' : priceInputValue}
        </span>
      </div>
      <div className={classes.toggleBox}>
        <Typography>Monthly</Typography>
        <IOSSwitch onChange={(event) => handleChange(event)} name="checkedB" />
        <Typography>Yearly</Typography>
      </div>
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={'auto'}
          centeredSlides={true}
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
              slidesPerView: 1,
              pagination: {
                el: null,
              },
              spaceBetween: 0,
              initialSlide: 0,

              allowTouchMove: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
                speed: 2000,
              },
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
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
          onSlideChange={handleSlideChange}
        >
          {data.map((price, i) => (
            <SwiperSlide
              key={i}
              ref={i === 0 ? ref1 : i === 1 ? ref2 : i === 2 ? ref3 : null}
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
              />
            </SwiperSlide>
          ))}
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
      color: 'white',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      marginBottom: '32px',
    },
  },
  swiper: {
    '&.swiper-slide': {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #445C7C',
      borderRadius: '16px',
      marginRight: '0px',
      borderTopStyle: 'solid',
      borderTopwidth: '10px',
      borderTopImage:
        'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      '&.swiper-slide-active': {
        transition:
          'background-color 0.5s ease-in-out , filter 0.5s ease-in-out !important',
      },

      '&.swiper-slide-prev': {
        transition:
          'background-color 0.5s ease-in-out , filter 0.5s ease-in-out !important',
      },
      '&.swiper-slide-next': {
        transition:
          'background-color 0.5s ease-in-out , filter 0.5s ease-in-out !important',
      },
    },
    [theme.breakpoints.up('md')]: {
      '&.swiper-slide': {
        width: '347px !important',
        '&:hover': {
          filter: 'blur(0px) !important',
        },
      },
      '&.swiper-wrapper': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    [theme.breakpoints.down('md')]: {
      '&.swiper-slide': {
        width: '100%  !important',
      },
      '&.swiper-slide-active': {
        filter: 'blur(0px) !important',
      },

      '&.swiper-slide-prev': {
        filter: 'blur(5px) !important',
      },
      '&.swiper-slide-next': {
        filter: 'blur(5px) !important',
      },
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
  toggleBox: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
