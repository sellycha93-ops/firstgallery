
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react';
import { useTranslation } from '../App';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: t.hero_title,
      desc: t.hero_desc,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxfNEoQEJ24cw7rG7x6k1Hhgs-awzxo6ijHWU3olg8TcvXBYTrL92jFpKiGfup0c8iLYZ-QgpmqtNVCcW222hcsHDCWyEu8Y0dtNe5uB9IXPx8bbx29Rs-G1yOoKDKQeK06ysNbcYv4yJQlMOJl8v_paiL_ZciERpSy_ym9Me4QCtv0ytDAQ9Hiu6-dUA81gATfhWRMGVVf2wtf40loGCTMSlcRyadOv88MVPZD5Oo2co4lx9VyvZRYp6K76fXm1JxR7mpyQsKGw4"
    },
    {
      title: t.hero_title_2,
      desc: t.hero_desc_2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM"
    },
    {
      title: t.hero_title_3,
      desc: t.hero_desc_3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ"
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false); // Pause interaction on manual control
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left relative">
           {slides.map((slide, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 w-full left-0 ${
                index === currentSlide 
                  ? 'relative opacity-100 translate-x-0 top-0' 
                  : 'absolute top-0 opacity-0 -translate-x-10 pointer-events-none'
              }`}
            >
              {/* Only render content if it's the current slide or transitioning out (handled by opacity) 
                  However, keeping it in DOM is fine as absolute position removes it from flow. 
                  We use the active one (relative) to set the container height. 
              */}
              <div>
                  <h1 
                    className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]"
                    dangerouslySetInnerHTML={{ __html: slide.title.replace(' & ', '<br/>& ').replace(' BLUE ', '<br/>BLUE ').replace(' 3X ', '<br/>3X ') }}
                  />
                  <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    {slide.desc}
                  </p>
                  
                  <button className="mt-10 px-8 py-3 border border-gray-400 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 font-medium group">
                    {t.learn_more} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
            </div>
           ))}

          {/* Carousel Controls - Positioned relative to the flow content */}
          <div className="mt-12 flex justify-center lg:justify-start items-center space-x-4 relative z-10">
            <button 
              onClick={prevSlide}
              className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`block transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-2.5 h-2.5 bg-gray-900 dark:bg-white cursor-default' 
                      : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
             <button 
              onClick={nextSlide}
              className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors lg:hidden"
             >
               <ChevronRight size={20} />
             </button>
             <button 
              onClick={togglePlay}
              className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer shadow-2xl">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
