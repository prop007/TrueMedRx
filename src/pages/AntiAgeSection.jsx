import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AntiAgeSection.css";

const products = [
  {
    id: 2,
    brand: "RoC",
    name: "RoC Derm Correxion Sérum Raffermissant",
    price: 35.99,
    image: '/images/product1.jpg',
  },
  {
    id: 3,
    brand: "dermaceutic laboratoire",
    name: "Dermaceutic Activ Retinol 1.0 Sérum",
    price: 63.49,
    image: '/images/product2.jpg',
  },
  {
    id: 1,
    brand: "SVR",
    name: "SVR [B3] Ampoule Hydra 30ml",
    price: 23.29,
    oldPrice: 39.90,
    discount: "-42%",
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    brand: "Avène",
    name: "Avène Hyaluron Activ B3 Crème",
    price: 34.9,
    image: '/images/product4.jpg',
  },
  {
    id: 5,
    brand: "Eneomey",
    name: "Eneomey Daylight C20 Soin Jour Anti-Âge Antioxydant 30ml",
    price: 34.96,
    image: '/images/product6.jpg',
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
      {/* Version desktop du banner */}
      <div className="antiage-banner desktop-only">
        <div className="banner-text">
          <h2>Soins anti-âge</h2>
          <p>
            Rétinol, niacinamide, vitamine C... <br />
            Un shot d'ingrédients actifs pour booster la vitalité de votre peau
          </p>
          <a href="#">Voir tout</a>
        </div>
        <img src="/images/product5.png" alt="Femme" />
      </div>

      {/* Version mobile du banner (intégré comme une carte scrollable) */}
      <div
        className="product-card banner-card mobile-only"
        onClick={() => navigate('/produit')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/images/product5.png" alt="Femme" />
        <p className="brand">Soins anti-âge</p>
        <p className="name">Rétinol, niacinamide, vitamine C...</p>
        <p className="desc">
          Un shot d'ingrédients actifs pour booster la vitalité de votre peau
        </p>
        <a href="#" className="view-all">Voir tout</a>
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
                <span className="price">{product.price}€ </span>
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
