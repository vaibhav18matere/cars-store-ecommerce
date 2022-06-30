import React from "react";
import "./SingleProduct.css";
import "../../backend/db/products";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const SingleProduct = ({
  _id,
  title,
  price,
  model,
  category,
  image,
  description,
}) => {
  const { _productId } = useParams();
  return (
    <div>
      <Navbar />
      <div className="single-card-container flex-center">
        <div className="single-card flex-center">
          <div className="single-card-left">
            <img className="single-card-img" src={image} alt="carImg" />
          </div>
          <div className="single-card-right display-col-centre">
            <h3 className="single-card-title-header">{_productId}</h3>
            <p className="para-sm msg">
              <i className="fa fa-bolt" aria-hidden="true"></i> Hurry , Only Few
              Left !
            </p>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery,
              Free Test Drive
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All
              Taxes
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Easy EMI
              Available
            </span>
            <div className="other-info">
              <ul>
                <li className="display-col-centre">{title}</li>
                <li className="display-col-centre">{category}</li>
                <li className="display-col-centre">{model}</li>
                <li className="display-col-centre">{description}</li>
                <li className="display-col-centre">
                  <div className="star-ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </li>
                <div className="price">
                  <p className="disc-price">{price}</p>
                  <p className="actual-price">$16000</p>
                  <p className="price-percentage">(50% OFF)</p>
                </div>
              </ul>
            </div>
            <button className="btn btn-primary add-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Add to Cart
            </button>
            <button className="btn btn-secondary wishlist-btn">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
