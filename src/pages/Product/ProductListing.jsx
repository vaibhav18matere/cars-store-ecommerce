import React from "react";
import "./ProductListing.css";
import { products } from "./../../backend/db/products";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const ProductListing = () => {
  return (
    <>
      <Navbar />
      <section className="middleSection">
        <div className="sidebar">
          <div className="sidebar-content">
            <p>Filters</p>
            <p>Clear</p>
          </div>
          <div className="prize-range">
            <div className="range">
              <p>$5K</p>
              <p>$10K</p>
              <p>$15K</p>
            </div>
            <input
              className="input-progress"
              type="range"
              min="1"
              max="100"
              value="50"
            />
          </div>
          <div className="sidebar-sub-content">
            <div className="filtering-option">
              <h2 className="sidebar-category text-center">Cateogry</h2>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>SUV's</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Super Sports</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Trucks</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Electric and Hybrid</span>
              </label>
            </div>
            <div className="filtering-option">
              <h2 className="text-center m-5">Discount Range</h2>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>50% and above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>40% and above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>30% and above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>20% and above</span>
              </label>
            </div>
            <div className="filtering-option ">
              <h2 className="text-center">Sorted by</h2>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>Price - High to Low</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="light"
                  className="radio-input"
                  value=""
                />
                <span>Price - Low to High</span>
              </label>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="product-container d-flex">
            {products.map(({ _id, title, price, image }) => (
              <div className="car-card">
                <div className="card_img">
                  <figure>
                    <Link to={`/product/${_id}`}>
                      <img src={image} alt="carImage" />
                    </Link>
                  </figure>
                  <div className="card_info">
                    <h3>{title}</h3>
                    <div className="car-price-div">
                      <span className="car-price">
                        Price : <span className="active_item">{price}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="add-cart-btn d-flex align-center font_1r">
                  <button className="btn btn-primary flex-1">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;
