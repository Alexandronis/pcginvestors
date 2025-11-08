import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import MetaTags from 'react-meta-tags';

import ScrollHandler from "./scrollHandler";

function Contact(props) {
  if (props.location.pathname === "/contact") {
    document.body.classList.add("inner-header");
  }

  const ContactUs = useRef();
  const Location = useLocation();

  useEffect(() => {
    if (Location.hash === "#ContactUs" && ContactUs.current) {
      ContactUs.current.scrollIntoView();
    }

    if (Location.pathname === "/contact" && ContactUs.current) {
      ContactUs.current.scrollIntoView();
    }

    if (props.location.pathname === "/contact/") {
      document.body.classList.add("inner-header");
    }

    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 70);
    }, );
  }, [Location]);

  return (
    <div>
      <MetaTags>
      <title>Contact PCG Investors for your investment needs</title>
      <meta name="description" content="Contact number, address, and e mail address of PCG investors" />
      </MetaTags>
      <link rel="canonical" href="https://www.pcginvestors.com/contact"></link>
      <Router>
        <ScrollHandler />
        <section
          id={`#ContactUs`}
          ref={(el) => {
            ContactUs.current = el;
          }}
        >
          <div className="inner-page-wrapper contact-us-wrapper">
            <div className="content-wrapper">
              <div className="content-inner-box">
                <div className="company-values">
                  <div className="values-title">
                    <span></span>
                    <h2>Contact Details</h2>
                  </div>
                  <div className="value-text">
                    <div className="principles">
                      <h3>HQ in the heart of Silicon Valley</h3>
                      <div className="card_containar">
                        <div className="leftside_text contact_leftside_text">
                          <img
                            className="image_containar"
                            src="/contact/Group 613.svg"
                            alt="Location Icon"
                          />
                          <div className="card_list_items contact-us-item">
                            <ul>
                              <li>
                                PO Box 7,<br></br> Los Gatos,<br></br> CA, 95031
                                <br></br>(vs One Embarcadero Center)
                                <br></br>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card_containar">
                        <div className="leftside_text contact_leftside_text">
                          <img
                            className="image_containar"
                            src="/contact/Group 614.svg"
                            alt="Telephone Icon"
                          />
                          <div className="card_list_items contact-us-item">
                            <ul>
                              <li>415.407.2700 (Telephone)</li>
                              {/* <li>408.354.8482 (Fax)</li> */}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card_containar">
                        <div className="leftside_text contact_leftside_text">
                          <img
                            className="image_containar"
                            src="/contact/Group 615.svg"
                            alt="Email Icon"
                          />
                          <div className="card_list_items contact-us-item">
                            <ul>
                              <li>info@pcg-investors.com</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default Contact;
