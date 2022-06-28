import "./App.css";
import Homepage from "./pages/Home/Homepage";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./pages/Product/ProductListing";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import SingleProduct from "./pages/Product/SingleProduct";
import UserProfile from "./pages/User Profile/UserProfile";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Password from "./pages/Auth/Password";
import Error from "./pages/Error/Error";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
