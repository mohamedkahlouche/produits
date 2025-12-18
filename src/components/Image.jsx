import React from "react";
import product from "../data/product";

export default function Image() {
  return (
    <img src={product.image} className="w-full h-48 object-cover rounded-lg" />
  );
}
