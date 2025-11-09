import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: 0,
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: 0,
      }}
      onClick={onClick}
    />
  );
}

const Quotes = () => {
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-card">
          <div className="quote-text">
            <p>
              “PCG's early investment has helped SEB accelerate our U.S. and
              global expansion, capitalizing on the company's robust growth rate
              and global consumer interest in fitness / health clubs.”
            </p>
          </div>
          <div className="quote-footer">
            <p>Dave Mortensen C Chuck Runyon – Self Esteem Brands</p>
          </div>
        </div>
        <div className="slider-card">
          <div className="quote-text">
            <p>
              “PCG has been a great partner to The Alaska Club, allowing us to
              expand our clubs to provide more services to our members and add
              new formats in our trampoline park and yoga studio formats.”{" "}
            </p>
          </div>
          <div className="quote-footer">
            <p>Robert Brewster – The Alaska Club</p>
          </div>
        </div>

        <div className="slider-card">
          <div className="quote-text">
            <p>
              “In the consumer health / wellness space there is no firm with
              better historic perspective, strategic insights and personal
              relationships than PCG.”
            </p>
          </div>
          <div className="quote-footer">
            <p>Paul Pruett – Designer Wellness</p>
          </div>
        </div>

        <div className="slider-card">
          <div className="quote-text">
            <p>
              “PCG has provided Numi with good insights into the marketplace,
              opportunities for strategic partnerships and overall industry
              awareness, both for organizational and board growth.”
            </p>
          </div>
          <div className="quote-footer">
            <p>Ahmed Rahim - Numi Tea</p>
          </div>
        </div>
        <div className="slider-card">
          <div className="quote-text">
            <p>
              “PCG allowed Cytosport to grow from a powder business to ready to
              drink, bars and more, more than tripling the size of our business
              before our sale to Hormel and later to Pepsi Co. We appreciate
              their focus and partnership.”{" "}
            </p>
          </div>
          <div className="quote-footer">
            <p>Mike Pickett – CytoSport (Muscle Milk)</p>
          </div>
        </div>

        <div className="slider-card">
          <div className="quote-text">
            <p>
              “The PCG team provided us the opportunity to expand throughout the
              Northeastern corridor and eventually sell to Planet Organic
              creating a strong US / CN natural grocer.”
            </p>
          </div>
          <div className="quote-footer">
            <p>Harold Hochberger – Mrs. Green’s Natural Market</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Quotes;
