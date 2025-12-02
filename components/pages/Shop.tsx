
import React from 'react';
import { useTranslation } from '../../App';
import { ALL_PRODUCTS } from '../../constants';
import { ProductCard } from '../ProductCard';
import { View } from '../../types';

interface ShopProps {
  category?: 'skincare' | 'makeup';
}

export const Shop: React.FC<ShopProps> = ({ category }) => {
  const { t, currentView, setView } = useTranslation();

  const filteredProducts = category 
    ? ALL_PRODUCTS.filter(p => p.category === category)
    : ALL_PRODUCTS;

  const title = category 
    ? (category === 'skincare' ? t.shop_skincare : t.shop_makeup)
    : t.shop_all;

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in min-h-screen">
      {/* Shop Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our collection of premium beauty products designed to enhance your natural glow.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setView('shop')}
          className={`pb-4 px-4 text-sm font-semibold transition-colors border-b-2 ${
            currentView === 'shop' 
              ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' 
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {t.shop_all}
        </button>
        <button 
          onClick={() => setView('skincare')}
          className={`pb-4 px-4 text-sm font-semibold transition-colors border-b-2 ${
            currentView === 'skincare' 
              ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' 
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {t.shop_skincare}
        </button>
        <button 
          onClick={() => setView('makeup')}
          className={`pb-4 px-4 text-sm font-semibold transition-colors border-b-2 ${
            currentView === 'makeup' 
              ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' 
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {t.shop_makeup}
        </button>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No products found in this category.
        </div>
      )}
    </div>
  );
};
