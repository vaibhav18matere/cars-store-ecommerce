import React from "react";
import "./ProductListing.css";
const ProductListing = () => {
  return (
    <>
      <div class="navbar-container">
        <ul class="navbar nav-fixed d-flex">
          <div class="d-flex">
            <i class="fa fa-car hamberg-btn" aria-hidden="true"></i>
            <a href="/index.html">
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
              <a href="/cart/cart.html">
                <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="/wishlist/wishlist.html">
                <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
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
      <section class="middleSection">
        <div class="sidebar">
          <div class="sidebar-content">
            <p>Filters</p>
            <p>Clear</p>
          </div>
          <div class="prize-range">
            <div class="range">
              <p>$5K</p>
              <p>$10K</p>
              <p>$15K</p>
            </div>
            <input
              class="input-progress"
              type="range"
              min="1"
              max="100"
              value="50"
            />
          </div>
          <div class="sidebar-sub-content">
            <div class="filtering-option">
              <h2 class="sidebar-category text-center">Cateogry</h2>
              <label class="select-input">
                <input
                  type="checkbox"
                  name="light"
                  class="checkbox-input"
                  value=""
                />
                <span>Volkswagen models</span>
              </label>
              <label class="select-input">
                <input
                  type="checkbox"
                  name="light"
                  class="checkbox-input"
                  value=""
                />
                <span>Toyota models</span>
              </label>
              <label class="select-input">
                <input
                  type="checkbox"
                  name="light"
                  class="checkbox-input"
                  value=""
                />
                <span>Daimler models</span>
              </label>
              <label class="select-input">
                <input
                  type="checkbox"
                  name="light"
                  class="checkbox-input"
                  value=""
                />
                <span>Ford Motor</span>
              </label>
            </div>
            <div class="filtering-option">
              <h2 class="text-center m-5">Discount Range</h2>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>50% and above</span>
              </label>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>40% and above</span>
              </label>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>30% and above</span>
              </label>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>20% and above</span>
              </label>
            </div>
            <div class="filtering-option ">
              <h2 class="text-center">Sorted by</h2>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>Price - High to Low</span>
              </label>
              <label class="select-input">
                <input type="radio" name="light" class="radio-input" value="" />
                <span>Price - Low to High</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="product-container d-flex">
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
            <div class="car-card">
              <div class="card_img">
                <figure>
                  <a href="/product/product.html">
                    <img src="https://picsum.photos/id/111/200/300" alt="" />
                  </a>
                </figure>
                <div class="card_info">
                  <h3>Woplmh CRetro Vintage</h3>
                  <div class="car-price-div">
                    <span class="car-price">
                      Price : <span class="active_item">$8000</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="add-cart-btn d-flex align-center font_1r">
                <button class="btn btn-primary flex-1">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;
