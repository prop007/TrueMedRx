import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import EventLandingPage from "./components/EventLandingPage";
import Panier from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import Cart from './pages/Cart';
import Products from './components/Header/Products';
import "./i18n";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/produit" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />

          {/* 🔥 Products sans props - il lit depuis l'URL */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;