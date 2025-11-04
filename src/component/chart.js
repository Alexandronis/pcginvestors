import React, { useState } from "react";
const charityData = require('../data/charity.json')

function Chart() {
  const [onHover, setonHover] = useState(9);

  return (
    <div className="menu-section">
    <span className="middle-logo">
      <img  src="/pcg-logo.png" alt="pcg Logo" />
    </span>
    <span className="half-circle"></span>
    <div className="circular-wrapper">
      <ul>
        <li
          className="item-circle"
          style={{ transform: `rotateZ(calc((360deg / 8) * ${onHover})` }}
        >
          <span className="white-circle"></span>
        </li>
      </ul>
    </div>
    <div className="item-wrapper">
      <ul>
        {charityData.map((data, index) => {
          return (
            <li
              className="icon-circle"
              style={{
                transform: `rotateZ(calc((360deg / 7) * ${data.id +1}))`,
              }}
              key={data.id}
            >
              <span
                className={
                  onHover === index + 1
                    ? `white-circle logo-circle${index} active`
                    : onHover === 0
                    ? `white-circle logo-circle${index}`
                    : `white-circle logo-circle${index} none-active`
                }
                onMouseEnter={() => {
                  onHover === index + 1
                    ? setonHover(0)
                    : setonHover(index + 1);
                }}
                onMouseLeave ={()=>
                  setonHover(0)
                }
                // onMouseEnter={() => {
                //   setonHover(index + 1);
                // }}
                //className="white-circle"
                // style={{
                //   transform: `rotateZ(calc(75deg - (360deg /8) * ${data.id + 1}))`,
                // }}
              >
                <img
                  className={onHover === data.id+1 ? "icon-none" : "icon-image" }
                  src={data.logoRound}
                  alt={data.title}
                />
                <div className={onHover === data.id+1 ? `card-active back${index}` : "card-hide"} >
                <p>
                  {data.description} 
                </p>
                <p className="right-align"><a href={data.webLink}     target="_blank">See More 	&gt;</a></p>
                </div>
                
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  );
}

export default Chart;
