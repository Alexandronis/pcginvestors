import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import organisationData from "../../../../data/organization.json";

const PortfolioSection = ({ location, sectionRef }) => {
  const [value, setValue] = useState(localStorage.getItem("portfolioOption"));
  const navigate = useNavigate();

  const filteredRealized = organisationData.filter(org => org.status === "realized");
  const filteredUnrealized = organisationData.filter(org => org.status === "unrealized");

  const fitnessCategory = organisationData.filter(org => org.category === "fitness");
  const foodsCategory = organisationData.filter(
    org => org.category === "foods and beverage"
  );
  const consumerCategory = organisationData.filter(org => org.category === "consumer");
  const lifestyleCategory = organisationData.filter(org => org.category === "lifestyle");
  const suplemntsCategory = organisationData.filter(
    org => org.category === "supplement"
  );

  const divstatus = e => {
    setValue(e.target.value);
    localStorage.setItem("portfolioOption", e.target.value);
  };

  return (
    <section
      id={`#Portfolio-page`}
      ref={sectionRef}
      className={
        location.hash === "#Portfolio" || location.hash === ""
          ? "show-section"
          : "hide-section"
      }
    >
      <div className="content-wrapper">
        <div className="content-inner-box">
          <div className="company-values">
            <div className="values-title">
              <h2>PORTFOLIO</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-menu-line">
        <div className="select-menu">
          <label htmlFor="View">
            View by:
            <select name="Views" id="Views" onChange={divstatus}>
              <option defaultValue value="Realized">
                Unrealized / Realized
              </option>
              <option value="Category">Category</option>
            </select>
          </label>
        </div>
      </div>

      <div className="content-wrapper">
        {value === "Realized" || value === null ? (
          <div>
            <div className="content-inner-box">
              <div className="company-values">
                <div className="values-title">
                  <h3>UNREALIZED INVESTMENTS</h3>
                </div>
              </div>

              <div className="card-investments">
                <div className="card-wrapper">
                  {filteredUnrealized.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="ref-word">
                  *These investments are partially realized.
                </p>
              </div>

              <div className="company-values">
                <div className="values-title">
                  <h3>REALIZED INVESTMENTS</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {filteredRealized.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="category">
            <div className="content-inner-box">
              {/* Fitness */}
              <div className="company-values">
                <div className="values-title">
                  <h3>FITNESS</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {fitnessCategory.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foods & Beverage */}
              <div className="company-values">
                <div className="values-title">
                  <h3>FOOD & BEVERAGE</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {foodsCategory.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consumer */}
              <div className="company-values">
                <div className="values-title">
                  <h3>CONSUMER SERVICES / RETAIL</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {consumerCategory.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle */}
              <div className="company-values">
                <div className="values-title">
                  <h3>LIFESTYLE</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {lifestyleCategory.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplements */}
              <div className="company-values">
                <div className="values-title">
                  <h3>SUPPLEMENTS</h3>
                </div>
              </div>
              <div className="card-investments">
                <div className="card-wrapper">
                  {suplemntsCategory.map(data => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="logo-box"
                      key={data.id}
                      onClick={() =>
                        navigate("/client-page", {state: {data}})
                      }
                      onKeyPress={e =>
                        e.key === "Enter" &&
                        navigate("/client-page", {state: {data}})
                      }
                    >
                      <div className="logo-img-box">
                        <img
                          className="image_containar"
                          src={data.company_logo}
                          alt={data.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
