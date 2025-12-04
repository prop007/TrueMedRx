import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { allProducts } from "./allProducts";

const Products = () => { // 🔥 Removing props
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Get searchTerm from URL
  const urlParams = new URLSearchParams(location.search);
  const searchTerm = urlParams.get('search') || '';

  console.log("🔍 SearchTerm from URL:", searchTerm);

  // 🔥 Filter products
  const filteredProducts = searchTerm.trim() !== "" 
    ? allProducts.filter(product => 
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  console.log("📊 Filtered products:", filteredProducts);

  return (
    <div className="products-page">
      <h2>Search Results</h2>

      {searchTerm ? (
        <>
          <p>Results for "<strong>{searchTerm}</strong>"</p>
          
          {filteredProducts.length === 0 ? (
            <p>No products found for "{searchTerm}"</p>
          ) : (
            <div className="results-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => navigate("/produit", { state: { product } })}
                  style={{ cursor: "pointer" }}
                >
                  <img src={product.image} alt={product.name} />
                  <h4>{product.brand}</h4>
                  <p>{product.price} €</p>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Please perform a search to display products.</p>
      )}
    </div>
  );
};

export default Products;