import './PromoBanner.css';

function PromoBanner() {
  return (
    <div className="promo-container">
      <div className="promo-card pink">
        <div className="promo-text">
          <h3>5$ offerts</h3>
          <p>sur votre premier achat de +75$</p>
        </div>
        <img src={'/images/image3.jpg'} alt="Promo 1" className="promo-image" />
      </div>

      <div className="promo-card yellow">
        <div className="promo-text">
          <h3>Livraison gratuite*</h3>
          <p>Produits pour vous chouchouter</p>
        </div>
        <img src={'/images/image4.jpg'} alt="Promo 2" className="promo-image" />
      </div>
    </div>
  );
}

export default PromoBanner;
