
import React, { useState, useEffect } from 'react';
import { Plus, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../App';
import { ALL_PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';

export const NewArrivals: React.FC = () => {
  const { t, setView } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(ALL_PRODUCTS.length / ITEMS_PER_PAGE);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalPages]);

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentPage(p => (p - 1 + totalPages) % totalPages);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentPage(p => (p + 1) % totalPages);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Create array of page indices for mapping
  const pages = Array.from({ length: totalPages });

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide">
            {t.new_arrivals_title}
          </h2>
          <button 
            onClick={() => setView('shop')}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110"
          >
            <Plus size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Carousel Viewport - Removed min-h-[500px] to fix excessive gap */}
        <div className="overflow-hidden relative group">
          {/* Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((_, pageIndex) => {
              const pageProducts = ALL_PRODUCTS.slice(
                pageIndex * ITEMS_PER_PAGE,
                (pageIndex + 1) * ITEMS_PER_PAGE
              );

              return (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pageProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Unified Controls - Reduced margin-top */}
        <div className="mt-10 flex justify-center items-center space-x-3">
          <button 
            onClick={handlePrev}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center space-x-3 mx-2">
            {pages.map((_, i) => (
              <span 
                key={i} 
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentPage === i 
                    ? 'w-2.5 h-2.5 bg-gray-900 dark:bg-white cursor-default' 
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                }`}
              ></span>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          >
            <ChevronRight size={20} />
          </button>

          <button 
            onClick={togglePlay}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1 ml-2"
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
        </div>
      </div>
    </section>
  );
};
