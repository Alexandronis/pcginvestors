import React, { useState, useEffect, useRef } from "react";

import PortfolioItem from "./PortfolioItem";

const Data = require("../../../data/portfolio.json");

var scrollDir = 1;
var scroller = null;

const Portfolio = () => {
  const slider = useRef(null);
  const [OpenedItem, setOpenedItem] = useState(null);

  // scroll the Slider
  const scrollSlider = () => {
    if (slider.current && OpenedItem === null) {
      slider.current.scroll((slider.current.scrollLeft += scrollDir), 0);
      if (
        slider.current.scrollLeft ===
        slider.current.scrollWidth - slider.current.clientWidth
      ) {
        scrollDir = -1;
      }
      if (slider.current.scrollLeft === 0) {
        scrollDir = 1;
      }
    }
  };

  const ScrollWhenClick = i => {
    var amount = Math.floor(i / 3) * 170 - window.innerWidth / 2 + 380;

    if (i > Data.length * 3 - 4) {
      setTimeout(() => {
        slider.current.scroll(amount, 0);
      }, 300);
    } else {
      slider.current.scroll(amount, 0);
    }
  };

  useEffect(() => {
    scroller = setInterval(scrollSlider, 30);
  }, []);

  return (
    <div className="portfolio2_wrapper">
      <h1 className="title">PCG Investment Portfolio</h1>
      <h2 className="mobile_title">What clients say about us</h2>

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
          {[1, 2, 3].map((data, r) => {
            return Data.map((data, i) => {
              const index = r * Data.length + i;
              return (
                <PortfolioItem
                  data={data}
                  index={index}
                  key={index}
                  opened={index === OpenedItem}
                  openedId={OpenedItem}
                  setOpen={setOpenedItem}
                  ScrollWhenClick={ScrollWhenClick}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
