
import { Product, Translations, Language, Event } from './types';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav_brand: "BRAND",
    nav_shop: "SHOP",
    nav_bestsellers: "BESTSELLERS",
    nav_skincare: "SKINCARE",
    nav_makeup: "MAKEUP",
    nav_events: "EVENTS",

    hero_title: "BOUNCY & FIRM SLEEPING MASK",
    hero_desc: "Wake up to visibly firmer, glowing skin with our Peony & Collagen Complex™. A bouncy, sorbet-like mask for your best skin.",
    hero_title_2: "WATER BANK BLUE HYALURONIC",
    hero_desc_2: "Repair and moisturize your skin barrier with 1/2000 micro-sized Blue Hyaluronic Acid.",
    hero_title_3: "PERFECT RENEW 3X SIGNATURE",
    hero_desc_3: "Triple-layer anti-aging serum that precisely targets wrinkles, firmness, and radiance.",
    learn_more: "Learn More",

    bestseller_title: "BEST SELLER",
    bestseller_02_label: "BEST 02",
    bestseller_left_title: "WATER BANK BLUE MOISTURE CREAM",
    bestseller_right_title: "Water Bank Blue Hyaluronic Cream",
    bestseller_right_desc: "Customized for your skin type and concerns, for a stronger skin barrier.",
    
    bestseller_2_left_title: "NEO CUSHION MATTE FINISH",
    bestseller_2_right_title: "Neo Cushion Matte",
    bestseller_2_right_desc: "Super-light coverage that sticks to your skin. 24-hour sweat-resistant wear.",

    bestseller_3_left_title: "CREAM SKIN REFINER MIST",
    bestseller_3_right_title: "Cream Skin Refiner",
    bestseller_3_right_desc: "A whole jar of cream dissolved into a toner. Deep hydration from the first step.",

    new_arrivals_title: "NEW ARRIVALS",

    sustainability_title: "SANTE AND SUSTAINABILITY",
    sustainability_desc: "Our promise for a better future.",
    sus_01: "01. SUSTAINABILITY",
    sus_02: "02. BESPOKE NEO",
    sus_03: "03. MEETS ARTS",
    sus_04: "04. LIFESTYLE",
    sus_desc_1: "We are committed to reducing our carbon footprint through eco-friendly packaging and responsible sourcing.",
    sus_desc_2: "Experience the future of beauty with our AI-powered skin analysis and custom foundation matching service.",
    sus_desc_3: "Collaborating with modern artists to bring creativity and inspiration to your daily skincare routine.",
    sus_desc_4: "Promoting a balanced lifestyle that honors both your skin and the environment.",

    brand_title: "OUR STORY",
    brand_subtitle: "Innovation meets nature in every drop.",
    brand_philosophy_title: "The Sante Philosophy",
    brand_philosophy_desc: "We believe in the power of nature enhanced by science. Our mission is to provide effective, sustainable, and luxurious skincare solutions for everyone.",
    brand_value_1: "Clean Ingredients",
    brand_value_2: "Sustainable Packaging",
    brand_value_3: "Cruelty Free",

    shop_all: "All Products",
    shop_skincare: "Skincare",
    shop_makeup: "Makeup",
    
    events_title: "EVENTS",
    events_upcoming: "Upcoming Events",
    events_past: "Past Events",

    footer_company: "Company Info",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    footer_notices: "Notices",
    footer_sitemap: "Site Map",
    footer_customer_service: "Customer Service (Toll-Free) 080-023-5454 | Hours: Mon-Fri 09:00 - 18:00",
    footer_copyright: "© SANTE COSMETICS CORPORATION. ALL RIGHTS RESERVED."
  },
  ko: {
    nav_brand: "브랜드",
    nav_shop: "쇼핑",
    nav_bestsellers: "베스트셀러",
    nav_skincare: "스킨케어",
    nav_makeup: "메이크업",
    nav_events: "이벤트",

    hero_title: "바운시 & 펌 슬리핑 마스크",
    hero_desc: "피오니 & 콜라겐 콤플렉스™로 눈에 띄게 탄력 있고 빛나는 피부로 아침을 맞이하세요. 셔벗 같은 텍스처가 선사하는 최상의 피부 컨디션.",
    hero_title_2: "워터뱅크 블루 히알루로닉",
    hero_desc_2: "1/2000 초저분자 블루 히알루론산으로 피부 장벽을 강력하게 리페어하고 보습을 채우세요.",
    hero_title_3: "퍼펙트 리뉴 3X 시그니처",
    hero_desc_3: "주름, 탄력, 광채를 정밀하게 타겟팅하는 3중 안티에이징 세럼.",
    learn_more: "자세히 보기",

    bestseller_title: "베스트셀러",
    bestseller_02_label: "BEST 02",
    bestseller_left_title: "워터뱅크 블루 모이스처 크림",
    bestseller_right_title: "워터뱅크 블루 히알루로닉 크림",
    bestseller_right_desc: "피부 타입과 고민에 맞춘 솔루션으로 더 강력해진 피부 장벽을 경험하세요.",

    bestseller_2_left_title: "네오 쿠션 매트 피니쉬",
    bestseller_2_right_title: "네오 쿠션 매트",
    bestseller_2_right_desc: "내 피부처럼 얇게 밀착되는 초경량 커버. 24시간 지속되는 땀에 강한 웨어러블 쿠션.",

    bestseller_3_left_title: "크림 스킨 리파이너 미스트",
    bestseller_3_right_title: "크림 스킨 리파이너",
    bestseller_3_right_desc: "크림 한 통을 스킨에 그대로 녹여내어 첫 단계부터 깊은 보습을 선사합니다.",

    new_arrivals_title: "신상품",

    sustainability_title: "산테와 지속가능성",
    sustainability_desc: "더 나은 미래를 위한 우리의 약속.",
    sus_01: "01. 지속가능성",
    sus_02: "02. 비스포크 네오",
    sus_03: "03. 예술과의 만남",
    sus_04: "04. 라이프스타일",
    sus_desc_1: "친환경 패키지와 책임감 있는 원료 소싱을 통해 탄소 발자국을 줄이기 위해 노력합니다.",
    sus_desc_2: "AI 기반 피부 분석과 맞춤형 파운데이션 매칭 서비스로 뷰티의 미래를 경험하세요.",
    sus_desc_3: "현대 아티스트들과의 협업을 통해 일상의 스킨케어 루틴에 창의성과 영감을 불어넣습니다.",
    sus_desc_4: "당신의 피부와 환경 모두를 존중하는 균형 잡힌 라이프스타일을 제안합니다.",

    brand_title: "브랜드 스토리",
    brand_subtitle: "모든 방울에 담긴 혁신과 자연.",
    brand_philosophy_title: "산테의 철학",
    brand_philosophy_desc: "우리는 과학으로 강화된 자연의 힘을 믿습니다. 우리의 사명은 모두를 위한 효과적이고 지속 가능하며 럭셔리한 스킨케어 솔루션을 제공하는 것입니다.",
    brand_value_1: "착한 성분",
    brand_value_2: "지속가능한 패키지",
    brand_value_3: "동물실험 반대",

    shop_all: "전체 상품",
    shop_skincare: "스킨케어",
    shop_makeup: "메이크업",
    
    events_title: "이벤트",
    events_upcoming: "진행중인 이벤트",
    events_past: "종료된 이벤트",

    footer_company: "기업 정보",
    footer_terms: "이용약관",
    footer_privacy: "개인정보처리방침",
    footer_notices: "공지사항",
    footer_sitemap: "사이트맵",
    footer_customer_service: "고객센터 (수신자 부담) 080-023-5454 | 운영시간: 월-금 09:00 - 18:00",
    footer_copyright: "© SANTE COSMETICS CORPORATION. ALL RIGHTS RESERVED."
  }
};

export const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Perfect Renew 3X Signature Serum',
    subName: 'PERFECT RENEW 3X SIGNATURE SERUM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ',
    tags: ['#AntiAging', '#NewSerum'],
    category: 'skincare',
    price: '$65.00'
  },
  {
    id: '2',
    name: 'Bouncy & Firm Lip Treatment',
    subName: 'BOUNCY & FIRM LIP TREATMENT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3PsgYbLxzryUpkd6AiewP0x2WfviqyNoCT8uouZq9wbWeYJkS15Q5VpzZrigp-DGQ1hvchNB5PlaxjfTzCgwr5DYgNvdBA9F9ON4vkHRxgO_nlu8Sk_z13rxIzlb7l5gx7LxxTOzj8xAjjWMU-_PUQsh8tzIskiO55q3wqMKb4iQnjT3jcfWV_R_hrMYKM9JfKoFiYlj9f-5kDUxDYYjYG_-X-T289vjjIZQ_4OU3NbBkI9vhuJ3mRqRG8aghL1UgrMpR33EhO0s',
    tags: ['#Plumping', '#LipCare'],
    category: 'skincare',
    price: '$24.00'
  },
  {
    id: '3',
    name: 'Bouncy & Firm Eye Sleeping Mask',
    subName: 'BOUNCY & FIRM EYE SLEEPING MASK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6c6ulTM8-PeQotHX45h7y1xbt1CvKsgUxpgpdnV5c7tT2j1qgWQdfWgUN5B9mGqJRrhHvy5yaYXwwHgoJgE_kZjMatFT4EB0vjlwGPbWkxcILO1Y3yROr9HEZazLYVmM_-g2c0SQ8yJPjipYLBIC52TsAI4kJdU3QC8VGFHI88N5MhqoG40ckpMIq9RVlBbaZXkUOfC1gNgqYQtuOzJxDyz8qBR9Hv1uNoYpPQteE76iyAZ-9zmtg58l5Acvw03fEjzZ5VRwnL8',
    tags: ['#Firming', '#EyeMask'],
    category: 'skincare',
    price: '$32.00'
  },
  {
    id: '4',
    name: 'Water Bank Blue Sleeping Mask',
    subName: 'WATER BANK BLUE SLEEPING MASK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBQq4X_gzTlQcWlnbHJSSqHg6la3rthbY9mdy9YbahZA6NJn8OT85Z2pqFe95wl6Ef80e6igcBEqtzd_wWsAjzgaAIaixn8IAFD9T60c85qTuC5-UDoK5dOsQfyOHYy-dHbOtMVNeOdtkc8NiqkUOKiDqAQsv1qMMWJr-XoZQ_muEOhP_t3N3fAXGCqXnFEQ2R1ZadvBZ6K_NHWlNTjNM4ap_vhhPPHTdsCrLRZbCVdbvLc4uH2j45UFAORrWpq71SE2Spxf1DYp4',
    tags: ['#Hydration', '#Overnight'],
    category: 'skincare',
    price: '$30.00'
  },
  {
    id: '5',
    name: 'Neo Cushion Matte',
    subName: 'NEO CUSHION MATTE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_G59pP8mhlsMkqAKW6vr3n3ZDfUh17Qjdg0yxNg91PVENjmLzCisye7Fd4y_rOwGO3dYZ4ZyT-c0g0dMBfN12bf911BDfRIxrCacN-2y2yF2PoK02hpTi1Vh8OuOIier4yNle5Rwquti6OwVoTGD-3mbg1IyWRbELasIeHxDsxmGqkqfF8o4G7JRr5YiGmGqeGEw7cMXdlEbN_oCEX7M078ErGUqNEj2LJ8dNIOjxB4ZgHTtSOgot9ISfy-Suwywos7u-BRQDUY',
    tags: ['#MatteFinish', '#LongWear'],
    category: 'makeup',
    price: '$45.00'
  },
  {
    id: '6',
    name: 'Layering Lip Bar',
    subName: 'LAYERING LIP BAR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzHEggg6lLVAf9NzthjIhtd72rDZ1tUd-VYfr_7UrStFghH5YswaB-jLgxvLIhOReJEBu5tvyFt_HAQsB_BUCTL4PCg11VC6qbQnu0O3RpXQgyoPqMSWOYYF-psxfIgkaec0f3BV_HrfcJZd0xarMO1GT_ehBH4Hbsjzd34DOADkK2Xvma2K6y9ChwHIkEkouQzBYT8axSSVoF3eCUjCGaUmVX7PweHdjonyj5OXTTsuoXzFSoBHx9nSxthcJFX7vUERjh1UnWocU',
    tags: ['#GradientLip', '#Volume'],
    category: 'makeup',
    price: '$28.00'
  },
  {
    id: '7',
    name: 'Radian-C Cream',
    subName: 'RADIAN-C CREAM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxfNEoQEJ24cw7rG7x6k1Hhgs-awzxo6ijHWU3olg8TcvXBYTrL92jFpKiGfup0c8iLYZ-QgpmqtNVCcW222hcsHDCWyEu8Y0dtNe5uB9IXPx8bbx29Rs-G1yOoKDKQeK06ysNbcYv4yJQlMOJl8v_paiL_ZciERpSy_ym9Me4QCtv0ytDAQ9Hiu6-dUA81gATfhWRMGVVf2wtf40loGCTMSlcRyadOv88MVPZD5Oo2co4lx9VyvZRYp6K76fXm1JxR7mpyQsKGw4',
    tags: ['#VitaminC', '#Brightening'],
    category: 'skincare',
    price: '$42.00'
  },
  {
    id: '8',
    name: 'Water Bank Blue Hyaluronic Serum',
    subName: 'WATER BANK BLUE SERUM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM',
    tags: ['#Hydration', '#Serum'],
    category: 'skincare',
    price: '$45.00'
  },
  {
    id: '9',
    name: 'Skin Veil Base',
    subName: 'SKIN VEIL BASE EX',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6c6ulTM8-PeQotHX45h7y1xbt1CvKsgUxpgpdnV5c7tT2j1qgWQdfWgUN5B9mGqJRrhHvy5yaYXwwHgoJgE_kZjMatFT4EB0vjlwGPbWkxcILO1Y3yROr9HEZazLYVmM_-g2c0SQ8yJPjipYLBIC52TsAI4kJdU3QC8VGFHI88N5MhqoG40ckpMIq9RVlBbaZXkUOfC1gNgqYQtuOzJxDyz8qBR9Hv1uNoYpPQteE76iyAZ-9zmtg58l5Acvw03fEjzZ5VRwnL8',
    tags: ['#ToneUp', '#Base'],
    category: 'makeup',
    price: '$34.00'
  },
  {
    id: '10',
    name: 'Neo Foundation Glow',
    subName: 'NEO FOUNDATION GLOW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBQq4X_gzTlQcWlnbHJSSqHg6la3rthbY9mdy9YbahZA6NJn8OT85Z2pqFe95wl6Ef80e6igcBEqtzd_wWsAjzgaAIaixn8IAFD9T60c85qTuC5-UDoK5dOsQfyOHYy-dHbOtMVNeOdtkc8NiqkUOKiDqAQsv1qMMWJr-XoZQ_muEOhP_t3N3fAXGCqXnFEQ2R1ZadvBZ6K_NHWlNTjNM4ap_vhhPPHTdsCrLRZbCVdbvLc4uH2j45UFAORrWpq71SE2Spxf1DYp4',
    tags: ['#GlowFinish', '#Foundation'],
    category: 'makeup',
    price: '$48.00'
  },
  {
    id: '11',
    name: 'Lip Sleeping Mask EX',
    subName: 'LIP SLEEPING MASK EX',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3PsgYbLxzryUpkd6AiewP0x2WfviqyNoCT8uouZq9wbWeYJkS15Q5VpzZrigp-DGQ1hvchNB5PlaxjfTzCgwr5DYgNvdBA9F9ON4vkHRxgO_nlu8Sk_z13rxIzlb7l5gx7LxxTOzj8xAjjWMU-_PUQsh8tzIskiO55q3wqMKb4iQnjT3jcfWV_R_hrMYKM9JfKoFiYlj9f-5kDUxDYYjYG_-X-T289vjjIZQ_4OU3NbBkI9vhuJ3mRqRG8aghL1UgrMpR33EhO0s',
    tags: ['#Berry', '#LipCare'],
    category: 'skincare',
    price: '$24.00'
  },
  {
    id: '12',
    name: 'Cream Skin Refiner',
    subName: 'CREAM SKIN REFINER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQgpwHbqIpT73UFaUXNUXD3EEUoXOM3wyQYtVfDsA8VzCovpnbhcCOkMLZU91b9ypMyERgctgUmizWGW_wysYQsjtR8_VrNYKTR3SbzfLG0EmTebkUG7tttFqyp-7EsdeYXadUosSR5nWRYaVtEkp8xHgKwbVocW8evNn6R-YWpGgUvvRg1p6o93f4pGg5WzCxBzgN0bAtWUM5i8-MpBq6duUI7pAWBEfQXEB7u9uexx110bv4x5Duucj39TDY2MRQmUKDXXqldfQ',
    tags: ['#Moisturizing', '#Toner'],
    category: 'skincare',
    price: '$36.00'
  }
];

export const EVENTS_DATA: Event[] = [
  {
    id: '1',
    title: 'Sante Pop-up Store in Seongsu',
    date: '2023.10.15 - 2023.10.30',
    desc: 'Experience our new Bouncy & Firm line in real life. Free samples for all visitors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYgkRuhz2SX-go9ITCmfmYXYU4jI7nxa-cDiQvPvMR__1ZvCCDeI6W3gkmfgnO9csbHdAqR6KfftZXGaVyGoHfhu_vzIK4Jq1NXbyXGWOcEpQzZoeqoLZLCk2be5EFKMHFeUn_JirVDDh2VAX1mWyHlcSgHaMqX_SJQkFIXMxITRm3oXfvbBEOyH0qIh2hwj8DYo6zFP_Zl3QrOEpnRBKg5lXmVfWxVwcFs01OFS0x9Xk6sL8LG9Pz7muAnzfdpILKUl_XE_iZhM',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Virtual Skin Analysis Workshop',
    date: '2023.11.05',
    desc: 'Join our expert dermatologists for a live session on understanding your skin barrier.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxfNEoQEJ24cw7rG7x6k1Hhgs-awzxo6ijHWU3olg8TcvXBYTrL92jFpKiGfup0c8iLYZ-QgpmqtNVCcW222hcsHDCWyEu8Y0dtNe5uB9IXPx8bbx29Rs-G1yOoKDKQeK06ysNbcYv4yJQlMOJl8v_paiL_ZciERpSy_ym9Me4QCtv0ytDAQ9Hiu6-dUA81gATfhWRMGVVf2wtf40loGCTMSlcRyadOv88MVPZD5Oo2co4lx9VyvZRYp6K76fXm1JxR7mpyQsKGw4',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Summer Glow Masterclass',
    date: '2023.07.20',
    desc: 'Learn how to achieve the perfect glass skin look for the summer heat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6c6ulTM8-PeQotHX45h7y1xbt1CvKsgUxpgpdnV5c7tT2j1qgWQdfWgUN5B9mGqJRrhHvy5yaYXwwHgoJgE_kZjMatFT4EB0vjlwGPbWkxcILO1Y3yROr9HEZazLYVmM_-g2c0SQ8yJPjipYLBIC52TsAI4kJdU3QC8VGFHI88N5MhqoG40ckpMIq9RVlBbaZXkUOfC1gNgqYQtuOzJxDyz8qBR9Hv1uNoYpPQteE76iyAZ-9zmtg58l5Acvw03fEjzZ5VRwnL8',
    status: 'past'
  }
];
