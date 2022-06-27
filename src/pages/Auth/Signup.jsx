import React from "react";
import "./auth.css";
const Signup = () => {
  return (
    <div>
      <div className="navbar-container">
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <a href="/">
              <p className="nav-title">Cars Store</p>
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
            <a href="/">
              <button className="btn btn-dark">Login</button>
            </a>
            <li>
              <a href="/cart/cart.html">
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
      <div className="auth-container flex-center">
        <div className="auth-main-container flex-center">
          <div className="auth-title">
            <h2 className="text-center">Sign Up</h2>
          </div>
          <div className="auth-main display-col-centre">
            <div className="auth-email">
              <label for="mail">Email Address</label>
              <input
                placeholder="user123@gmail.com"
                className="text-input"
                type="text"
              />
            </div>
            <div className="auth-pwd">
              <label for="pwd">Password</label>
              <input placeholder="********" class="pwd-input" type="password" />
            </div>
            <div className="auth-checkbox display-col-centre">
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span className="text">I accept all terms and conditions</span>
              </label>
            </div>
            <div className="btn btn-primary text-center">
              <a href="/" className="link-btn">
                Create New Account
              </a>
            </div>
            <div className="auth-secondary-btn text-center">
              <a href="/">
                Already have an account{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
