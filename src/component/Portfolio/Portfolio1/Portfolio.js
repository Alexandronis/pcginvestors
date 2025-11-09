import React, { useCallback, useState, useEffect, useRef } from "react";

import PortfolioItem from "./PortfolioItem";

const Data = require("../../../data/portfolio.json");

let scrollDir = 1;
let scroller = null;

const Portfolio = () => {
  const slider = useRef(null);
  const [OpenedItem, setOpenedItem] = useState(null);

  // scroll the Slider
  const scrollSlider = useCallback(() => {
    if (slider.current && OpenedItem === null) {
      slider.current.scroll((slider.current.scrollLeft += scrollDir), 0);
      if (slider.current.scrollLeft === slider.current.scrollWidth - slider.current.clientWidth) {
        scrollDir = -1;
      }
      if (slider.current.scrollLeft === 0) {
        scrollDir = 1;
      }
    }
  }, [OpenedItem]);

  const ScrollWhenClick = i => {
    const amount = Math.floor(i / 3) * 170 - window.innerWidth / 2 + 380;
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
        onMouseOver={() => {
          clearInterval(scroller);
        }}
        onMouseLeave={() => {
          scroller = setInterval(scrollSlider, 30);
        }}
        onFocus={() => {
          clearInterval(scroller);
        }}
        onBlur={() => {
          scroller = setInterval(scrollSlider, 30);
        }}
        ref={slider}
        className="prtfolio_slider"
      >
        <div
          className={
            OpenedItem ? "prtfolio_container pause" : "prtfolio_container"
          }
        >
          {Data.map((data, i) => {
            return (
              <PortfolioItem
                data={data}
                index={i}
                key={i}
                opened={i === OpenedItem}
                openedId={OpenedItem}
                setOpen={setOpenedItem}
                ScrollWhenClick={ScrollWhenClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
