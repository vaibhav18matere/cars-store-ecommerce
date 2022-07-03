import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="homepage-footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column1">
              <h4 className="txt-space">Download our app</h4>
              <p>
                Get the app for <strong> Android </strong> or
                <strong> IOS </strong> devices
              </p>
              <div>
                <img
                  className="car-app-logo cursor"
                  src="/Images/android.png"
                  alt="android-logo"
                />
                <img
                  className="car-app-logo cursor"
                  src="/Images/ios.png"
                  alt="ios-logo"
                />
              </div>
            </div>
            <div className="footer-copyright">
              <img src="/Images/car-logo.png" alt="car-logo" />
              <p className="text-center">Copyright © 2022 - Vaibhav Matere</p>
            </div>
            <div className="footer-column4">
              <h4 className="txt-space">Follow us on</h4>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/vaibhav_matere"
                    className="twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vaibhav18matere"
                    className="github"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vaibhavmatere/"
                    className="linkedin"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column-links">
              <h4 className="txt-space">Useful Links</h4>
              <ul>
                <li>Service Centres</li>
                <li>Blogs Posts</li>
                <li>Career Section</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
