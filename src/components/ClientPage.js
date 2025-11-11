import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollHandler from "./ScrollHandler";

function ClientPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;

  // Handle redirect if no data (in case user opens /client-page directly)
  useEffect(() => {
    if (!data) navigate("/portfolio-page");
  }, [data, navigate]);

  // Manage body classes
  useEffect(() => {
    if (location.pathname === "/client-page") {
      document.body.classList.add("popup-page", "inner-header");
    }
    return () => {
      document.body.classList.remove("popup-page", "inner-header");
    };
  }, [location.pathname]);

  function handleClick() {
    navigate("/portfolio-page");
    document.body.classList.remove("popup-page");
  }

  if (!data) return null; // prevent crash before redirect

  return (
    <div>
      <ScrollHandler />
      <div className="inner-page-wrapper client-wrapper">
        <div className="content-wrapper">
          <div className="content-inner-box">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <img
              className="close-img"
              onClick={handleClick}
              onKeyPress={(e) => e.key === "Enter" && handleClick(e)}
              src="/close-btn.svg"
              alt="close"
            />
            <div className="company-values">
              <div className="values-title">
                <span></span>
                <h2>{data.company}</h2>
              </div>
              <p className="sub-company">
                {data.parent_company !== undefined ? data.parent_company : ""}
              </p>
            </div>

            <div className="card-content-wrapper">
              <img src={data.cover_image} alt="" className="cover-photo" />
              <div className="card-content-col">
                <div className="image-cap">
                  <div className="logo-img-box">
                    <img
                      src={data.company_logo_large}
                      alt={data.alt}
                      className="profile-image"
                    />
                    <a
                      href={data.url}
                      className="btn-btn-visit mobile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>

                  <div className="mob-set-inner">
                    <div className="desc_section">
                      <span>&quot;</span>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {data.short_description}
                      </p>
                      <span>&quot;</span>
                    </div>
                    <div className="name_labels">
                      <h4>{data.author}</h4>
                      <h4>{data.autho_designation}</h4>
                      <h4>{data.author_company}</h4>
                    </div>
                  </div>
                </div>

                <div className="card-discription">
                  <div className="main-head">
                    <div className="heading">
                      <div className="card-main-title">{data.company}</div>
                      <div className="card-sub-heading">{data.subheading}</div>
                    </div>
                    <a
                      href={data.url}
                      className="btn-btn-visit desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>

                  <p>{data.description}</p>

                  <div className="list-items">
                    <ul>
                      {data.features.map((option, i) => (
                        <li key={i}>{option}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bottom-text">
                    {data.leadership !== "" ? (
                      <ul className="list-wrap">
                        <li className="list-title">Leadership</li>
                        <li className="list-text">{data.leadership}</li>
                      </ul>
                    ) : null}

                    <ul className="list-wrap">
                      <li className="list-title">Website</li>
                      <li className="list-text">
                        <a href={data.url} target="_blank" rel="noreferrer">
                          {data.website}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
