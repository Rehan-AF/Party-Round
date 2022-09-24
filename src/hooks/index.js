import { useEffect, useState } from "react";

/**
 * @dev detects the direction of scroll events
 */

export const useScrollDirection = () => {
  const [y, setY] = useState(window.scrollY);
  const [direction, setDirection] = useState();

  useEffect(() => {
    const handleNavigation = (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setDirection("up");
      } else if (y < window.scrollY) {
        setDirection("down");
      }
      setY(window.scrollY);
    };
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return direction;
};
