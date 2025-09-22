import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black tracking-tighter">
            $PRODUCT
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            The premium meme experience. 
            <br />
            <span className="text-black font-medium">Pure. Simple. Product.</span>
          </p>
        </div>

        <div className="mb-16">
         <div className="w-64 h-64 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/src/assets/images/productmain.png" 
              alt="blow - $PRODUCT"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-black">Premium Quality</h3>
            <p className="text-gray-600">Only the finest meme products</p>
          </div>

          <div className="text-center p-6">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-black">To The Moon</h3>
            <p className="text-gray-600">Guaranteed* entertainment value</p>
          </div>

          <div className="text-center p-6">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-black">Diamond Hands</h3>
            <p className="text-gray-600">HODL the experience forever</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#products" 
            className="inline-block bg-black text-white text-lg font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Products
          </a>
        </div>

        <div className="mt-12 text-xs text-gray-400">
          *Not financial advice. For entertainment purposes only.
        </div>
      </div>
    </section>
  );
}