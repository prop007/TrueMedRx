import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AntiAgeSection.css";

const products = [
  {
    id: 2,
    brand: "RoC",
    name: "RoC Derm Correxion Firming Serum",
    price: 35.99,
    image: '/images/product1.jpg',
    description:"",
  },
  {
    id: 3,
    brand: "dermaceutic laboratoire",
    name: "Dermaceutic Activ Retinol 1.0 Serum",
    price: 63.49,
    image: '/images/product2.jpg',
    description:"",
  },
  {
    id: 1,
    brand: "SVR",
    name: "SVR [B3] Hydra Ampoule 30ml",
    price: 23.29,
    oldPrice: 39.90,
    discount: "-42%",
    image: '/images/product3.png',
    description:"",
  },
  {
    id: 4,
    brand: "Avène",
    name: "Avène Hyaluron Activ B3 Cream",
    price: 34.9,
    image: '/images/product4.jpg',
    description:"",
  },

  {
    id: 5,
    brand: "Eneomey",
    name: "Eneomey Daylight C20 Anti-Aging Antioxidant Day Care 30ml",
    price: 34.96,
    image: '/images/product6.jpg',
    description:"",
  },
];

const AntiAgeSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="antiage-container">
      {/* Desktop banner */}
      <div className="antiage-banner desktop-only">
        <div className="banner-text">
          <h2>Anti-Aging Care</h2>
          <p>
            Retinol, niacinamide, vitamin C... <br />
            A shot of active ingredients to boost your skin’s vitality.
          </p>
          <a href="#">See all</a>
        </div>
        <img src="/images/product5.png" alt="Woman" />
      </div>

      {/* Mobile banner (scrollable card) */}
      <div
        className="product-card banner-card mobile-only"
        onClick={() => navigate('/produit')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/product5.png" alt="Woman" />
        <p className="brand">Anti-Aging Care</p>
        <p className="name">Retinol, niacinamide, vitamin C...</p>
        <p className="desc">
          A shot of active ingredients to boost your skin’s vitality.
        </p>
        <a href="#" className="view-all">See all</a>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          &larr;
        </button>

        <div className="products-container" ref={scrollRef}>
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img
                src={product.image}
                alt={product.name}
                style={{ cursor: "pointer" }}
                onClick={() => navigate('/produit', { state: { product } })}
              />
              <p className="brand">{product.brand}</p>
              <p className="name">{product.name}</p>
              <div className="price-box">
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="price">{product.price}$ </span>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default AntiAgeSection;
