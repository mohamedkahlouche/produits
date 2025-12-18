import React from "react";
import product from "../data/product";

export default function Price() {
  return <p className="text-red-600 font-bold">{product.price}</p>;
}
