import React from "react";
import Slider from "react-slick";
import quotesData from "../data/quotes.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Quotes = () => {
  return (
    <div>
      <Slider {...quotesData.settings}>
        {quotesData.quotes.map((quote, index) => (
          <div key={index} className="slider-card">
            <div className="quote-text">
              <p>{quote.text}</p>
            </div>
            <div className="quote-footer">
              <p>{quote.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Quotes;
