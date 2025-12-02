import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ChevronDown } from 'lucide-react';
import { useTranslation } from '../App';

export const Footer: React.FC = () => {
  const { t, lang, setLang } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
            {[t.footer_company, t.footer_terms, t.footer_privacy, t.footer_notices, t.footer_sitemap].map((link, idx) => (
               <a 
                key={idx} 
                href="#" 
                className={`text-sm hover:text-gray-900 dark:hover:text-white transition-colors ${idx === 2 ? 'font-bold text-gray-800 dark:text-gray-200' : ''}`}
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Youtube size={20} /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="text-xs md:text-sm space-y-2 text-center lg:text-left w-full lg:w-auto">
            <p className="font-medium text-gray-800 dark:text-gray-200">{t.footer_customer_service}</p>
            <p className="text-gray-500 dark:text-gray-500">{t.footer_copyright}</p>
          </div>

          <div className="flex items-center gap-4 self-center lg:self-auto">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy9Xp7wtM1yjXJ6vGuvKuDhsIvfzHR75-pltCK0gQa5yYbHZi1QZkp8Vbml-TeiOUEzuSa9zeAmb-FIt-2v6MtrZ8hOHtEqKNmdifqMjXhl7oSqjT9MtIf5Fj6LPTfr57ZyW6S86Etg45yvcnKIiJ3TXYXSkafQSA22hG5Q2HcxFty7fKDojawQvfZFC5jdnelaY_KtdYGj2yMz1VnqtN1lxRTdYRBEa6TGw0V1oyZVNAoSXS0r16lWoo5q7GFW8nAn62lnbKTeC0" 
              alt="WA Mark" 
              className="h-8 md:h-10 opacity-80"
            />
            
            <div className="relative group">
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value as 'en' | 'ko')}
                className="appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-500 cursor-pointer"
              >
                <option value="en">English</option>
                <option value="ko">한국어</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
