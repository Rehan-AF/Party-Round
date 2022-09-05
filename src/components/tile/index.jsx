import { makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

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

export default function Tile({ color, duration = 600 }) {
  const classes = useStyles();
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });
  const headerStyle = useSpring({
    config: { duration: 300 },
    from: {
      opacity: 0,
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  console.log(dataRef);

  return (
    <div className={classes.box}>
      <animated.div style={headerStyle} className={classes.tileBox}>
        <div style={{ backgroundColor: color }} className={classes.tile}></div>
      </animated.div>
      <div ref={triggerRef} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
  },
  tileBox: {
    backgroundColor: "transparent",
  },
  tile: {
    width: 105,
    height: 105,
  },
}));
