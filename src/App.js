import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import EventLandingPage from "./components/EventLandingPage";
import Panier from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import Cart from './pages/Cart'; // si tu routes vers Cart.jsx



function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/produit" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
