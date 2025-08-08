import React, { useState, useEffect } from "react";
import "./PromoCarousel.css";

const slides = [
  {
    image: "/images/promo1.jpg",
    title: "Nature & diététique",
    discount: "-58%",
  },
  {
    image: "/images/promo2.png",
    title: "Forme & énergie",
    discount: "-40%",
  },
  // Tu peux ajouter autant de slides que tu veux
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-box">
            <h2>{slide.title}</h2>
            <span className="discount">Jusqu'à <strong>{slide.discount}</strong></span>
            <button>Je découvre</button>
          </div>
        </div>
      ))}

      <button className="carousel-arrow left" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right" onClick={nextSlide}>›</button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
