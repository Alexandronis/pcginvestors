import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import organisationData from "../../../../data/organization.json";

const LogoCard = ({ data, navigate }) => (
  <div
    role="button"
    tabIndex={0}
    className="logo-box"
    onClick={() => navigate("/client-page", { state: { data } })}
    onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
  >
    <div className="logo-img-box">
      <img
        loading="lazy"
        className="image_containar"
        src={data.company_logo}
        alt={data.alt}
      />
    </div>
  </div>
);

const PortfolioSection = ({ location, sectionRef }) => {
  const navigate = useNavigate();
  const storedOption = localStorage.getItem("portfolioOption");
  const [viewOption, setViewOption] = useState(storedOption || "Realized");

  const handleChange = (e) => {
    const value = e.target.value;
    setViewOption(value);
    localStorage.setItem("portfolioOption", value);
  };

  // Filter by status
  const realized = organisationData.filter((org) => org.status === "realized");
  const unrealized = organisationData.filter((org) => org.status === "unrealized");

  // Filter by category
  const categories = [
    { key: "fitness", label: "FITNESS" },
    { key: "foods and beverage", label: "FOOD & BEVERAGE" },
    { key: "consumer", label: "CONSUMER SERVICES / RETAIL" },
    { key: "lifestyle", label: "LIFESTYLE" },
    { key: "supplement", label: "SUPPLEMENTS" },
  ];

  const filteredByCategory = categories.map((cat) => ({
    ...cat,
    items: organisationData.filter((org) => org.category === cat.key),
  }));

  return (
    <section
      id="Portfolio-page"
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
            <select name="Views" id="Views" onChange={handleChange} value={viewOption}>
              <option value="Realized">Unrealized / Realized</option>
              <option value="Category">Category</option>
            </select>
          </label>
        </div>
      </div>

      <div className="content-wrapper">
        {viewOption === "Realized" ? (
          <div className="content-inner-box">
            {/* Unrealized Investments */}
            <div className="company-values">
              <div className="values-title">
                <h3>UNREALIZED INVESTMENTS</h3>
              </div>
            </div>
            <div className="card-investments">
              <div className="card-wrapper">
                {unrealized.map((data) => (
                  <LogoCard key={data.id} data={data} navigate={navigate} />
                ))}
              </div>
              <p className="ref-word">*These investments are partially realized.</p>
            </div>

            {/* Realized Investments */}
            <div className="company-values">
              <div className="values-title">
                <h3>REALIZED INVESTMENTS</h3>
              </div>
            </div>
            <div className="card-investments">
              <div className="card-wrapper">
                {realized.map((data) => (
                  <LogoCard key={data.id} data={data} navigate={navigate} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="category">
            {filteredByCategory.map((cat) =>
              cat.items.length > 0 ? (
                <div key={cat.key} className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h3>{cat.label}</h3>
                    </div>
                  </div>
                  <div className="card-investments">
                    <div className="card-wrapper">
                      {cat.items.map((data) => (
                        <LogoCard key={data.id} data={data} navigate={navigate} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
