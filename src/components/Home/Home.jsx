import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="row">
          <div className="header-column">
            <h4>Shipping Cars</h4>
            <h4>Shipping Happiness</h4>
            <p>
              Cars Store is a dedicated multi-brand online car showroom. It is
              Indias largest market place for online car shopping!
            </p>
            <Link to="/product-listing">
              <button className="btn btn-primary">Explore Now &#8594;</button>
            </Link>
          </div>
          <div className="header-column">
            <img
              className="homepage-hero-img"
              src="/Images/car2.png"
              alt="car-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
