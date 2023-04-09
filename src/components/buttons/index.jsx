import { Button, withStyles } from '@material-ui/core';

const CustomBotton = withStyles((theme) => ({
  text: {
    color: 'white',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '4px 7px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',

    backgroundSize: '200% auto',
    transition: 'all 0.2s ease-out',
    animation: '$moveGradient 4s linear infinite',
    '&:hover': {
      backgroundPosition: 'right center',
    },
    '&:active': {
      backgroundPosition: 'left center',
    },
  },
  outlined: {
    padding: '16px 32px',
    backgroundImage: 'linear-gradient(90deg,#ff002e,#ff4667)',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
      padding: '10px 16px',
    },
  },
  contained: {
    padding: ' 6px 15px',
    fontSize: '14px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    color: 'white',
    backgroundSize: '200% auto',
    transition: 'all 0.2s ease-out',
    animation: '$moveGradient 4s linear infinite',
    '&:hover': {
      backgroundPosition: 'right center',
    },
    '&:active': {
      backgroundPosition: 'left center',
    },
  },

  simple: {
    padding: ' 6px 15px',
    fontSize: '14px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    color: 'white',
    backgroundSize: '200% auto',
    transition: 'all 0.2s ease-out',
    animation: '$moveGradient 4s linear infinite',
    '&:hover': {
      backgroundPosition: 'right center',
    },
    '&:active': {
      backgroundPosition: 'left center',
    },
  },
  '@keyframes moveGradient': {
    '0%': {
      backgroundPosition: '0% center',
    },
    '50%': {
      backgroundPosition: '100% center',
    },
    '100%': {
      backgroundPosition: '0% center',
    },
  },
}))(Button);
export default CustomBotton;
