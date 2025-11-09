import React, { useRef } from "react";

const PortfolioItem = props => {
  const dataCard = useRef(null);

  const handleClick = () => {
    if (props.opened) {
      props.setOpen(null);
    } else {
      props.setOpen(props.index);
      props.ScrollWhenClick(props.index);
    }
  };
  return (
    <div className="Item_wrapper">
      <div
        className={
          props.opened ? "dataCard_wrapper opened" : "dataCard_wrapper"
        }
      >
        <div ref={dataCard} className="dataCard">
          <div className="title_section">
            <h3>{props.data.company}</h3>

            <a target="_BLANK" rel="noopener noreferrer" href={props.data.url}>
              Visit Website{" "}
            </a>
          </div>

          <div className="desc_section">
            <span>"</span>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.data.description}</p>
            <span>"</span>
          </div>
          <div className="name_section">
            <h4>{props.data.name}</h4>
            <h4>{props.data.designation}</h4>
            <h4>{props.data.company}</h4>
          </div>
        </div>
      </div>
      <div
        className={props.opened ? "portfolioClose opened" : "portfolioClose"}
        onClick={handleClick}
      >
        <div className="icon">
          <span className="bar"></span>
        </div>
      </div>
      <div
        className={props.opened ? "portfolioItem opened" : "portfolioItem"}
        onClick={handleClick}
      >
        <img alt={props.data.alt} src={props.data.image} />
      </div>
    </div>
  );
};

export default PortfolioItem;
