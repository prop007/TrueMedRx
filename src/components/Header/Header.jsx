import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="header">
      {/* Desktop Version */}
      <div className="header-desktop">
        <div className="header-logo">
          <div className='logo'>
            <img src="/images/logo.png" alt="Website logo" />
          </div>
        </div>
        
        <div className="search-container desktop-search">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
        <div className="header-actions">
          <div className="account">
            <span className="icon">&#128100;</span>
            <span className="text">My Account</span>
          </div>
          <div className="cart" onClick={() => navigate('/panier')} style={{ cursor: 'pointer' }}>
            <span className="icon">&#128722;</span>
            <span className="text">My Cart</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="header-mobile">
        <div className="mobile-top">
          <div className="header-logo">
            <div className='logo'>
              <img src="/images/logo.png" alt="Website logo" />
            </div>
          </div>
          <div className="header-actions">
            <div className="account">
              <span className="icon">&#128100;</span>
            </div>
            <div className="cart" onClick={() => navigate('/panier')} style={{ cursor: 'pointer' }}>
              <span className="icon">&#128722;</span>
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="search-container mobile-search">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </header>
  );
};

export default Header;