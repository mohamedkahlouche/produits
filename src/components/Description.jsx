import React from "react";
import product from "../data/product";

export default function Description() {
  return <p className="text-gray-100 font-semibold">{product.description}</p>;
}
