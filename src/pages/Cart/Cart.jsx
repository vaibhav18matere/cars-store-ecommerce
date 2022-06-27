import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <>
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
      <div class="cart-container">
        <div class="cart-main-container flex-center">
          <h1 class="cart-title-number">MY CART (2)</h1>
          <div class="cart-sider">
            <div class="cart-manage-item">
              <div class="cards horizontal-container">
                <div class="card-horizontal">
                  <img
                    class="card-img"
                    src="https://picsum.photos/id/111/200/200"
                    alt="cart-img1"
                  />
                  <div class="card-information">
                    <div class="card-title">
                      <h4 class="text-center">CAR 1</h4>
                      <p class="cart-description">
                        Buy newly arrived car now online !
                      </p>
                    </div>
                    <div class="price">
                      <p class="disc-price">$4000</p>
                      <p class="actual-price">$8000</p>
                      <p class="price-percentage">(50% OFF)</p>
                    </div>
                    <div class="qty">
                      <button class="minus cursor">-</button>
                      <input class="qty-count" type="number" value="1" />
                      <button class="add cursor">+</button>
                    </div>
                  </div>
                </div>
                <div class="cart-btns">
                  <button class="btn btn-secondary">REMOVE</button>
                  <button class="btn btn-primary">MOVE TO WISHLIST</button>
                </div>
              </div>
              <div class="cards horizontal-container">
                <div class="card-horizontal">
                  <img
                    class="card-img"
                    src="https://picsum.photos/id/133/200/200"
                    alt=""
                  />
                  <div class="card-information">
                    <div class="card-title">
                      <h4 class="text-center">CAR 2</h4>
                      <p class="cart-description">
                        Buy newly arrived car now online !
                      </p>
                    </div>
                    <div class="price">
                      <p class="disc-price">$3000</p>
                      <p class="actual-price">$6000</p>
                      <p class="price-percentage">(50% OFF)</p>
                    </div>
                    <div class="qty">
                      <button class="minus cursor">-</button>
                      <input class="qty-count" type="number" value="1" />
                      <button class="add cursor">+</button>
                    </div>
                  </div>
                </div>
                <div class="cart-btns">
                  <button class="btn btn-secondary">REMOVE</button>
                  <button class="btn btn-primary">MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>
            <div class="price-details">
              <ul class="coupon">
                <p>Do you have a Coupon?</p>
                <a
                  href="/"
                  target="_blank"
                  class="btn btn-secondary coupon-btn"
                >
                  Apply
                </a>
              </ul>
              <h4 class="text-center">PRICE DETAILS</h4>

              <div class="price-calculate">
                <li>
                  <ul>
                    <p>Price (2 items) -</p>
                    <p>$9000</p>
                  </ul>
                  <ul>
                    <p>Season Discount -</p>
                    <p>-$1000</p>
                  </ul>
                  <ul>
                    <p>Delivery Charges -</p>
                    <p>FREE</p>
                  </ul>

                  <ul>
                    <p>Coupon Discount -</p>
                    <p>-$1000</p>
                  </ul>
                </li>
              </div>
              <ul class="price-totalAmt">
                <h4>Total Amount -</h4>
                <h4>$7000</h4>
              </ul>
              <p class="text-center">You saved $2000 on this order</p>
              <div class="btn btn-primary text-center">
                <a
                  href="/"
                  target="_blank"
                  class="order-placed"
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
