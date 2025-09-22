import React from 'react';
import { PieChart, TrendingUp, Gem, Package, Sparkles, Zap } from 'lucide-react';

const tokenIcons = {
  product: Zap,
  powder: Sparkles,
  brick: Package,
  pill: Gem
};

const tokenColors = {
  product: 'yellow',
  powder: 'blue',
  brick: 'gray',
  pill: 'green'
};

interface PortfolioProps {
  holdings: any;
}

export default function Portfolio({ holdings }: PortfolioProps) {
  const totalValue = Object.entries(holdings).reduce((total, [token, amount]) => {
    const prices = { product: 0.01337, powder: 0.00420, brick: 0.00069, pill: 0.00888 };
    return total + (amount as number) * (prices[token as keyof typeof prices] || 0);
  }, 0);

  const hasHoldings = Object.values(holdings).some(amount => (amount as number) > 0);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            YOUR BAG 💰
          </h2>
          <p className="text-gray-300 text-lg">
            Diamond hands portfolio tracker - HODL strong! 💎🙌
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-green-400 mb-2">
              ${totalValue.toFixed(2)}
            </div>
            <div className="text-gray-400">Total Portfolio Value</div>
          </div>

          {hasHoldings ? (
            <div className="space-y-6">
              {Object.entries(holdings).map(([token, amount]) => {
                if ((amount as number) <= 0) return null;
                
                const IconComponent = tokenIcons[token as keyof typeof tokenIcons];
                const color = tokenColors[token as keyof typeof tokenColors];
                const prices = { product: 0.01337, powder: 0.00420, brick: 0.00069, pill: 0.00888 };
                const value = (amount as number) * (prices[token as keyof typeof prices] || 0);
                const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0;

                return (
                  <div key={token} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-8 w-8 text-${color}-400`} />
                        <div>
                          <div className="text-xl font-bold text-white">
                            ${token.toUpperCase()}
                          </div>
                          <div className="text-sm text-gray-400">
                            {(amount as number).toFixed(6)} tokens
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-400">
                          ${value.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-400">
                          {percentage.toFixed(1)}% of portfolio
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${color}-400 to-${color}-500 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                  <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">Diamond Hands Activated! 💎</div>
                  <div className="text-sm text-gray-300">HODL strong, gains incoming! 🚀</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <PieChart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <div className="text-xl text-gray-400 mb-2">Your bag is empty! 😢</div>
              <div className="text-gray-500">Time to stack some premium tokens! 📊</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}