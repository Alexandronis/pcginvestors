import React from "react";

const memberCardMobile = ({
  name,
  title,
  description,
  imgSrc,
  imgSrc2,
  imgSrcMobile,
  linkedin,
  linkedinIcon,
  cardhover,
  setCardHover,
  idx,
  email,
  emailIcon,
  alt,
  emailAlt,
}) => {
  //const [cardActive, _setCardActive] = useState(false);

  return (
    <>
      <div className="card_containar">
        <div className="leftside_text">
          <img className="image_containar" src={imgSrcMobile} alt={alt} />
          <img className="image_containar-color" src={imgSrc2} alt={alt} />
          <div className="card_list_items">
            <img className="arrow" src="/team_arrow.svg" alt="Arrow Icon"></img>
            <p className="name">{name}</p>
            <p className="title">{title}</p>
            <div className="icon-set">
              {email !== "" ?  <a href={email} >
                <img src={emailIcon} alt={emailAlt}></img>
              </a>:null}
             {
              linkedin !== ""? <a href={linkedin} target="_blank">
              <img src={linkedinIcon} alt="Linkedin Icon"></img>
            </a> : null
             }
              
            </div>
          </div>
        </div>
        <p className="desc">{description}</p>
      </div>
    </>

    // </div>
  );
};

export default memberCardMobile;
