
export type Language = 'en' | 'ko';

export type View = 'home' | 'brand' | 'shop' | 'bestsellers' | 'skincare' | 'makeup' | 'events';

export interface Product {
  id: string;
  name: string;
  subName: string;
  image: string;
  tags: string[];
  category: 'skincare' | 'makeup';
  price?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  desc: string;
  image: string;
  status: 'upcoming' | 'past';
}

export interface Translations {
  nav_brand: string;
  nav_shop: string;
  nav_bestsellers: string;
  nav_skincare: string;
  nav_makeup: string;
  nav_events: string;
  
  hero_title: string;
  hero_desc: string;
  hero_title_2: string;
  hero_desc_2: string;
  hero_title_3: string;
  hero_desc_3: string;
  learn_more: string;
  
  bestseller_title: string;
  bestseller_02_label: string;
  bestseller_left_title: string;
  bestseller_right_title: string;
  bestseller_right_desc: string;
  
  bestseller_2_left_title: string;
  bestseller_2_right_title: string;
  bestseller_2_right_desc: string;
  
  bestseller_3_left_title: string;
  bestseller_3_right_title: string;
  bestseller_3_right_desc: string;
  
  new_arrivals_title: string;
  
  sustainability_title: string;
  sustainability_desc: string;
  sus_01: string;
  sus_02: string;
  sus_03: string;
  sus_04: string;
  sus_desc_1: string;
  sus_desc_2: string;
  sus_desc_3: string;
  sus_desc_4: string;

  brand_title: string;
  brand_subtitle: string;
  brand_philosophy_title: string;
  brand_philosophy_desc: string;
  brand_value_1: string;
  brand_value_2: string;
  brand_value_3: string;

  shop_all: string;
  shop_skincare: string;
  shop_makeup: string;
  
  events_title: string;
  events_upcoming: string;
  events_past: string;

  footer_company: string;
  footer_terms: string;
  footer_privacy: string;
  footer_notices: string;
  footer_sitemap: string;
  footer_customer_service: string;
  footer_copyright: string;
}

export interface TranslationContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  currentView: View;
  setView: (view: View) => void;
}
