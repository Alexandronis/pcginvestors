import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Portfolio2 } from "./Portfolio";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";
import ScrollHandler from "./ScrollHandler";
import HomeVideo from "../assets/low_size.mp4";
import Quotes from "./Quotes";

const Home = () => {
  const location = useLocation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => setIsVideoLoaded(true);

  // Used for changing the CSS class in header color
  if (location.pathname === "/") {
    document.body.classList.remove("inner-header");
  }

  return (
    <div>
      <Helmet>
        <title>
          PCG Investors - Private equity firm for value-based investing
        </title>
        <meta
          name="description"
          content="PCG is a private equity investor fund for growth stage consumer investing in healthcare, fitness and lifestyle to create value as a growth capital investor"
        />
        <link rel="canonical" href="https://www.pcginvestors.com/" />
      </Helmet>

      <ScrollHandler />

      <div className="home-main-wrapper">
        <div className="home-banner">
          <img
            src="/frame-opt.png"
            className="video-thumb tiny"
            alt="PCG video thumb"
            loading="lazy"
            style={{ display: isVideoLoaded ? "none" : "block" }}
          />
          <ReactPlayer
            url={HomeVideo}
            playsinline
            preload="none"
            webkit-playsinline="yes"
            playing
            loop
            muted
            controls={false}
            width="100%"
            height="100%"
            onLoadedData={handleVideoLoad}
            style={{ display: isVideoLoaded ? "block" : "none" }}
          />
        </div>

        <div className="our-value-wrapper">
          <div className="our-value">
            <div className="value-box">
              <p className="num">29</p>
              <p className="text">Total Investments</p>
            </div>
            <div className="value-box center">
              <p className="num">$450M+</p>
              <p className="text">Invested</p>
            </div>
            <div className="value-box">
              <p className="num">25+</p>
              <p className="text">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="logo-slider">
          <Portfolio2 />
        </div>

        <div className="quotes-wrapper">
          <div className="qt-slider">
            <div className="section-title">
              <h2>From Our CEOs</h2>
            </div>
            <Quotes />
          </div>
        </div>

        <div className="inv-category-wrapper">
          <div className="section-title">
            <h2>Investment Categories</h2>
            <p>
              We are focused on high growth investment opportunities in health &
              wellness, health-tech, and healthcare
            </p>
          </div>

          <div className="inv-category">
            <Link to="/portfolio-page/#section5" className="card">
              <div className="card_img">
                <img
                  src="/cat02.png"
                  alt="Fitness"
                  loading="lazy"
                />
              </div>
              <div className="cardInfo">
                <h2>Fitness</h2>
              </div>
            </Link>

            <Link to="/portfolio-page/#section4" className="card">
              <div className="card_img">
                <img
                  src="/cat01.png"
                  alt="Food & Beverage"
                  loading="lazy"
                />
              </div>
              <div className="cardInfo">
                <h2>Food & Beverage</h2>
              </div>
            </Link>

            <Link to="/portfolio-page/#section6" className="card">
              <div className="card_img">
                <img
                  src="/cat03.png"
                  alt="Consumer Services"
                  loading="lazy"
                />
              </div>
              <div className="cardInfo">
                <h2>Consumer Services</h2>
              </div>
            </Link>

            <Link to="/portfolio-page/#section7" className="card">
              <div className="card_img">
                <img
                  src="/cat04.png"
                  alt="Lifestyle"
                  loading="lazy"
                />
              </div>
              <div className="cardInfo">
                <h2>Lifestyle</h2>
              </div>
            </Link>

            <Link to="/portfolio-page/#section8" className="card">
              <div className="card_img">
                <img
                  src="/cat05.png"
                  alt="Supplements"
                  loading="lazy"
                />
              </div>
              <div className="cardInfo">
                <h2>Supplements</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="home-contact-wrapper">
          <img
            className="contact-img"
            src="/home-contact-banner.png"
            alt="PCG Banner Logo"
            loading="lazy"
          />
          <img
            className="contact-img-mobile"
            src="/contact/Mask Group 30.png"
            alt="PCG Banner Logo"
            loading="lazy"
          />

          <div className="contact">
            <div className="content">
              <p>
                Our &quot;partnership capital growth&quot; approach means
                partnering with strong investment partners (other investors
                and/or founders & management teams) and providing capital for
                growth in businesses where we can add value based on our
                experience and focus in healthy living.
              </p>
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
