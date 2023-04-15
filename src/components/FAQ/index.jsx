import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
const question = [
  {
    question: 'How long does the integration process take?',
    answer:
      'Our onboarding is seamless and easy, this means that you can be up and running in minutes.',
  },
  {
    question: 'Do you support online businesses?',
    answer:
      'This is something that is on our roadmap, and our team are working to bring this feature out soon.',
  },
  {
    question: 'Is there any limitation for our usage of your platform?',
    answer:
      'It very much depends on your license. This is something we would want to talk through with you.',
  },
  {
    question: 'Do I need a lot of technical experience to use this service?',
    answer:
      'You don’t need to be a developer or a designer to use our service. We strive to make our services as accessible as possible.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        Frequently asked questions.
      </Typography>
      <div>
        <Typography className={classes.subTitle}>Getting started </Typography>
        <div className={classes.AccordionDiv}>
          {question.map(({ question, answer }, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon className={classes.icon} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.details}>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      width: 870,
      margin: '0 auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: 1092,
      margin: '0 auto',
    },
  },
  title: {
    fontSize: '35px',
    // fontWeight: '800',
    textAlign: 'center',
    color: '#f6f6f6',
    marginBottom: '150px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '50px',
      fontSize: '28px',
      // fontWeight: '600',
    },
  },
  subTitle: {
    fontSize: '24px',
    // fontWeight: '800',
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
      // fontWeight: '700',
    },
  },
  AccordionDiv: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  accordion: {
    backgroundColor: 'transparent',
  },
  heading: {
    fontSize: '27px',
    color: '#c9c9c9',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  icon: {
    fontSize: '27px',
    color: '#c9c9c9',
    // fontWeight: '800',
  },
  details: {
    fontSize: '18px',
    paddingLeft: '20px',
    color: '#c9c9c9',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
}));
