import React, { useCallback, useState, useEffect, useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import Data from "../../../../data/portfolio.json";

let scrollDir = 1;
let scroller = null;

const Portfolio = () => {
  const slider = useRef(null);
  const [OpenedItem, setOpenedItem] = useState(null);
  const portfolioData = Data.portfolioMain;

  // scroll the slider automatically
  const scrollSlider = useCallback(() => {
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
  }, [OpenedItem]);

  const ScrollWhenClick = i => {
    const amount = Math.floor(i / 3) * 170 - window.innerWidth / 2 + 380;

    if (i > portfolioData.length * 3 - 4) {
      setTimeout(() => {
        slider.current.scroll(amount, 0);
      }, 300);
    } else {
      slider.current.scroll(amount, 0);
    }
  };

  useEffect(() => {
    scroller = setInterval(scrollSlider, 30);
    return () => clearInterval(scroller);
  }, [scrollSlider]);

  return (
    <div className="portfolio2_wrapper">
      <h1 className="title">PCG Investment Portfolio</h1>
      <h2 className="mobile_title">What clients say about us</h2>

      <div
        ref={slider}
        className="prtfolio_slider"
        onMouseOver={() => clearInterval(scroller)}
        onMouseLeave={() => (scroller = setInterval(scrollSlider, 30))}
        onFocus={() => clearInterval(scroller)}
        onBlur={() => (scroller = setInterval(scrollSlider, 30))}
      >
        <div
          className={
            OpenedItem ? "prtfolio_container pause" : "prtfolio_container"
          }
        >
          {[1, 2, 3].map((_, r) =>
            portfolioData.map((item, i) => {
              const index = r * portfolioData.length + i;
              return (
                <PortfolioItem
                  key={index}
                  data={item}
                  index={index}
                  opened={index === OpenedItem}
                  openedId={OpenedItem}
                  setOpen={setOpenedItem}
                  ScrollWhenClick={ScrollWhenClick}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
