import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    overflow: 'visible',
  },
  switchBase: {
    padding: '2px 1px',
    '&$checked': {
      transform: 'translateX(16px)',
      color: 'white',
      '& + $track': {
        backgroundColor: '#afafaf',
        opacity: 1,
        border: `1px solid #afafaf`,
      },
    },
    '&$focusVisible $thumb': {
      color: '#997F7E',
      border: '1px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #afafaf`,
    backgroundColor: '#afafaf',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
export default IOSSwitch;
