// import React, { useEffect, useState, useRef } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Portfolio2 } from "./Portfolio";
// // import HTMLFlipBook from "react-pageflip";
// import { PageFlip } from "page-flip";

// import Footer from "./footer";
// import MemberCard from "./memberCard/memberCard";
// import MemberCardMobile from "./memberCard/memberCardMobile";
// import ScrollHandler from "./scrollHandler";

// function Home(props) {
//   //==================Our Team==========================
//   const [cardhover, setCardHover] = useState(0);
//   const boxRef = React.useRef([]);
//   const node = useRef();
//   const [activeClass, setActiveClass] = useState();

//   const outClick = (e) => {
//     let inSideFlag = false;
//     boxRef.current.forEach((re) => {
//       if (re.contains(e.target)) {
//         inSideFlag = true;
//       }
//     });

//     if (!inSideFlag) {
//       setCardHover(0);
//     }
//   };
//   useEffect(() => {
//     //document.addEventListener("mousedown", outClick);
//     //return () => document.removeEventListener("mousedown", outClick);
//   }, []);

//   const memberDetails = require("./memberCard/data/memberDetails.json");
//   var memberList = memberDetails;
//   //==================End Our Team==========================

//   const [showResults, setShowResults] = React.useState(false);
//   const { pathname } = Router;

//   // used for changing the CSS class in header color
//   if (props.location.pathname === "/") {
//     document.body.classList.remove("inner-header");
//   }

//   useEffect(() => {
//     const pageFlip = new PageFlip(document.getElementById("demoBookExample"), {
//       width: 100, // base page width
//       height: 100, // base page height
//       size: "stretch",
//       minWidth: 0,
//       maxWidth: 1000,
//       minHeight: 300,
//       maxHeight: 300,
//       maxShadowOpacity: 0.5, // Half shadow intensity
//       showCover: false,
//       mobileScrollSupport: false, // disable content scrolling on mobile devices
//     });
//     // load pages
//     pageFlip.loadFromHTML(document.querySelectorAll(".page"));

//     pageFlip.on("flip", (e) => {
//       // console.log(e);
//       if (e.data == 0) {
//         document.getElementById("dot1").classList.add("active");
//         document.getElementById("dot2").classList.remove("active");
//         document.getElementById("dot3").classList.remove("active");
//       } else if (e.data == 2) {
//         document.getElementById("dot2").classList.add("active");
//         document.getElementById("dot1").classList.remove("active");
//         document.getElementById("dot3").classList.remove("active");
//       } else if (e.data == 4) {
//         document.getElementById("dot3").classList.add("active");
//         document.getElementById("dot2").classList.remove("active");
//         document.getElementById("dot4").classList.remove("active");
//       } else if (e.data == 6) {
//         document.getElementById("dot4").classList.add("active");
//         document.getElementById("dot3").classList.remove("active");
//         document.getElementById("dot5").classList.remove("active");
//       } else if (e.data == 8) {
//         document.getElementById("dot5").classList.add("active");
//         document.getElementById("dot4").classList.remove("active");
//         document.getElementById("dot6").classList.remove("active");
//       } else if (e.data == 10) {
//         document.getElementById("dot6").classList.add("active");
//         document.getElementById("dot5").classList.remove("active");
//         document.getElementById("dot7").classList.remove("active");
//       } else if (e.data == 12) {
//         document.getElementById("dot7").classList.add("active");
//         document.getElementById("dot6").classList.remove("active");
//         document.getElementById("dot8").classList.remove("active");
//       } else if (e.data == 14) {
//         document.getElementById("dot8").classList.add("active");
//         document.getElementById("dot7").classList.remove("active");
//         document.getElementById("dot9").classList.remove("active");
//       } else if (e.data == 16) {
//         document.getElementById("dot9").classList.add("active");
//         document.getElementById("dot8").classList.remove("active");
//       }

//       if (e.data == 0) {
//         document.getElementById("btn-prev").classList.add("gray-img-v");
//       } else {
//         document.getElementById("btn-prev").classList.remove("gray-img-v");
//       }

//       if (e.data == 16) {
//         document.getElementById("btn-next").classList.add("gray-img");
//       } else {
//         document.getElementById("btn-next").classList.remove("gray-img");
//       }
//     });

//     document.querySelector(".btn-prev").addEventListener("click", () => {
//       pageFlip.flipPrev((e) => {
//         console.log(e);
//       }); // Turn to the previous page (with animation)
//     });

//     document.querySelector(".btn-next").addEventListener("click", () => {
//       pageFlip.flipNext((e) => {}); // Turn to the next page (with animation)
//     });
//   }, []);


//   return (
//     <div>
//       <ScrollHandler />
//       <div className="home-main-wrapper">
//         <div className="home-banner">
//           <div className="banner-book">
//             <div className="book-inner">
//               <div className="container">
//                 <div className="flip-book" id="demoBookExample">
//                   {/* Page 01 */}
//                   <div
//                     className="page page-cover page-cover-top"
//                     data-density="hard"
//                   >
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/designer_wellness_logo@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/designer_wellness_logo@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         In the consumer health / wellness space there is no firm
//                         with better historic perspective, strategic insights and
//                         personal relationships than PCG.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name">Paul Pruett</li>
//                           <li>CEO,</li>
//                           <li>Designer Protein</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 02 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/sambazon@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/sambazon@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         PCG's industry knowledge and team has added value to our
//                         business each and every year.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name"> Ryan Black</li>
//                           <li>CEO,</li>
//                           <li>Sambazon</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 03 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/anytime-fitness@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/anytime-fitness@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         PCG's early investment has helped SEB accelerate our
//                         U.S. and global expansion, capitalizing on the company's
//                         robust growth rate and global consumer interest in
//                         fitness / health clubs.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name">Chuck Runyon</li>
//                           <li>CEO/CO-Founder,</li>
//                           <li>Anytime Fitness</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 04 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/drybar@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/drybar@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         The process prior to bringing PCG on board was daunting
//                         and intimidating which changed 180 degrees after they
//                         took the helm, managed the process and secured multiple
//                         excellent partners to choose from.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name"> Michael Landau</li>
//                           <li>CEO,</li>
//                           <li>DryBar</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 05 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/gaia-herbs@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/gaia-herbs@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         TBL and PCG under the leadership of Brent Knudsen have
//                         truly been a partner to develop real value for our
//                         company.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name">Ric Scalzo</li>
//                           <li>CEO,</li>
//                           <li>Gaia Herbs</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 06 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/numi-on-state@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/numi-on-state@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         PCG has provided Numi with good insights into the
//                         marketplace, opportunities for strategic partnerships
//                         and overall industry awareness, both for organizational
//                         and board growth.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name"> Ahmed Rahim</li>
//                           <li>CEO,</li>
//                           <li>Numi Tea</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 07 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/promax@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/promax@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         We appreciate PCG's counsel and support. Their broad
//                         industry knowledge gives them a unique perspective that
//                         provides significant operating value.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name"> Simon Goode</li>
//                           <li>CEO,</li>
//                           <li>Promax Nutrition</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 08 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/ragnar@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/ragnar@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         PCG delivers on what they promise and are true partner
//                         in the business. They provide much more than just
//                         capital.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name"> Tanner Bell</li>
//                           <li>Founder and CEO,</li>
//                           <li>Ragnar Relay</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Page 09 */}
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img"
//                         src="./logos/surftech@3x.png"
//                         alt=""
//                       ></img>
//                     </div>
//                   </div>
//                   <div className="page">
//                     <div className="page-content">
//                       <img
//                         className="logo-img-small"
//                         src="./logos/surftech@3x.png"
//                         alt=""
//                       ></img>
//                       <h2 className="desc">
//                         <img src="./asset1.svg" className="top" alt=""></img>
//                         PCG has been a tremendous partner over the years; their
//                         insight and leadership has been very valuable.
//                         <img src="./asset1.svg" className="bottom" alt=""></img>
//                       </h2>
//                       <div className="auth">
//                         <ul>
//                           <li className="name">Chris Dunn</li>
//                           <li>CEO,</li>
//                           <li>Surftech</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="book-control">
//               <button
//                 type="button"
//                 id="btn-prev"
//                 className="btn-prev gray-img-v"
//               >
//                 <img src="/right.svg" alt=""></img>
//                 <img className="fill-img" src="/green-fill-02.svg" alt=""></img>
//               </button>
//               <span className="indicators">
//                 <span id="dot1" className="indicator active"></span>
//                 <span id="dot2" className="indicator"></span>
//                 <span id="dot3" className="indicator"></span>
//                 <span id="dot4" className="indicator"></span>
//                 <span id="dot5" className="indicator"></span>
//                 <span id="dot6" className="indicator"></span>
//                 <span id="dot7" className="indicator"></span>
//                 <span id="dot8" className="indicator"></span>
//                 <span id="dot9" className="indicator"></span>
//               </span>
//               <button type="button" id="btn-next" className="btn-next">
//                 <img src="/left.svg" alt=""></img>
//                 <img className="fill-img" src="/green-fill-01.svg" alt=""></img>
//               </button>
//             </div>
//           </div>
//           <div className="banner-content">
//             <h1>
//               Partnering with emerging values-based businesses <br></br> in
//               healthy living
//             </h1>
//           </div>
//         </div>
//         {/* Slider */}
//         <div className="logo-slider">
//           <Portfolio2 />
//         </div>
//         <div className="our-value-wrapper">
//           <div className="our-value">
//             <div className="value-box">
//               <p className="num">29</p>
//               <p className="text">Total Investments</p>
//             </div>
//             <div className="value-box center">
//               <p className="num">400M+</p>
//               <p className="text">USD Invested</p>
//             </div>
//             <div className="value-box">
//               <p className="num">25+</p>
//               <p className="text">Years Experience</p>
//             </div>
//           </div>
//         </div>

//         <div className="our-team-wrapper">
//           <div className="section-title">
//             <h2>Our Team</h2>
//             <p>
//               We have an experienced team of senior investment professionals
//               dedicated to our success.
//             </p>
//           </div>
//           <div className="team-card-wrapper">
//             {memberList.map((member, index) => {
//               return (
//                 <div
//                   ref={(el) => (boxRef.current[index] = el)}
//                   className={
//                     //   `team-card ${cardActive ? 'active' : 'none-active'}`
//                     cardhover === index + 1
//                       ? "team-card active"
//                       : cardhover === 0
//                       ? "team-card"
//                       : "team-card none-active"
//                   }
//                   id={index}
//                   //   ref={(el) => (boxRef.current[0] = el)}

//                   key={index}
//                   onClick={() => {cardhover === index + 1 ? setCardHover(0) : setCardHover(index + 1)}}
//                 >
//                   <img
                    
//                     src={member.imgSrc}
//                     className="img_black"
//                   ></img>
//                   <img
                    
//                     src={member.imgSrc2}
//                     className="img_color"
//                   ></img>
//                   <div className="details-box">
//                     <div className="line-1">
//                       <p className="name">{member.name}</p>
//                       <div className="icon-set">
//                         <a>
//                           <img src="/email-icon.svg"></img>
//                         </a>
//                         <a href={member.linkedin} target="_blank">
//                           <img src={member.linkedinIcon}></img>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="line-2">
//                       <p className="title">{member.title}</p>
//                       <div className="icon-set">
//                         <a href="">
//                           <img src="/email-icon.svg"></img>
//                         </a>
//                         <a href={member.linkedin} target="_blank">
//                           <img src={member.linkedinIcon}></img>
//                         </a>
//                       </div>
//                       <p className="desc">
//                         {member.description}
//                         <span>
//                           <Link to={`/about/#sectionteam${member.id}`}>
//                             See more
//                           </Link>
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="principles">
//             {memberDetails.map((member, index) => {
//               return (
//                 <div
//                   ref={(el) => (boxRef.current[index] = el)}
//                   className={
//                     //   `team-card ${cardActive ? 'active' : 'none-active'}`
//                     cardhover === index + 1
//                       ? "team-card active"
//                       : cardhover === 0
//                       ? "team-card"
//                       : "team-card none-active"
//                   }
//                   id={index}
//                   //   ref={(el) => (boxRef.current[0] = el)}
//                   onClick={() => {cardhover === index + 1 ? setCardHover(0) : setCardHover(index + 1)}}
//                   key={index}
//                 >
//                   <MemberCardMobile
//                     name={member.name}
//                     title={member.title}
//                     description={member.description}
//                     imgSrc={member.imgSrc}
//                     imgSrc2={member.imgSrc2}
//                     imgSrcMobile={member.imgSrcMobile}
//                     setCardHover={setCardHover}
//                     cardhover={cardhover}
//                     linkedin={member.linkedin}
//                     linkedinIcon={member.linkedinIcon}
//                     idx={index + 1}
//                     ref={boxRef}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           <div></div>
//         </div>

//         <div className="inv-category-wrapper">
//           <div className="section-title">
//             <h2>Investment Categories</h2>
//             <p>
//               We are focused on high growth investment opportunities in health &
//               wellness, health-tech, and healthcare
//             </p>
//           </div>
//           <div className="inv-category">
//             <Link to="/portfolio-page/#section5" className="card">
//               <div className="card_img">
//                 <img src="/cat02.png" alt="test" />
//               </div>
//               <div className="cardInfo">
//                 <h2>Fitness</h2>
//               </div>
//             </Link>
//             <Link to="/portfolio-page/#section4" className="card">
//               <div className="card_img">
//                 <img src="/cat01.png" alt="test" />
//               </div>
//               <div className="cardInfo">
//                 <h2>Food & Beverage</h2>
//               </div>
//             </Link>
//             <Link to="/portfolio-page/#section6" className="card">
//               <div className="card_img">
//                 <img src="/cat03.png" alt="test" />
//               </div>
//               <div className="cardInfo">
//                 <h2>Consumer Services</h2>
//               </div>
//             </Link>
//             <Link to="/portfolio-page/#section7" className="card">
//               <div className="card_img">
//                 <img src="/cat04.png" alt="test" />
//               </div>
//               <div className="cardInfo">
//                 <h2>Lifestyle</h2>
//               </div>
//             </Link>
//             <Link to="/portfolio-page/#section8" className="card">
//               <div className="card_img">
//                 <img src="/cat05.png" alt="test" />
//               </div>
//               <div className="cardInfo">
//                 <h2>Supplements</h2>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="home-contact-wrapper">
//           <img className="contact-img" src="/home-contact-banner.png"></img>
//           <img
//             className="contact-img-mobile"
//             src="/contact/Mask Group 30.png"
//           ></img>
//           <div className="contact">
//             <div className="content">
//               <h1>Join hands with PCG investors</h1>
//               <p>
//                 Our "partnership capital growth" approach means partnering with
//                 strong investment partners (other investors and/or founders &
//                 management teams) and providing capital for growth in businesses
//                 where we can add value based on our experience and focus in
//                 healthy living.
//               </p>
//               <Link to="/contact">
//                 <button>Contact Us</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;
