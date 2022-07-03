import React from "react";
import "./SingleProduct.css";
import "../../backend/db/products";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { _productId } = useParams();
  return (
    <>
      <Navbar />
      <h1>{_productId}</h1>
    </>
  );
};
export default SingleProduct;
