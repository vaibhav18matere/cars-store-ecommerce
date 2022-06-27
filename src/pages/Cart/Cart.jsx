import React from "react";
import "./Cart.css";

const Cart = () => {
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
          <div class="search-container d-flex">
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
      <div className="cart-container">
        <div className="cart-main-container flex-center">
          <h1 className="cart-title-number">MY CART (2)</h1>
          <div className="cart-sider">
            <div className="cart-manage-item">
              <div className="cards horizontal-container">
                <div className="card-horizontal">
                  <img
                    className="card-img"
                    src="https://picsum.photos/id/111/200/200"
                    alt="cart-img1"
                  />
                  <div className="card-information">
                    <div className="card-title">
                      <h4 className="text-center">CAR 1</h4>
                      <p className="cart-description">
                        Buy newly arrived car now online !
                      </p>
                    </div>
                    <div className="price">
                      <p className="disc-price">$4000</p>
                      <p className="actual-price">$8000</p>
                      <p className="price-percentage">(50% OFF)</p>
                    </div>
                    <div className="qty">
                      <button className="minus cursor">-</button>
                      <input className="qty-count" type="number" value="1" />
                      <button className="add cursor">+</button>
                    </div>
                  </div>
                </div>
                <div className="cart-btns">
                  <button className="btn btn-secondary">REMOVE</button>
                  <button className="btn btn-primary">MOVE TO WISHLIST</button>
                </div>
              </div>
              <div className="cards horizontal-container">
                <div className="card-horizontal">
                  <img
                    className="card-img"
                    src="https://picsum.photos/id/133/200/200"
                    alt=""
                  />
                  <div className="card-information">
                    <div className="card-title">
                      <h4 className="text-center">CAR 2</h4>
                      <p className="cart-description">
                        Buy newly arrived car now online !
                      </p>
                    </div>
                    <div className="price">
                      <p className="disc-price">$3000</p>
                      <p className="actual-price">$6000</p>
                      <p className="price-percentage">(50% OFF)</p>
                    </div>
                    <div className="qty">
                      <button className="minus cursor">-</button>
                      <input className="qty-count" type="number" value="1" />
                      <button className="add cursor">+</button>
                    </div>
                  </div>
                </div>
                <div className="cart-btns">
                  <button className="btn btn-secondary">REMOVE</button>
                  <button className="btn btn-primary">MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>
            <div className="price-details">
              <ul className="coupon">
                <p>Do you have a Coupon?</p>
                <a
                  href="/"
                  target="_blank"
                  className="btn btn-secondary coupon-btn"
                >
                  Apply
                </a>
              </ul>
              <h4 className="text-center">PRICE DETAILS</h4>

              <div className="price-calculate">
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
              <ul className="price-totalAmt">
                <h4>Total Amount -</h4>
                <h4>$7000</h4>
              </ul>
              <p className="text-center">You saved $2000 on this order</p>
              <div className="btn btn-primary text-center">
                <a href="/" target="_blank" className="order-placed">
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