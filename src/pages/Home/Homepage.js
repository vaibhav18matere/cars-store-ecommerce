import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="navbar-container">
          <ul className="navbar nav-fixed d-flex">
            <div className="d-flex">
              <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
              <a href="/index.html">
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
            <ul className="navbar-right d-flex">
              <li>
                <a href="/cart/cart.html">
                  <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/wishlist/wishlist.html">
                  <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/user profile/user_profile.html">
                  <img
                    src="https://picsum.photos/id/111/200/300"
                    alt="navbar-img"
                  />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="homepage-container">
          <div className="row">
            <div className="header-column">
              <h4>One stop solution for all vintage cars</h4>
              <p>
                Car Ghar is a dedicated multi-brand online car showroom. It is
                Indias largest market place for online car shopping
              </p>
              <a href="/product-listing/products.html">
                <button className="btn btn-primary">Explore Now &#8594;</button>
              </a>
            </div>
            <div className="header-column">
              <img
                className="homepage-hero-img"
                src="../../assets/Images/car2.png"
                alt="car-img"
              />
            </div>
          </div>
        </div>
        <div className="category-container">
          <div className="category-main-section text-center">
            <div className="category-heading">
              <h2>Featured cars available</h2>
              <p className="text-center">
                Book your test deive today and get 10% discount!
              </p>
            </div>
            <div className="category-item-list flex-center">
              <div className="featued-products-row">
                <div className="category-item">
                  <div className="detailed-box-info">
                    <h4>Model 1</h4>
                    <p>Sports Section - Lorem ipsum, doloadiNulla, maxime?</p>
                  </div>
                </div>
              </div>
              <div className="featued-products-row">
                <div className="category-item">
                  <div className="detailed-box-info">
                    <h4>Model 2</h4>
                    <p>
                      Vintage Section - Lorem, ipsum doloisicing uibusdam,
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="featued-products-row">
                <div className="category-item">
                  <div className="detailed-box-info">
                    <h4>Model 3</h4>
                    <p>Royal Section - Lorem ipsum d Fugiat, expedita!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-footer">
          <div className="footer-container">
            <div className="footer-row">
              <div className="footer-column1">
                <h4 className="txt-space">Download our app</h4>
                <p>
                  Get the app on <b>App store</b> or <b>Play store</b>{" "}
                </p>
                <div>
                  <img
                    className="car-app-logo"
                    src="../../assets/Images/car-logo.png"
                    alt="android-logo"
                  />
                  <img
                    className="car-app-logo"
                    src="../../assets/Images/app-store.png"
                    alt="ios-logo"
                  />
                </div>
              </div>
              <div className="footer-column2">
                <img src="../../assets/Images/car-logo.png" alt="car-logo" />
                <p className="text-center">Copyright © 2022 - Vaibhav Matere</p>
              </div>
              <div className="footer-column3">
                <h4 className="txt-space">Useful Links</h4>
                <ul>
                  <li>Coupon Codes</li>
                  <li>Blogs Posts</li>
                  <li>Career Section</li>
                  <li>Join Affiliate</li>
                </ul>
              </div>
              <div className="footer-column4">
                <h4 className="txt-space">Follow us on</h4>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/vaibhav_matere"
                      className="twitter"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vaibhav18matere"
                      className="github"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vaibhavmatere/"
                      className="linkedin"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
