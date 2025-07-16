import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/home" className="font-bold text-lg">MyStore</Link>
      <div className="space-x-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
}
