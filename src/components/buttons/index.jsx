import { Button, withStyles } from '@material-ui/core';

const CustomBotton = withStyles((theme) => ({
  text: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '4px 7px',
    '&:hover': {
      backgroundColor: 'red',
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
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1rem',
    lineHeight: '1',
    padding: '16px 32px',
    borderRadius: '0.5rem',
    textAlign: 'center',
    border: '1px solid gray',

    transition: '.2s',
    '&:hover': {
      boxShadow: '0 3px 12px 6px rgb(0 0 0 / 12%)',
      transform: 'scale(1.01) translate(0,-2px)',
      backgroundColor: '#000',
    },
  },
  simple: {
    backgroundColor: '#FF0000',
    padding: ' 6px 15px',
    fontSize: '14px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FF0000',
    },
  },
}))(Button);
export default CustomBotton;
