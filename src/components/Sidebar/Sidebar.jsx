import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
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
    </>
  );
};

export default Sidebar;
