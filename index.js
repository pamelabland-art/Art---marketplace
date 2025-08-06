import React, { useState } from 'react';
import { ShoppingCart, Plus, Eye, Heart, Search } from 'lucide-react';

export default function ArtMarketplace() {
  const [artworks] = useState([
    {
      id: 1,
      title: "Abstract Sunset",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      category: "Abstract"
    },
    {
      id: 2,
      title: "Urban Landscape", 
      price: 18.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Landscape"
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (artwork) => {
    setCart([...cart, artwork]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Pamela's Art Gallery</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map(artwork => (
            <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-4">{artwork.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${artwork.price}</span>
                  <button 
                    onClick={() => addToCart(artwork)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
