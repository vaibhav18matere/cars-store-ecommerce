import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "black" : "white",
  });
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            <i className="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <NavLink style={getActiveStyle} to="/">
              <p className="nav-title">Cars Store</p>
            </NavLink>
          </div>
          <NavLink style={getActiveStyle} to="/product-listing">
            Products
          </NavLink>
          <NavLink style={getActiveStyle} to="/about">
            About
          </NavLink>
          {/* <NavLink style={getActiveStyle}>About</NavLink> */}
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
    </>
  );
};
export default Navbar;