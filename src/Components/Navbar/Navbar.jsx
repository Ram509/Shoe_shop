import React from "react";
import "./Navbar.css";
import searchIcon from "../../Assets/search.png";
import profileIcon from "../../Assets/profile.png";
import bagIcon from "../../Assets/shopping_pag.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>SHOE SHOP</span>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      <div className="navbar-icons">
        <img src={profileIcon} alt="Profile" />
        <img src={bagIcon} alt="Bag" />
      </div>
    </nav>
  );
};

export default Navbar;
