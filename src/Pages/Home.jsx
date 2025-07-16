import React, { useEffect, useState } from 'react';
import ProductCard from './Cart';
import Navbar from './Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => alert('Failed to load products'));
  }, []);

  const addToCart = (id) => {
    fetch('http://localhost:5000/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id }),
    })
      .then((res) => res.ok ? alert('Added to cart') : alert('Failed'))
      .catch(() => alert('Error adding to cart'));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <h1 className="text-2xl font-bold mb-6 text-center">Product Store</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
