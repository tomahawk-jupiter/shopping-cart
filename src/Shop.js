import axeImg from "./images/axe.webp";
import shieldImg from "./images/shield.jpg";
import spearImg from "./images/spear.jpg";
import swordImg from "./images/sword.jpg";
import React from "react";

const inventory = [
  {
    product: "Sword",
    price: 14,
    img: swordImg,
  },
  {
    product: "Shield",
    price: 5,
    img: shieldImg,
  },
  {
    product: "Axe",
    price: 8,
    img: axeImg,
  },
  {
    product: "Spear",
    price: 7,
    img: spearImg,
  },
  {
    product: "Sword",
    price: 14,
    img: swordImg,
  },
  {
    product: "Shield",
    price: 5,
    img: shieldImg,
  },
  {
    product: "Axe",
    price: 8,
    img: axeImg,
  },
  {
    product: "Spear",
    price: 7,
    img: spearImg,
  },
];

const Shop = (props) => {
  return (
    <div className="shop-page">
      <h1 className="shop-page-h1">Inventory...</h1>
      <div className="product-container">
        {inventory.map((item, index) => {
          const { product, price, img } = item;
          return (
            <div key={index} className="card">
              <div className="product-text-wrapper">
                <div className="product-name">{product}</div>
                <div className="product-price">{price} Gold</div>
              </div>
              <img className="card-img" src={img} alt=""></img>
              <button onClick={() => props.addToCart({ product, price })}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
