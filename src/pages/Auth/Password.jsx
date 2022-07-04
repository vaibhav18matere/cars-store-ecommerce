import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
const Password = () => {
  return (
    <div>
      <div className="navbar-container">
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <Link to="/">
              <p className="nav-title">Cars Store</p>
            </Link>
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
              <Link to="/cart">
                <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/user-profile">
                <img
                  src="https://picsum.photos/id/111/200/300"
                  alt="navbar-img"
                />
              </Link>
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
            <Link to="/password" className="link-btn">
              Reset Password
            </Link>
          </div>
          <div className="auth-secondary-btn">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <Link to="/login"> Back to Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Password;
