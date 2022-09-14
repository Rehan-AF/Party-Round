import { makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { animated, useSpring, useTransition } from "react-spring";

function useIntersectionObserver(
  elementRef,
  { root = null, freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { root };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, root, frozen]);

  return entry;
}

export default function Tile({ color, duration = 600, opacity = 0 }) {
  const classes = useStyles();
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });
  const headerStyle = useSpring({
    config: { duration: duration },
    from: {
      opacity: opacity,
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <div>
      <animated.div style={headerStyle} className={classes.tileBox}>
        <div style={{ backgroundColor: color }} className={classes.tile}></div>
      </animated.div>
      <div ref={triggerRef} />
    </div>
  );
}

export const SimpleTile = ({
  color,
  duration = 600,
  reverseDuration = 600,
}) => {
  const classes = useStyles();

  const { showSideBar } = useSelector((state) => state.Header);

  const transition = useTransition(showSideBar, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showSideBar,
    config: { duration: showSideBar ? duration : reverseDuration },
    // onRest: () => set(!show),
  });

  return transition(
    (styles, items) =>
      items && (
        <div>
          <animated.div style={styles} className={classes.tileBox}>
            <div
              style={{ backgroundColor: color }}
              className={classes.tile}
            ></div>
          </animated.div>
          <div />
        </div>
      )
  );
};

const useStyles = makeStyles((theme) => ({
  tileBox: {
    backgroundColor: "transparent",
  },
  tile: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: 105,
  },
}));
