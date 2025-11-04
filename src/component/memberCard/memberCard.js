import React, { useState } from "react";

const MemberCard = ({
  name,
  title,
  description,
  imgSrc,
  imgSrc2,
  cardhover,
  setCardHover,
  idx,
}) => {
  const [cardActive, _setCardActive] = useState(false);

  return (
    <>
      <img src={imgSrc} className="img_black" alt="card background"></img>
      <img src={imgSrc2} className="img_color" alt="card background"></img>
      <div className="details-box">
        <div className="line-1">
          <p className="name">{name}</p>
          <div className="icon-set">
            <a href="">
              <img src="/email-icon.svg" alt="email icon"></img>
            </a>
            <a href="">
              <img src="/linkedin-icon.svg" alt="likedin icon"></img>
            </a>
          </div>
        </div>
        <div className="line-2">
          <p className="title">{title}</p>
          <div className="icon-set">
            <a href="">
              <img src="/email-icon.svg" alt="email icon"></img>
            </a>
            <a href="">
              <img src="/linkedin-icon.svg" alt="linkedin icon"></img>
            </a>
          </div>

          <p className="desc">
            {description}
            <span>
              <a href={`/about/sectionteam` + idx}>See more</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
