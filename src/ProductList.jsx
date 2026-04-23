import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id:1,name:"Aloe Vera",price:10,category:"Indoor",image:"https://via.placeholder.com/100" },
    { id:2,name:"Snake Plant",price:12,category:"Indoor",image:"https://via.placeholder.com/100" },
    { id:3,name:"Peace Lily",price:14,category:"Indoor",image:"https://via.placeholder.com/100" },
    { id:4,name:"Fern",price:11,category:"Indoor",image:"https://via.placeholder.com/100" },
    { id:5,name:"Money Plant",price:13,category:"Indoor",image:"https://via.placeholder.com/100" },
    { id:6,name:"Spider Plant",price:9,category:"Indoor",image:"https://via.placeholder.com/100" },

    { id:7,name:"Rose",price:15,category:"Outdoor",image:"https://via.placeholder.com/100" },
    { id:8,name:"Tulsi",price:8,category:"Outdoor",image:"https://via.placeholder.com/100" },
    { id:9,name:"Lavender",price:16,category:"Outdoor",image:"https://via.placeholder.com/100" },
    { id:10,name:"Marigold",price:7,category:"Outdoor",image:"https://via.placeholder.com/100" },
    { id:11,name:"Jasmine",price:12,category:"Outdoor",image:"https://via.placeholder.com/100" },
    { id:12,name:"Hibiscus",price:14,category:"Outdoor",image:"https://via.placeholder.com/100" }
  ];

  const categories = ["Indoor", "Outdoor"];

  return (
    <div>
      <h1>Plant Shop</h1>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>

          {products
            .filter((p) => p.category === cat)
            .map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <button onClick={() => dispatch(addItem(item))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;