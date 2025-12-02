
import React from 'react';
import { useTranslation } from '../../App';
import { Leaf, Package, Heart } from 'lucide-react';

export const Brand: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in pb-20">
      {/* Brand Hero */}
      <div className="relative h-[60vh] bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHEggg6lLVAf9NzthjIhtd72rDZ1tUd-VYfr_7UrStFghH5YswaB-jLgxvLIhOReJEBu5tvyFt_HAQsB_BUCTL4PCg11VC6qbQnu0O3RpXQgyoPqMSWOYYF-psxfIgkaec0f3BV_HrfcJZd0xarMO1GT_ehBH4Hbsjzd34DOADkK2Xvma2K6y9ChwHIkEkouQzBYT8axSSVoF3eCUjCGaUmVX7PweHdjonyj5OXTTsuoXzFSoBHx9nSxthcJFX7vUERjh1UnWocU"
          alt="Brand Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest mb-4">
            {t.brand_title}
          </h1>
          <p className="text-xl text-white/90 font-light max-w-xl">
            {t.brand_subtitle}
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t.brand_philosophy_title}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {t.brand_philosophy_desc}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ" className="rounded-lg w-full h-64 object-cover mt-8" alt="Philosophy 1" />
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM" className="rounded-lg w-full h-64 object-cover" alt="Philosophy 2" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.brand_value_1}</h3>
            <p className="text-gray-500 dark:text-gray-400">Strictly curated natural ingredients.</p>
          </div>
          
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.brand_value_2}</h3>
            <p className="text-gray-500 dark:text-gray-400">Recycled glass and soy ink printing.</p>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-pink-600 dark:text-pink-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.brand_value_3}</h3>
            <p className="text-gray-500 dark:text-gray-400">We never test on animals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
