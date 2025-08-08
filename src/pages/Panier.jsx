import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Panier.css';

const Panier = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
  const message = cartItems
    .map(item => `📦 *${item.name}* - Quantité: ${item.quantity}, Prix: ${item.price} €`)
    .join('\n');

  const totalMessage = `\n💰 *Total*: ${total.toFixed(2)} €`;

  const fullMessage = encodeURIComponent(`${message}${totalMessage}`);

  const phoneNumber = '33753911221'; // Remplace par ton numéro WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

  window.open(whatsappURL, '_blank');
};


  return (
    <div className="panier-container">
      <h2>Mon panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <table className="panier-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="panier-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
onChange={(e) => {
  const value = Math.max(1, parseInt(e.target.value) || 1);
  updateQuantity(item.id, value);
}}


                      className="quantity-input"
                    />
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} €</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="panier-total">
            <h3>Total : {total.toFixed(2)} €</h3>
<button className="checkout-btn" onClick={handleWhatsAppCheckout}>
  Passer à la caisse via WhatsApp
</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
