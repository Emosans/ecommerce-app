import React from "react";
import { Product } from '../types'


interface Props {
  product: Product;
  addToCart: (productId: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <img className="h-48" src={product.imageUrl} alt={product.name} />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
        onClick={() => addToCart(product.id)}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
