import React from "react";
import product from "../data/product";

export default function Name() {
  return <h2 className="text-xl font-bold">{product.name}</h2>;
}
