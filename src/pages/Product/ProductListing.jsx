import React from "react";
import "./ProductListing.css";
import { products } from "./../../backend/db/products";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const ProductListing = () => {
  return (
    <>
      <Navbar />
      <section className="middleSection">
        <Sidebar />
        <div className="content-box"> 
          <div className="product-container d-flex">
            {products.map(({ _id, title, price, img }) => (
              <div className="car-card">
                <div className="card_img">
                  <figure>
                    <Link to={`/product/${_id}`}>
                      <img src={img} alt="carImage" />
                    </Link>
                  </figure>
                  <div className="card_info">
                    <h3>{title}</h3>
                    <div className="car-price-div">
                      <span className="car-price">
                        Price : <span className="active_item">{price}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="add-cart-btn d-flex align-center font_1r">
                  <button className="btn btn-primary flex-1 add-to-card">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;
