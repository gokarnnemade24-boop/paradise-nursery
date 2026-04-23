import React from "react";

export default function ProductList() {
  const products = [
    { id:1, name:"Aloe Vera", price:10 },
    { id:2, name:"Snake Plant", price:15 },
    { id:3, name:"Peace Lily", price:20 }
  ];

  return (
    <div>
      <h2>Plants Shop</h2>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}