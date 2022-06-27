import React from "react";
import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div>
      <div class="navbar-container">
        <ul class="navbar nav-fixed d-flex">
          <div class="d-flex">
            <i class="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <a href="/">
              <p class="nav-title">carGhar - E-commerce app </p>
            </a>
          </div>
          <div class="search-container d-flex">
            <input
              type="text"
              name="search"
              class="search-bar"
              placeholder="Search for car"
            />
            <i class="fa fa-search fa-2x" aria-hidden="true"></i>
          </div>
          <ul class="navbar-right d-end">
            <li>
              <a href="/">
                <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
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
      <h1>USER PROFILE NEEDS TO BE ADDED HERE</h1>
    </div>
  );
};
export default UserProfile;
