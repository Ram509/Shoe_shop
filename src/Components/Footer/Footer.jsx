import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section footer-about">
          <h2>Shoe Shop</h2>
          <p>Your go-to destination for the latest in stylish and comfortable footwear. Step up your game with our curated collection!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@shoeshop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section footer-social">
         
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-copy">&copy; 2024 Shoe Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
