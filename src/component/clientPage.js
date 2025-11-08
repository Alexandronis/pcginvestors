import React from "react";
import {
  useHistory,
} from "react-router-dom";
import ScrollHandler from "./scrollHandler";

function ClientPage(props) {
  const data = props.location.state.data;

  const history = useHistory();

  function handleClick() {
    history.push("/portfolio-page");
    document.body.classList.remove("popup-page");
  }
  if (props.location.pathname === "/client-page") {
    document.body.classList.add("popup-page", "inner-header");
  }
  return (
    <div>
      <ScrollHandler />
      <div className="inner-page-wrapper client-wrapper">
        <div className="content-wrapper">
          <div className="content-inner-box">
            <img
              className="close-img"
              onClick={handleClick}
              src="/close-btn.svg"
              alt="close"
            />
            <div className="company-values">
              <div className="values-title">
                <span></span>
                <h2>{data.company}</h2>
              </div>
              <p className="sub-company">{data.parent_company !== undefined ? data.parent_company : ''}</p>
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
                    >
                      Visit Website
                    </a>
                  </div>

                  <div className="mob-set-inner">
                    <div className="desc_section">
                      <span>"</span>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {data.short_description}
                      </p>
                      <span>"</span>
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
                      <div className="card-sub-heading">{data.subheading} </div>
                    </div>
                    <a
                      href={data.url}
                      className="btn-btn-visit desktop"
                      target="_blank"
                    >
                      Visit Website
                    </a>
                  </div>

                  <p>{data.description}</p>

                  <div className="list-items">
                    <ul>
                      {data.features.map((option) => (
                        <li>{option}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bottom-text">
                    {data.leadership !== ''?
                          <ul className="list-wrap">
                          <li className="list-title">Leadership</li>
                          <li className="list-text">{data.leadership}</li>
                        </ul>
                    : null}

                    <ul className="list-wrap">
                      <li className="list-title">Website</li>
                      <li className="list-text"><a href={data.url} target="_blank">
                            {data.website}
                          </a></li>
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
