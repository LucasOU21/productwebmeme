import React from 'react';
import { Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package className="h-8 w-8 text-white" />
            <span className="text-2xl font-black tracking-tight">$PRODUCT</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Remember: for entertainment purposes only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Disclaimer</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Not financial advice</li>
              <li>• All purchases are fake</li>
              <li>• No real products sold</li>
              <li>• Pure entertainment only</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Satirical experience</li>
              <li>• Clean design</li>
              <li>• Premium memes</li>
              <li>• Zero real value</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-gray-400 text-sm">
            © 2025 $PRODUCT Memecoin. All rights reserved. No actual rights exist.
          </div>
        </div>
      </div>
    </footer>
  );
}