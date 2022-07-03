import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div className="category-container">
        <div className="category-main-section text-center">
          <div className="category-heading">
            <h2>Featured cars available</h2>
            <p className="text-center">
              Book your test deive today and get <b>15% special discount!</b>
            </p>
          </div>
          <div className="category-item-list flex-center">
            <div className="featued-products-row">
              <div className="category-item">
                <div className="detailed-box-info">
                  <h4>SUV</h4>
                  <p>budget friendly option - Space, Safety and Speed.</p>
                </div>
              </div>
            </div>
            <div className="featued-products-row">
              <div className="category-item">
                <div className="detailed-box-info">
                  <h4>Super Sports</h4>
                  <p>Style, Elegance and Comfort with speed and thrill.</p>
                </div>
              </div>
            </div>
            <div className="featued-products-row">
              <div className="category-item">
                <div className="detailed-box-info">
                  <h4>Trucks</h4>
                  <p>
                    For all your light and heavy transport needs with super
                    power.
                  </p>
                </div>
              </div>
            </div>
            <div className="featued-products-row">
              <div className="category-item">
                <div className="detailed-box-info">
                  <h4>Electric - Hybrid</h4>
                  <p>Class, Comfort and elegance and Eco-friendly option.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
