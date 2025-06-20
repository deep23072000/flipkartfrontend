import React, { useState } from 'react';
import '../assets/topbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const showlogin = useNavigate()

  return (
    <div className="topbar">
      <div className="logo">
        <span className="flipkart-text">Flipkart</span>
        <span className="explore">
          Explore <span className="plus">Plus</span>
        </span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button className="login-btn" onClick={()=>{showlogin("/login")}}>Login</button>
        <a href="#">Become a Seller</a>
        <a href="#">
          <i className="fas fa-shopping-cart"></i> Cart
        </a>
      </div>
    </div>
  );
};

export default Topbar;
