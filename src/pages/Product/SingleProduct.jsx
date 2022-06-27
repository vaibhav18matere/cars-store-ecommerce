import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div>
      <div className="navbar-container">
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <a href="/">
              <p className="nav-title">carGhar - E-commerce app </p>
            </a>
          </div>
          <div className="search-container d-flex">
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Search for car"
            />
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          </div>
          <ul className="navbar-right d-end">
            <li>
              <a href="/">
                <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://picsum.photos/id/111/200/300"
                  alt="navbar-img"
                />
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="single-card-container flex-center">
        <div className="single-card flex-center">
          <div className="single-card-left">
            <img
              className="single-card-img"
              src="https://picsum.photos/id/111/300/300"
              alt="car-img"
            />
          </div>
          <div className="single-card-right display-col-centre">
            <h3 className="single-card-title-header">Woplmh C-Retro</h3>
            <p className="para-sm msg">
              <i className="fa fa-bolt" aria-hidden="true"></i> Hurry , Only Few
              Left !
            </p>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery,
              Free Test Drive
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All
              Taxes
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Easy EMI
              Available
            </span>
            <div className="other-info">
              <ul>
                <li className="display-col-centre">Modal : Woplmh </li>
                <li className="display-col-centre">Category : C-Retro</li>
                <li className="display-col-centre">Fuel : Petrol</li>
                <li className="display-col-centre">Color : Grey</li>
                <li className="display-col-centre">
                  <div className="star-ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </li>
                <div className="price">
                  <p className="disc-price">Price : $8000</p>
                  <p className="actual-price">$16000</p>
                  <p className="price-percentage">(50% OFF)</p>
                </div>
              </ul>
            </div>
            <button className="btn btn-primary add-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Add to Cart
            </button>
            <button className="btn btn-secondary wishlist-btn">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
