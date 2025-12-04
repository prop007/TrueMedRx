import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductPage.css";
import ProduitTaille from "../PageP/ProduitTaille"
import Footer from "../components/Footer";


const ProductPage = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const product = location.state?.product;
  

  if (!product) return <div className="product-page">Product not found.</div>;

  return (
    <div>
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-brand">{product.brand}</p>

        <div className="product-rating">
          <span className="star">★★★★★</span>
          <span>4.5</span>
        </div>

        <p className="product-price">{product.price}$</p>
        <p className="product-stock">Only 15 units at this price</p>

        <button
          className="product-button"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>


      </div>
      

    </div>





<br /><br />
    


                    <p className="product-price2">{product.description}</p>


    
      <br /><br /><br /> 
      
      <br /><br /><br /> 
    <Footer/>
    </div>
  );
};

export default ProductPage;


