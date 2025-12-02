
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from '../App';

export const Sustainability: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const content = [
    {
        title: t.sustainability_title,
        desc: t.sus_desc_1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL_G59pP8mhlsMkqAKW6vr3n3ZDfUh17Qjdg0yxNg91PVENjmLzCisye7Fd4y_rOwGO3dYZ4ZyT-c0g0dMBfN12bf911BDfRIxrCacN-2y2yF2PoK02hpTi1Vh8OuOIier4yNle5Rwquti6OwVoTGD-3mbg1IyWRbELasIeHxDsxmGqkqfF8o4G7JRr5YiGmGqeGEw7cMXdlEbN_oCEX7M078ErGUqNEj2LJ8dNIOjxB4ZgHTtSOgot9ISfy-Suwywos7u-BRQDUY",
        label: t.sus_01
    },
    {
        title: "BESPOKE NEO",
        desc: t.sus_desc_2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM",
        label: t.sus_02
    },
    {
        title: "MEETS ARTS",
        desc: t.sus_desc_3,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ",
        label: t.sus_03
    },
    {
        title: "LIFESTYLE",
        desc: t.sus_desc_4,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS6c6ulTM8-PeQotHX45h7y1xbt1CvKsgUxpgpdnV5c7tT2j1qgWQdfWgUN5B9mGqJRrhHvy5yaYXwwHgoJgE_kZjMatFT4EB0vjlwGPbWkxcILO1Y3yROr9HEZazLYVmM_-g2c0SQ8yJPjipYLBIC52TsAI4kJdU3QC8VGFHI88N5MhqoG40ckpMIq9RVlBbaZXkUOfC1gNgqYQtuOzJxDyz8qBR9Hv1uNoYpPQteE76iyAZ-9zmtg58l5Acvw03fEjzZ5VRwnL8",
        label: t.sus_04
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="relative h-[650px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {content.map((item, index) => (
        <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
            <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-20"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-20"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 w-full mx-auto h-[300px] flex flex-col justify-center">
        {content.map((item, index) => (
             <div 
                key={index}
                className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${
                    index === currentIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg">
                    {item.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-10 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
                    {item.desc}
                </p>
                <button className="group px-10 py-3.5 border border-white/60 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-3 mx-auto font-medium">
                    {t.learn_more} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        ))}
      </div>

      {/* Bottom Tabs */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 to-transparent pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className="flex flex-col items-center group cursor-pointer"
              >
                <p className={`text-xs md:text-sm font-bold tracking-widest mb-4 transition-colors ${index === currentIndex ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                  {item.label}
                </p>
                <div className={`w-full h-0.5 transition-all duration-500 ${index === currentIndex ? 'bg-white' : 'bg-white/20 group-hover:bg-white/50'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
