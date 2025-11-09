import React from "react";

import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeVideo from "../../Video/low_size.mp4";

function homeSlider() {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "77%",
          top: "86%",
          zIndex: 99,
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
          zIndex: 99,
          left: "86%",
          top: "86%",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          textalign: "right",
          bottom: "50%",
          top: "84%",
        }}
      >
        <ul style={{ margin: "0px", left: "79%", position: "absolute" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="video-wrapper">
          <ReactPlayer
            url={HomeVideo}
            playsinline={true}
            preload="yes"
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div>
        <div className="video-wrapper">
          <ReactPlayer
            url={HomeVideo}
            playsinline={true}
            preload="yes"
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div>
        <div className="video-wrapper">
          <ReactPlayer
            url={HomeVideo}
            playsinline={true}
            preload="yes"
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div>
        <div className="video-wrapper">
          <ReactPlayer
            url={HomeVideo}
            playsinline={true}
            preload="yes"
            playing={true}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Slider>
  );
}

export default homeSlider;
