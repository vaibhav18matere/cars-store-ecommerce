import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Category />
      <Footer />
    </>
  );
};
export default Homepage;