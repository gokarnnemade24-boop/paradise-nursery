import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="hero">
          <h1>Paradise Nursery</h1>
          <p>Best Plants for Your Home</p>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;