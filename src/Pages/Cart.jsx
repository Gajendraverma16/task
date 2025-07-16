import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
      <h2 className="text-lg font-semibold text-center">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-green-600 font-bold text-lg mt-1">₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
