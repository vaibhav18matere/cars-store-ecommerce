import React from "react";
import "./Wishlist.css";

const Wishlist = () => {
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
                <input type="text" name="search" class="search-bar" placeholder="Search for car"/>
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
                        <img src="https://picsum.photos/id/111/200/300" alt="navbar-img" />
                    </a>
                </li>
            </ul>
        </ul>
    </div>
    <div class="wishlist-container">
        <div class="wishlist-main-container flex-center">
            <h3 id="wishlist-title">MY WISHLIST (2)</h3>
            <div class="wishlist-manage">
                <div class="wishlists">
                    <div class="wishlist-item">
                        <img src="https://picsum.photos/id/111/200/300" alt="wishlist1"/>
                        <div class="item-info d-flex">
                            <header class="d-flex">
                                <div class="item-desc">
                                    <h4 class="card-title-header text-center">Woplmh CRetro Vintage</h4>
                                    <p class="card-description text-center">1938 Chevrolet Master Coupe Pickup - by
                                        KyleAndTheClassics</p>
                                    <div class="wishlist-price d-evenly">
                                        <p class="disc-price">$4000</p>
                                        <p class="actual-price">$8000</p>
                                        <p class="price-percentage">(50% OFF)</p>
                                    </div>
                                </div>
                                <div class="delete-icon cursor">
                                    <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                </div>
                            </header>
                            <button class="btn btn-primary move-to-cart">Move to Cart</button>
                        </div>
                    </div>
                    <div class="wishlist-item">
                        <img src="https://picsum.photos/id/111/200/300" alt="wishlist2"/>
                        <div class="item-info d-flex">
                            <header class="d-flex">
                                <div class="item-desc">
                                    <h4 class="card-title-header text-center">Woplmh CRetro Vintage</h4>
                                    <p class="card-description text-center">1938 Chevrolet Master Coupe Pickup - by
                                        KyleAndTheClassics</p>
                                    <div class="wishlist-price d-evenly">
                                        <p class="disc-price">$4000</p>
                                        <p class="actual-price">$8000</p>
                                        <p class="price-percentage">(50% OFF)</p>
                                    </div>
                                </div>
                                <div class="delete-icon cursor">
                                    <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                </div>
                            </header>
                            <button class="btn btn-primary move-to-cart">Move to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
  )
};

export default Wishlist;
