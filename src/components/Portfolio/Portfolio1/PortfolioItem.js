import React, { useRef } from "react";

const PortfolioItem = ({ data, index, opened, setOpen, ScrollWhenClick }) => {
  const dataCard = useRef(null);

  const handleClick = () => {
    if (opened) {
      setOpen(null);
    } else {
      setOpen(index);
      ScrollWhenClick(index);
    }
  };

  return (
    <div className="Item_wrapper">
      <div className={opened ? "dataCard_wrapper opened" : "dataCard_wrapper"}>
        <div ref={dataCard} className="dataCard">
          <div className="title_section">
            <h3>{data.company}</h3>
            <a target="_blank" rel="noopener noreferrer" href={data.url}>
              Visit Website
            </a>
          </div>

          <div className="desc_section">
            <span>&quot;</span>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description}</p>
            <span>&quot;</span>
          </div>

          <div className="name_section">
            <h4>{data.name}</h4>
            <h4>{data.designation}</h4>
            <h4>{data.company}</h4>
          </div>
        </div>
      </div>

      <div
        role="button"
        tabIndex={0}
        className={opened ? "portfolioClose opened" : "portfolioClose"}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        <div className="icon">
          <span className="bar"></span>
        </div>
      </div>

      <div
        role="button"
        tabIndex={0}
        className={opened ? "portfolioItem opened" : "portfolioItem"}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        <img alt={data.alt} src={data.image} loading="lazy" />
      </div>
    </div>
  );
};

export default PortfolioItem;
