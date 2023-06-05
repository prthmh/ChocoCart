import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <span>ChocoCart</span>
          <p>Order high quality and delicious chocolate.</p>
          <div className="socials">
            <Link className="footer_link" to="https://github.com/prthmh">
              <p>
                Github
              </p>
            </Link>
            <Link className="footer_link" to="https://twitter.com/prAtmsh">
              <p>
                Twitter
              </p>
            </Link>
            <Link className="footer_link" to="https://www.linkedin.com/in/prathmesh-umberkar-31220216a/">
              <p>
                Linkedin
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <span className="heading">Quick Links</span>
          <div className="listItems">
            <Link className="footer_link" to="/productlist">
              <p>Chocolates</p>
            </Link>
            <Link className="footer_link" to="/cart">
              <p>Cart</p>
            </Link>
            <Link className="footer_link" to="/wishlist">
              <p>Wishlist</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <span className="heading">Contact Us</span>
          <div className="contact-list">
            <div className="contact-mode">
              <p>308 Negra Arroyo Lane, Albuquerque, New Mexico</p>
            </div>
            <div className="contact-mode">
              <p>+91 12345 56789</p>
            </div>
            <div className="contact-mode">
              <p>contact@ChocoCart.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
