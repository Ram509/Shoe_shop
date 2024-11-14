import React from "react";
import Profile_1 from "../../Assets/profile_1.png"; // Importing the profile image
import "../Css/Home.css"; // Importing the CSS file
import Shoe_1 from "../../Assets/shoe_1.jpg";
import Shoe_2 from "../../Assets/shoe_2.jpg";
import Shoe_3 from "../../Assets/shoe_3.jpg";

const shoe = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "shoe",
    image: Shoe_1,
    new_price: 60.0,
    old_price: 75.0,
  },
  {
    id: 2,
    name: "Casual Slip-ons",
    category: "shoe",
    image: Shoe_2,
    new_price: 45.0,
    old_price: 60.0,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "shoe",
    image: Shoe_3,
    new_price: 85.0,
    old_price: 100.0,
  },
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="text-content">
          <h4 className="subtitle">Design & Quality</h4>
          <h1 className="title">AIR MAX</h1>
          <p className="description">
            Discover the latest trends in footwear with Shoe Shop – your
            destination for style, comfort, and quality.
            <br /> Step up your game with shoes that make every step count.
          </p>
        </div>
        <div className="image-container">
          <img src={Profile_1} alt="Profile" className="profile" />
        </div>
      </div>
      <div className="trending-products">
        <p className="trending-title">Trending Products</p>
        <h2 className="popular-title">
          Most Popular <br />
          <span>Products</span>
        </h2>
        <div className="shoe-list">
          {shoe.map((item) => (
            <div key={item.id} className="shoe-item">
              <img src={item.image} alt={item.name} className="shoe-image" />
              <h3 className="shoe-name">{item.name}</h3>
              <p className="price">
                <span className="new-price">${item.new_price.toFixed(2)}</span>{" "}
                <span className="old-price">${item.old_price.toFixed(2)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
