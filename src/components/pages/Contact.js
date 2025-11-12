import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollHandler from "../common/ScrollHandler";

const Contact = () => {
  const contactUs = useRef(null);
  const location = useLocation();

  // Manage header class and scroll behavior
  useEffect(() => {
    if (location.pathname === "/contact" || location.pathname === "/contact/") {
      document.body.classList.add("inner-header");
    } else {
      document.body.classList.remove("inner-header");
    }

    if (
      (location.hash === "#ContactUs" || location.pathname === "/contact") &&
      contactUs.current
    ) {
      contactUs.current.scrollIntoView({ behavior: "smooth" });
    }

    // Offset scroll by 70px
    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 70);
    }, 100);
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Contact PCG Investors for your investment needs</title>
        <meta
          name="description"
          content="Contact number, address, and e mail address of PCG investors"
        />
        <link rel="canonical" href="https://www.pcginvestors.com/contact" />
      </Helmet>

      <ScrollHandler />

      <section id="ContactUs" ref={contactUs}>
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
                          src="/contact/Group%20613.svg"
                          alt="Location Icon"
                          loading="lazy"
                        />
                        <div className="card_list_items contact-us-item">
                          <ul>
                            <li>
                              PO Box 7,<br />
                              Los Gatos,<br />
                              CA, 95031<br />
                              (vs One Embarcadero Center)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card_containar">
                      <div className="leftside_text contact_leftside_text">
                        <img
                          className="image_containar"
                          src="/contact/Group%20614.svg"
                          alt="Telephone Icon"
                          loading="lazy"
                        />
                        <div className="card_list_items contact-us-item">
                          <ul>
                            <li>415.407.2700 (Telephone)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card_containar">
                      <div className="leftside_text contact_leftside_text">
                        <img
                          className="image_containar"
                          src="/contact/Group%20615.svg"
                          alt="Email Icon"
                          loading="lazy"
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
    </div>
  );
};

export default Contact;
