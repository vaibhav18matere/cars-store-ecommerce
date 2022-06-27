import React from "react";
import "./auth.css";
const Password = () => {
  return (
    <div>
      <div className="navbar-container">
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <a href="/">
              <p className="nav-title">CarGhar - E-commerce app </p>
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
            <a href="/login.html">
              <button className="btn btn-dark">Login</button>
            </a>
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
      <div className="auth-container flex-center">
        <div className="auth-main-container flex-center">
          <div className="auth-title">
            <h2>Forgot Password ?</h2>
          </div>
          <div className="auth-main display-col-centre">
            <div className="auth-email">
              <label for="mail">Email Address</label>
              <input
                placeholder="test@gmail.com"
                className="text-input"
                type="text"
              />
            </div>
          </div>
          <div className="btn btn-primary">
            <a href="/" target="_blank" className="link-btn">
              Reset Password
            </a>
          </div>
          <div className="auth-secondary-btn">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <a href="./"> Back to Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Password;
