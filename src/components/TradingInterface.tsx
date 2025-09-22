import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Zap } from 'lucide-react';

interface TradingInterfaceProps {
  balance: number;
  setBalance: (balance: number) => void;
  holdings: any;
  setHoldings: (holdings: any) => void;
}

const tokens = [
  { id: 'product', name: 'PRODUCT', price: 0.01337, change: 42.0 },
  { id: 'powder', name: 'POWDER', price: 0.00420, change: -13.37 },
  { id: 'brick', name: 'BRICK', price: 0.00069, change: 69.0 },
  { id: 'pill', name: 'PILL', price: 0.00888, change: 88.8 }
];

export default function TradingInterface({ balance, setBalance, holdings, setHoldings }: TradingInterfaceProps) {
  const [selectedToken, setSelectedToken] = useState('product');
  const [amount, setAmount] = useState('');
  const [prices, setPrices] = useState<{[key: string]: number}>({});
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  useEffect(() => {
    const initialPrices: {[key: string]: number} = {};
    tokens.forEach(token => {
      initialPrices[token.id] = token.price;
    });
    setPrices(initialPrices);

    const interval = setInterval(() => {
      setPrices(prevPrices => {
        const newPrices = { ...prevPrices };
        tokens.forEach(token => {
          newPrices[token.id] = Math.max(0.00001, newPrices[token.id] + (Math.random() - 0.5) * newPrices[token.id] * 0.1);
        });
        return newPrices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBuy = () => {
    const tokenAmount = parseFloat(amount);
    if (!tokenAmount || tokenAmount <= 0) return;

    const cost = tokenAmount * (prices[selectedToken] || 0);
    if (cost > balance) return;

    setBalance(balance - cost);
    setHoldings({
      ...holdings,
      [selectedToken]: (holdings[selectedToken] || 0) + tokenAmount
    });

    setShowSuccessAnimation(true);
    setTimeout(() => setShowSuccessAnimation(false), 2000);
    setAmount('');
  };

  const selectedTokenData = tokens.find(t => t.id === selectedToken);

  return (
    <section className="py-16 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          TRADING DESK 📊
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Token Selector */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Select Your Product 🎯</h3>
            <div className="grid grid-cols-2 gap-4">
              {tokens.map((token) => {
                const isSelected = selectedToken === token.id;
                const currentPrice = prices[token.id] || token.price;
                const priceChange = ((currentPrice - token.price) / token.price) * 100;
                
                return (
                  <button
                    key={token.id}
                    onClick={() => setSelectedToken(token.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isSelected
                        ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/30'
                        : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-lg text-white mb-1">${token.name}</div>
                      <div className="text-sm font-mono text-green-400 mb-1">
                        ${currentPrice.toFixed(6)}
                      </div>
                      <div className={`text-xs font-bold flex items-center justify-center ${
                        priceChange >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {priceChange >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trading Panel */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Make It Rain! 💸</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount of ${selectedTokenData?.name}
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Price per token:</span>
                  <span className="text-green-400 font-mono">
                    ${(prices[selectedToken] || 0).toFixed(6)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Total cost:</span>
                  <span className="text-green-400 font-mono">
                    ${((parseFloat(amount) || 0) * (prices[selectedToken] || 0)).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Your balance:</span>
                  <span className="text-blue-400 font-mono">${balance.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleBuy}
              disabled={!amount || parseFloat(amount) <= 0 || ((parseFloat(amount) || 0) * (prices[selectedToken] || 0)) > balance}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-2"
            >
              <DollarSign className="h-5 w-5" />
              <span>BUY NOW! 🚀</span>
            </button>

            <div className="mt-4 text-xs text-center text-gray-500">
              Remember: Only spend what you can afford to lose... which is everything! 😎
            </div>
          </div>
        </div>

        {/* Success Animation */}
        {showSuccessAnimation && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-green-500 text-white text-2xl font-bold py-4 px-8 rounded-full animate-bounce shadow-2xl">
              🚀 TO THE MOON! 🌙
            </div>
          </div>
        )}
      </div>
    </section>
  );
}