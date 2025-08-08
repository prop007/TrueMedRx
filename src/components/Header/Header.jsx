import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="/images/logo.jpg" alt="Logo du site" />
        </div>
        <div className="header-actions">
          <div className="account">
            <span className="icon">&#128100;</span>
            <span className="text">Mon compte</span>
          </div>
          <div className="cart" onClick={() => navigate('/panier')} style={{ cursor: 'pointer' }}>
            <span className="icon">&#128722;</span>
            <span className="text">Mon panier</span>
            <span className="cart-badge">{totalQuantity}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
