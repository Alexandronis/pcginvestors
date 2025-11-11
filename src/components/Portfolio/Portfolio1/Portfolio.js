import React, { useCallback, useState, useEffect, useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import Data from "../../../data/portfolio.json";

let scrollDir = 1;
let scroller = null;

const Portfolio = () => {
  const slider = useRef(null);
  const [openedItem, setOpenedItem] = useState(null);

  const scrollSlider = useCallback(() => {
    if (slider.current && openedItem === null) {
      slider.current.scroll((slider.current.scrollLeft += scrollDir), 0);

      if (slider.current.scrollLeft === slider.current.scrollWidth - slider.current.clientWidth) {
        scrollDir = -1;
      }
      if (slider.current.scrollLeft === 0) {
        scrollDir = 1;
      }
    }
  }, [openedItem]);

  const scrollWhenClick = (index) => {
    const amount = Math.floor(index / 3) * 170 - window.innerWidth / 2 + 380;
    slider.current.scroll(amount, 0);
  };

  useEffect(() => {
    scroller = setInterval(scrollSlider, 30);
    return () => clearInterval(scroller);
  }, [scrollSlider]);

  return (
    <div className="portfolio1_wrapper">
      <h1 className="title">PCG Investment Portfolio</h1>

      <div
        ref={slider}
        className="prtfolio_slider"
        onMouseOver={() => clearInterval(scroller)}
        onMouseLeave={() => (scroller = setInterval(scrollSlider, 30))}
        onFocus={() => clearInterval(scroller)}
        onBlur={() => (scroller = setInterval(scrollSlider, 30))}
      >
        <div className={openedItem ? "prtfolio_container pause" : "prtfolio_container"}>
          {Data.map((data, i) => (
            <PortfolioItem
              key={i}
              data={data}
              index={i}
              opened={i === openedItem}
              openedId={openedItem}
              setOpen={setOpenedItem}
              ScrollWhenClick={scrollWhenClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
