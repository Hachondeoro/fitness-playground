import React, { useEffect, useState } from "react";
import { AiFillRocket } from "react-icons/ai";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

const BackArrow = () => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setSticky(true);
    } else if (window.scrollY < 120) {
      setSticky(false);
    }
  };
  const classes = sticky ? "backArrow" : "backArrow hide";

  const arrowScroll = () => {
    scroll.scrollTo(0, { duration: 1200, delay: 0, smooth: "easeInOutCubic" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <div className={classes}>
      <a onClick={() => arrowScroll()}>
        <AiFillRocket color="#085EA9" size={48} />
      </a>
    </div>
  );
};

export default BackArrow;
