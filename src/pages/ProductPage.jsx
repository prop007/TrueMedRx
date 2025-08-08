import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductPage.css";

const ProductPage = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const product = location.state?.product;

  if (!product) return <div className="product-page">Produit non trouvé.</div>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-brand">{product.brand}</p>

        <div className="product-rating">
          <span className="star">★★★★★</span>
          <span>4.5</span>
        </div>

        <p className="product-price">{product.price} €</p>
        <p className="product-stock">Seulement 15 unités à ce prix</p>

        <button
          className="product-button"
          onClick={() => addToCart(product)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
