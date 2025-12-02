import React, { useState, useEffect } from 'react';
import { Plus, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useTranslation } from '../App';

export const BestSeller: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const bestSellers = [
    {
      label: t.bestseller_02_label,
      leftTitle: t.bestseller_left_title,
      rightTitle: t.bestseller_right_title,
      rightDesc: t.bestseller_right_desc,
      leftImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM",
      rightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzHEggg6lLVAf9NzthjIhtd72rDZ1tUd-VYfr_7UrStFghH5YswaB-jLgxvLIhOReJEBu5tvyFt_HAQsB_BUCTL4PCg11VC6qbQnu0O3RpXQgyoPqMSWOYYF-psxfIgkaec0f3BV_HrfcJZd0xarMO1GT_ehBH4Hbsjzd34DOADkK2Xvma2K6y9ChwHIkEkouQzBYT8axSSVoF3eCUjCGaUmVX7PweHdjonyj5OXTTsuoXzFSoBHx9nSxthcJFX7vUERjh1UnWocU"
    },
    {
      label: "BEST 01",
      leftTitle: t.bestseller_2_left_title,
      rightTitle: t.bestseller_2_right_title,
      rightDesc: t.bestseller_2_right_desc,
      leftImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL_G59pP8mhlsMkqAKW6vr3n3ZDfUh17Qjdg0yxNg91PVENjmLzCisye7Fd4y_rOwGO3dYZ4ZyT-c0g0dMBfN12bf911BDfRIxrCacN-2y2yF2PoK02hpTi1Vh8OuOIier4yNle5Rwquti6OwVoTGD-3mbg1IyWRbELasIeHxDsxmGqkqfF8o4G7JRr5YiGmGqeGEw7cMXdlEbN_oCEX7M078ErGUqNEj2LJ8dNIOjxB4ZgHTtSOgot9ISfy-Suwywos7u-BRQDUY",
      rightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL_G59pP8mhlsMkqAKW6vr3n3ZDfUh17Qjdg0yxNg91PVENjmLzCisye7Fd4y_rOwGO3dYZ4ZyT-c0g0dMBfN12bf911BDfRIxrCacN-2y2yF2PoK02hpTi1Vh8OuOIier4yNle5Rwquti6OwVoTGD-3mbg1IyWRbELasIeHxDsxmGqkqfF8o4G7JRr5YiGmGqeGEw7cMXdlEbN_oCEX7M078ErGUqNEj2LJ8dNIOjxB4ZgHTtSOgot9ISfy-Suwywos7u-BRQDUY" // Reusing image as placeholder if needed, but optimally would be different
    },
    {
      label: "BEST 03",
      leftTitle: t.bestseller_3_left_title,
      rightTitle: t.bestseller_3_right_title,
      rightDesc: t.bestseller_3_right_desc,
      leftImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ",
      rightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ"
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bestSellers.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, bestSellers.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bestSellers.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bestSellers.length) % bestSellers.length);
    setIsPlaying(false);
  };

  const activeItem = bestSellers[currentSlide];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide">
            {t.bestseller_title}
          </h2>
          <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110">
            <Plus size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="relative">
          {/* Main Content Area with Transition */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[500px]">
            {/* Left Card - Full Image */}
            <div className="relative rounded-2xl overflow-hidden group h-[500px] lg:h-auto">
              <div key={currentSlide} className="absolute inset-0 animate-fade-in">
                <img 
                  src={activeItem.leftImage} 
                  alt={activeItem.leftTitle} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white">
                  <p className="text-sm font-bold tracking-widest mb-3 opacity-90">{activeItem.label}</p>
                  <h3 
                    className="text-3xl lg:text-4xl font-bold leading-tight"
                    dangerouslySetInnerHTML={{ __html: activeItem.leftTitle.replace(/ /g, '<br/>') }}
                  />
                </div>
              </div>
            </div>

            {/* Right Card - Product Highlight */}
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 lg:p-16 text-center flex flex-col justify-center items-center h-full relative overflow-hidden">
               <div key={`right-${currentSlide}`} className="flex flex-col items-center animate-fade-in z-10 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {activeItem.rightTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                  {activeItem.rightDesc}
                </p>
                
                <div className="mt-10 mb-10 relative">
                  <div className="absolute inset-0 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl transform scale-150"></div>
                  <img 
                    src={activeItem.rightImage} 
                    alt={activeItem.rightTitle} 
                    className="relative max-w-[200px] lg:max-w-xs h-auto transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center space-x-4 z-20 mt-auto">
                <button 
                  onClick={handlePrev}
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors p-2"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex items-center space-x-3">
                  {bestSellers.map((_, idx) => (
                    <span 
                      key={idx}
                      onClick={() => { setCurrentSlide(idx); setIsPlaying(false); }}
                      className={`block rounded-full cursor-pointer transition-all ${
                        idx === currentSlide 
                          ? 'w-3 h-3 border-2 border-gray-900 dark:border-white' 
                          : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                      }`}
                    ></span>
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors p-2"
                >
                  <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors ml-2"
                >
                  {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};