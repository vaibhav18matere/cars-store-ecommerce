import React from "react";
import "./auth.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-container flex-center">
        <div className="auth-main-container flex-center">
          <div className="auth-title">
            <h2 className="text-center">Login</h2>
          </div>
          <div className="auth-main display-col-centre">
            <div className="auth-email">
              <label for="mail">Enter your e-mail</label>
              <input
                placeholder="user123@gmail.com"
                className="text-input"
                type="text"
              />
            </div>
            <div className="auth-pwd">
              <label for="pwd">Enter your password</label>
              <input
                placeholder="*********"
                className="pwd-input"
                type="password"
              />
            </div>
            <div className="auth-checkbox">
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span className="text">Remember Me</span>
              </label>
              <Link to="/password">Forgot your Password?</Link>
            </div>

            <div className=" btn btn-primary text-center">
              <Link to="/login" className="link-btn">
                Login
              </Link>
            </div>
            <div className="auth-secondary-btn text-center">
              <Link to="/signup">
                Create New Account
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
