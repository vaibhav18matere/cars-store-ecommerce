import React from "react";
import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <div className="wishlist-main-container flex-center">
          <h3 id="wishlist-title">MY WISHLIST (2)</h3>
          <div className="wishlist-manage">
            <div className="wishlists">
              <div className="wishlist-item">
                <img
                  src="https://picsum.photos/id/111/200/300"
                  alt="wishlist1"
                />
                <div className="item-info d-flex">
                  <header className="d-flex">
                    <div className="item-desc">
                      <h4 className="card-title-header text-center">
                        Woplmh CRetro Vintage
                      </h4>
                      <p className="card-description text-center">
                        1938 Chevrolet Master Coupe Pickup - by
                        KyleAndTheClassNameics
                      </p>
                      <div className="wishlist-price d-evenly">
                        <p className="disc-price">$4000</p>
                        <p className="actual-price">$8000</p>
                        <p className="price-percentage">(50% OFF)</p>
                      </div>
                    </div>
                    <div className="delete-icon cursor">
                      <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </div>
                  </header>
                  <button className="btn btn-primary move-to-cart">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div className="wishlist-item">
                <img
                  src="https://picsum.photos/id/111/200/300"
                  alt="wishlist2"
                />
                <div className="item-info d-flex">
                  <header className="d-flex">
                    <div className="item-desc">
                      <h4 className="card-title-header text-center">
                        Woplmh CRetro Vintage
                      </h4>
                      <p className="card-description text-center">
                        1938 Chevrolet Master Coupe Pickup - by
                        KyleAndTheClassNameics
                      </p>
                      <div className="wishlist-price d-evenly">
                        <p className="disc-price">$4000</p>
                        <p className="actual-price">$8000</p>
                        <p className="price-percentage">(50% OFF)</p>
                      </div>
                    </div>
                    <div className="delete-icon cursor">
                      <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </div>
                  </header>
                  <button classname="btn btn-primary move-to-cart">
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
