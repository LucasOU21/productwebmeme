import React, { useState } from 'react';

const products = [
  {
    id: 'brick',
    name: 'BRICK',
    emoji: '🧱',
    price: '$0.00069',
    description: 'Premium brick-grade quality. Built to last forever.',
    image: '📦'
  },
  {
    id: 'powder',
    name: 'POWDER',
    emoji: '❄️',
    price: '$0.00420',
    description: 'Ultra-fine powdered excellence. Instant satisfaction.',
    image: '📦'
  },
  {
    id: 'pill',
    name: 'PILL',
    emoji: '💊',
    price: '$0.00888',
    description: 'Easy to digest gains. No bitter aftertaste.',
    image: '📦'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    emoji: '⭐',
    price: '$0.01337',
    description: 'The ultimate product experience. Pure excellence.',
    image: '📦'
  }
];

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black tracking-tighter">
            PRODUCT LINE
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Choose your experience. Each product offers a unique satirical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:scale-105 cursor-pointer group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <div className="text-4xl">{product.image}</div>
                </div>
                
                <h3 className="text-2xl font-black mb-2 text-black tracking-tight">
                  {product.name}
                </h3>
                
                <div className="text-3xl font-black mb-4 text-black">
                  {product.price}
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95">
                  SELECT
                </button>
              </div>

              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-black/5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No real products are sold. All content is for entertainment purposes only. The real treasure was the memes we made along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}