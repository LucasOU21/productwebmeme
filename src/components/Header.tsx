import React from 'react';
import { Package } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Package className="h-8 w-8 text-black" />
            <h1 className="text-2xl font-black text-black tracking-tight">
              $PRODUCT
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-600 hover:text-black transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors font-medium">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}