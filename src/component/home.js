import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Portfolio2 } from "./Portfolio";
import ReactPlayer from "react-player";
import MetaTags from "react-meta-tags";
// import HTMLFlipBook from "react-pageflip";
//import { PageFlip } from "page-flip";

// import MemberCard from "./memberCard/memberCard";
// import MemberCardMobile from "./memberCard/memberCardMobile";
import ScrollHandler from "./scrollHandler";
import HomeSlider from "./slider/homeSlider";
import HomeVideo from "../Video/low_size.mp4";
import Quotes from "./Quotes";

function Home(props) {
  //==================Our Team==========================
  // const [cardhover, setCardHover] = useState(0);
  const boxRef = React.useRef([]);
  const node = useRef();
  const [activeClass, setActiveClass] = useState();
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const src = HomeVideo;

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  // const outClick = (e) => {
  //   let inSideFlag = false;
  //   boxRef.current.forEach((re) => {
  //     if (re.contains(e.target)) {
  //       inSideFlag = true;
  //     }
  //   });

  //   if (!inSideFlag) {
  //     setCardHover(0);
  //   }
  // };
  useEffect(() => {
    //document.addEventListener("mousedown", outClick);
    //return () => document.removeEventListener("mousedown", outClick);
  }, []);

  const memberDetails = require("./memberCard/data/memberDetails.json");
  var memberList = memberDetails;
  //==================End Our Team==========================

  const [showResults, setShowResults] = React.useState(false);
  const { pathname } = Router;

  // used for changing the CSS class in header color
  if (props.location.pathname === "/") {
    document.body.classList.remove("inner-header");
  }
  // const videoSrc =
  //   "https://pcg-documents-ilabs.s3-us-west-2.amazonaws.com/low+size.mp4";
  return (
    <div>
      <MetaTags>
        <title>
          PCG Investors-Private equity firm for value-based investing
        </title>
        <meta
          name="description"
          content="PCG is a private equity investor fund for growth stage consumer investing in healthcare, fitness and lifestyle to create value as a growth capital investor"
        />
      </MetaTags>
      <link rel="canonical" href="https://www.pcginvestors.com/"></link>
      <ScrollHandler />
      <div className="home-main-wrapper">
        <div className="home-banner">
          {/* <HomeSlider /> */}
          <img
            src="/frame-opt.png"
            className="video-thumb tiny"
            alt="PCG video thumb"
            style={{ display: isVideoLoaded ? "none" : "block" }}
          />
          <ReactPlayer
            url={src}
            playsinline={true}
            preload="none"
            webkit-playsinline="yes"
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
            onLoadedData={onLoadedData}
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
        {/* Slider */}
        <div className="logo-slider">
          <Portfolio2 />
        </div>
        {/* <div className="our-team-wrapper">
          <div className="section-title">
            <h2>Our Team</h2>
            <p>
              We have an experienced team of senior investment professionals
              dedicated to our success.
            </p>
          </div>
          <div className="team-card-wrapper">
            {memberList.map((member, index) => {
              return (
                <div
                  ref={(el) => (boxRef.current[index] = el)}
                  className={
                    cardhover === index + 1
                      ? "team-card active"
                      : cardhover === 0
                      ? "team-card"
                      : "team-card none-active"
                  }
                  id={index}

                  key={index}
                  onClick={() => {
                    cardhover === index + 1
                      ? setCardHover(0)
                      : setCardHover(index + 1);
                  }}
                >
                  
                  <img
                    src={member.imgSrc2}
                    className="img_color"
                    alt={member.alt}
                  ></img>
                  <div className="details-box">
                    <div className="line-1">
                      <p className="name">{member.name}</p>
                      <div className="icon-set">
                        {member.email !== "" ? <a href={member.email}>
                          <img src={member.emailIcon} alt={member.emailAlt}></img>
                        </a>:null}
                        {member.linkedin !== ""? <a href={member.linkedin} target="_blank">
                          <img src={member.linkedinIcon} alt="Linkedin Icon"></img>
                        </a>:null }
                        
                       
                      </div>
                    </div>
                    <div className="line-2">
                      <p className="title">{member.title}</p>
                      <div className="icon-set">
                        <a href={member.email}>
                          <img src={member.emailIcon} alt={member.emailAlt}></img>
                        </a>
                        <a href={member.linkedin} target="_blank">
                          <img src={member.linkedinIcon} alt="Linkedin Icon"></img>
                        </a>
                      </div>
                      <p className="desc">
                        {member.description}
                        <span>
                          <Link to={`/about/#sectionteam${member.id}`}>
                            See more
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="principles">
            {memberDetails.map((member, index) => {
              return (
                <div
                  ref={(el) => (boxRef.current[index] = el)}
                  className={
                    cardhover === index + 1
                      ? "team-card active"
                      : cardhover === 0
                      ? "team-card"
                      : "team-card none-active"
                  }
                  id={index}
                  onClick={() => {
                    cardhover === index + 1
                      ? setCardHover(0)
                      : setCardHover(index + 1);
                  }}
                  key={index}
                >
                  <MemberCardMobile
                    name={member.name}
                    title={member.title}
                    description={member.description}
                    email={member.email}
                    imgSrc={member.imgSrc}
                    imgSrc2={member.imgSrc2}
                    imgSrcMobile={member.imgSrcMobile}
                    setCardHover={setCardHover}
                    cardhover={cardhover}
                    linkedin={member.linkedin}
                    linkedinIcon={member.linkedinIcon}
                    idx={index + 1}
                    emailIcon={member.emailIcon}
                    alt={member.alt}
                    emailAlt={member.emailAlt}
                  />
                </div>
              );
            })}
          </div>
          <div></div>
        </div> */}

      <div className="quotes-wrapper">
        <div className="qt-slider">
        <div className="section-title">
          <h2>From Our CEOs</h2>
        </div>
        <Quotes/>
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
                <img src="/cat02.png" alt="Fitness" />
              </div>
              <div className="cardInfo">
                <h2>Fitness</h2>
              </div>
            </Link>
            <Link to="/portfolio-page/#section4" className="card">
              <div className="card_img">
                <img src="/cat01.png" alt="Food & Beverage" />
              </div>
              <div className="cardInfo">
                <h2>Food & Beverage</h2>
              </div>
            </Link>
            <Link to="/portfolio-page/#section6" className="card">
              <div className="card_img">
                <img src="/cat03.png" alt="Consumer Services" />
              </div>
              <div className="cardInfo">
                <h2>Consumer Services</h2>
              </div>
            </Link>
            <Link to="/portfolio-page/#section7" className="card">
              <div className="card_img">
                <img src="/cat04.png" alt="Lifestyle" />
              </div>
              <div className="cardInfo">
                <h2>Lifestyle</h2>
              </div>
            </Link>
            <Link to="/portfolio-page/#section8" className="card">
              <div className="card_img">
                <img src="/cat05.png" alt="Supplements" />
              </div>
              <div className="cardInfo">
                <h2>Supplements</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="home-contact-wrapper">
          <img className="contact-img" src="/home-contact-banner.png" alt="PCG Banner Logo"></img>
          <img
            className="contact-img-mobile"
            src="/contact/Mask Group 30.png"
            alt="PCG Banner Logo"
          ></img>
          <div className="contact">
            <div className="content">
              {/* <h2>Join hands with PCG investors</h2> */}
              <p>
                Our "partnership capital growth" approach means partnering with
                strong investment partners (other investors and/or founders &
                management teams) and providing capital for growth in businesses
                where we can add value based on our experience and focus in
                healthy living.
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
}

export default Home;
