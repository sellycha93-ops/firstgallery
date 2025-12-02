
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-5 relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {product.price && (
          <div className="absolute bottom-3 right-3 z-20 bg-white/90 dark:bg-black/70 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.price}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">
          {product.subName}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[10px] font-bold uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
