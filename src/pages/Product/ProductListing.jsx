import React from "react";
import "./ProductListing.css";
const ProductListing = () => {
  return (
    <>
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
                <span>Volkswagen models</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Toyota models</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Daimler models</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span>Ford Motor</span>
              </label>
            </div>
            <div className="filtering-option">
              <h2 className="text-center m-5">Discount Range</h2>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>50% and above</span>
              </label>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>40% and above</span>
              </label>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>30% and above</span>
              </label>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>20% and above</span>
              </label>
            </div>
            <div className="filtering-option ">
              <h2 className="text-center">Sorted by</h2>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>Price - High to Low</span>
              </label>
              <label className="select-input">
                <input type="radio" name="light" className="radio-input" value="" />
                <span>Price - Low to High</span>
              </label>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="product-container d-flex">
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div className="car-card">
              <div className="card_img">
                <figure>
                  <a href="/">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div className="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div className="car-price-div">
                    <span className="car-price">
                      Price : <span className="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="add-cart-btn d-flex align-center font_1r">
                <button className="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;
