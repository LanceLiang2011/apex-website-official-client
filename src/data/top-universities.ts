export interface TopUniversity {
  name: { zh: string; en: string };
  logo: string; // URL or path
  rank: number | string; // QS Ranking (string for 700+)
  qsColor?: string; // Optional custom color
  requirements: {
    zh: string[];
    en: string[];
  };
}

export const topUniversitiesData: Record<string, TopUniversity[]> = {
  uk: [
    {
      name: { zh: '伦敦帝国理工学院', en: 'Imperial College London' },
      logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/a/ad/Imperial_College_London_crest.svg/250px-Imperial_College_London_crest.svg.png',
      rank: 2,
      requirements: { zh: ['雅思：7.0 (6.5)', 'GPA：985/211 85%+'], en: ['IELTS: 7.0 (6.5)', 'GPA: 85%+'] }
    },
    {
      name: { zh: '牛津大学', en: 'University of Oxford' },
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/University_of_Oxford.svg/960px-University_of_Oxford.svg.png',
      rank: 3,
      requirements: { zh: ['雅思：7.5 (7.0)', 'GPA：985/211 90%+'], en: ['IELTS: 7.5 (7.0)', 'GPA: 90%+'] }
    },
    {
      name: { zh: '剑桥大学', en: 'University of Cambridge' },
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/University_of_Cambridge_logo.png',
      rank: 5,
      requirements: { zh: ['雅思：7.5 (7.0)', 'GPA：985/211 90%+'], en: ['IELTS: 7.5 (7.0)', 'GPA: 90%+'] }
    },
    {
      name: { zh: '伦敦大学学院', en: 'UCL' },
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Ucl_logo.png',
      rank: 9,
      requirements: { zh: ['雅思：6.5-7.5', 'GPA：85%+'], en: ['IELTS: 6.5-7.5', 'GPA: 85%+'] }
    },
    {
      name: { zh: '伦敦国王学院', en: 'King\'s College London' },
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kcl-logo.svg/250px-Kcl-logo.svg.png',
      rank: 40,
      requirements: { zh: ['雅思：7.0', 'GPA：88%+'], en: ['IELTS: 7.0', 'GPA: 88%+'] }
    },
    {
       name: { zh: '爱丁堡大学', en: 'University of Edinburgh' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/University_of_Edinburgh_c%C3%ADmer.svg/330px-University_of_Edinburgh_c%C3%ADmer.svg.png',
       rank: 27,
       requirements: { zh: ['雅思：6.5', 'GPA：80-85%'], en: ['IELTS: 6.5', 'GPA: 80-85%'] }
    },
    {
       name: { zh: '曼彻斯特大学', en: 'University of Manchester' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Shield_of_the_University_of_Manchester.svg/500px-Shield_of_the_University_of_Manchester.svg.png',
       rank: 34,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：80%+'], en: ['IELTS: 6.5', 'GPA: 80%+'] }
    },
    {
       name: { zh: '布里斯托大学', en: 'University of Bristol' },
       logo: 'https://download.logo.wine/logo/University_of_Bristol/University_of_Bristol-Logo.wine.png',
       rank: 54,
       requirements: { zh: ['雅思：6.5', 'GPA：78-85%'], en: ['IELTS: 6.5', 'GPA: 78-85%'] }
    }
  ],
  australia: [
    {
       name: { zh: '墨尔本大学', en: 'The University of Melbourne' },
       logo: 'https://iconlogovector.com/uploads/images/2025/08/lg-68b390757d642-University-of-Melbourne.webp',
       rank: 19,
       requirements: { zh: ['雅思：6.5 (6.0)', 'C9 75%+, 211 80%+'], en: ['IELTS: 6.5 (6.0)', 'GPA: 75-80%'] }
    },
    {
       name: { zh: '新南威尔士大学', en: 'UNSW Sydney' },
       logo: 'https://images.credly.com/size/200x200/images/0a6743b4-cec3-469a-bd76-8ca923841b7d/blob.png',
       rank: 20,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：72-88%'], en: ['IELTS: 6.5 (6.0)', 'GPA: 72-88%'] }
    },
    {
       name: { zh: '悉尼大学', en: 'The University of Sydney' },
       logo: 'https://www.cargowise.com/media/u0lj1jgi/uniofsyd-logo.png?width=200&v=1d8e40353e12b10',
       rank: 25,
       requirements: { zh: ['雅思：6.5-7.0', 'GPA：70-85%'], en: ['IELTS: 6.5-7.0', 'GPA: 70-85%'] }
    },
    {
       name: { zh: '澳大利亚国立大学', en: 'ANU' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Australian_National_University_%28emblem%29.svg/1200px-Australian_National_University_%28emblem%29.svg.png',
       rank: 32,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：80%+'], en: ['IELTS: 6.5 (6.0)', 'GPA: 80%+'] }
    },
    {
       name: { zh: '莫纳什大学', en: 'Monash University' },
       logo: 'https://brandlogos.net/wp-content/uploads/2024/06/monash_university-logo_brandlogos.net_bzf0m.png',
       rank: 36,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：70-80%'], en: ['IELTS: 6.5 (6.0)', 'GPA: 70-80%'] }
    },
    {
       name: { zh: '昆士兰大学', en: 'The University of Queensland' },
       logo: 'https://iconlogovector.com/uploads/images/2025/08/lg-68b41ccd8a27a-The-University-of.webp',
       rank: 42,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：70-85%'], en: ['IELTS: 6.5 (6.0)', 'GPA: 70-85%'] }
    },
    {
       name: { zh: '西澳大学', en: 'The University of Western Australia' },
       logo: 'https://i.namu.wiki/i/QjijyDMoTsS7_DCFAd556zzuIhu3TNPh5vLVO8Yx3WPrw69_uo0NPwTkaGRxXJK4Py43MAlmugCeRSlyjmshZA.webp',
       rank: 77,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：70%+'], en: ['IELTS: 6.5 (6.0)', 'GPA: 70%+'] }
    },
    {
       name: { zh: '阿德莱德大学', en: 'The University of Adelaide' },
       logo: 'https://www.drupal.org/files/styles/grid-4-2x/public/UoA_logo_col_vert.png?itok=N4Eflsf2',
       rank: 82,
       requirements: { zh: ['雅思：6.5 (6.0)', 'GPA：70-75%'], en: ['IELTS: 6.5 (6.0)', 'GPA: 70-75%'] }
    }
  ],
  newzealand: [
    {
       name: { zh: '奥克兰大学', en: 'The University of Auckland' },
       logo: 'https://cdn.prod.website-files.com/633eab2ca72ad5ddc75fd09a/64d291e409a362f85fbe68e4_about-uoa.png',
       rank: 65,
       requirements: { zh: ['雅思：6.0', 'GPA：70-80%'], en: ['IELTS: 6.0', 'GPA: 70-80%'] }
    },
    {
       name: { zh: '奥塔哥大学', en: 'University of Otago' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Arms_of_the_University_of_Otago.svg',
       rank: 197,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    },
     {
       name: { zh: '梅西大学', en: 'Massey University' },
       logo: 'https://www.eduopinions.com/wp-content/uploads/2022/09/MASSEY-UNIVERSITY-OF-NEW-ZEALAND.png',
       rank: 230,
       requirements: { zh: ['雅思：6.0', 'GPA：65-70%'], en: ['IELTS: 6.0', 'GPA: 65-70%'] }
    },
    {
       name: { zh: '惠灵顿维多利亚大学', en: 'Victoria University of Wellington' },
       logo: 'https://www.wgtn.ac.nz/__data/assets/image/0005/1754672/Full-logo-green.png',
       rank: 240,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    },
    {
       name: { zh: '坎特伯雷大学', en: 'University of Canterbury' },
       logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/f/f9/University_of_Canterbury_Logo.svg/1200px-University_of_Canterbury_Logo.svg.png',
       rank: 261,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    },
     {
       name: { zh: '怀卡托大学', en: 'University of Waikato' },
       logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/bd/University_of_Waikato_logo.svg/2560px-University_of_Waikato_logo.svg.png',
       rank: 281,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    },
     {
       name: { zh: '林肯大学', en: 'Lincoln University' },
       logo: 'https://ucarecdn.com/ff61b3a2-4c1c-4d1e-a1e3-c0380b25952f/',
       rank: 407,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    },
    {
       name: { zh: '奥克兰理工大学', en: 'AUT' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/AUT_old_logo.svg/2560px-AUT_old_logo.svg.png',
       rank: 410,
       requirements: { zh: ['雅思：6.0', 'GPA：70%'], en: ['IELTS: 6.0', 'GPA: 70%'] }
    }
  ],
  hk: [
    {
       name: { zh: '香港大学', en: 'The University of Hong Kong' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/University_of_Hong_Kong.svg/250px-University_of_Hong_Kong.svg.png',
       rank: 11,
       requirements: { zh: ['雅思：6.0+', '一本线+120'], en: ['IELTS: 6.0+', 'Gaokao: +120'] }
    },
    {
       name: { zh: '香港中文大学', en: 'CUHK' },
       logo: 'https://iconlogovector.com/uploads/images/2024/09/lg-66f5c69d17cec-CUHK-The-Chinese-University-of.webp',
       rank: 32,
       requirements: { zh: ['雅思：6.5+', '一本线+100'], en: ['IELTS: 6.5+', 'Gaokao: +100'] }
    },
    {
       name: { zh: '香港科技大学', en: 'HKUST' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/8/85/Hong_Kong_University_of_Science_and_Technology_symbol.svg',
       rank: 44,
       requirements: { zh: ['雅思：6.0+', '一本线+100'], en: ['IELTS: 6.0+', 'Gaokao: +100'] }
    },
    {
       name: { zh: '香港理工大学', en: 'PolyU' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Hong_Kong_Polytechnic_University_logo.svg/180px-Hong_Kong_Polytechnic_University_logo.svg.png',
       rank: 54,
       requirements: { zh: ['雅思：6.0+', '一本线+80'], en: ['IELTS: 6.0+', 'Gaokao: +80'] }
    },
    {
       name: { zh: '香港城市大学', en: 'CityU' },
       logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/44/City_University_of_Hong_Kong_%28logo%29.svg/2560px-City_University_of_Hong_Kong_%28logo%29.svg.png',
       rank: 63,
       requirements: { zh: ['雅思：6.5', '一本线+80'], en: ['IELTS: 6.5', 'Gaokao: +80'] }
    },
    {
       name: { zh: '香港浸会大学', en: 'HKBU' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Hong_Kong_Baptist_University_logo.svg',
       rank: 244,
       requirements: { zh: ['雅思：6.0', '一本线+50'], en: ['IELTS: 6.0', 'Gaokao: +50'] }
    },
    {
       name: { zh: '香港教育大学', en: 'EdUHK' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/EdUHK_seal.svg',
       rank: 530,
       requirements: { zh: ['雅思：6.0', '一本线'], en: ['IELTS: 6.0', 'Gaokao: Tier 1'] }
    },
    {
       name: { zh: '香港岭南大学', en: 'Lingnan University' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/LingnanUniversity_logo.svg/1200px-LingnanUniversity_logo.svg.png',
       rank: '700+',
       requirements: { zh: ['雅思：6.0', '一本线'], en: ['IELTS: 6.0', 'Gaokao: Tier 1'] }
    }
  ],
  us: [
    {
       name: { zh: '麻省理工学院', en: 'MIT' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
       rank: 1,
       requirements: { zh: ['托福：100+', 'SAT：1500+', '科研/竞赛强项'], en: ['TOEFL: 100+', 'SAT: 1500+', 'Strong ECs'] }
    },
    {
       name: { zh: '哈佛大学', en: 'Harvard University' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg',
       rank: 4,
       requirements: { zh: ['托福：110+', 'SAT：1520+', '全面发展/领袖力'], en: ['TOEFL: 110+', 'SAT: 1520+', 'Leadership'] }
    },
    {
       name: { zh: '斯坦福大学', en: 'Stanford University' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg',
       rank: 5,
       requirements: { zh: ['托福：100+', 'SAT：1500+', '创新/特长'], en: ['TOEFL: 100+', 'SAT: 1500+', 'Innovation'] }
    },
    {
       name: { zh: '加州大学伯克利分校', en: 'UC Berkeley' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg',
       rank: 10,
       requirements: { zh: ['托福：100+', 'GPA：3.8+', '文书极其重要'], en: ['TOEFL: 100+', 'GPA: 3.8+', 'Essays Critical'] }
    },
    {
       name: { zh: '康奈尔大学', en: 'Cornell University' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png',
       rank: 13,
       requirements: { zh: ['托福：100+', 'SAT：1450+', '学术匹配度'], en: ['TOEFL: 100+', 'SAT: 1450+', 'Academic Fit'] }
    },
    {
       name: { zh: '芝加哥大学', en: 'University of Chicago' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png',
       rank: 11,
       requirements: { zh: ['托福：100+', 'SAT：1500+', '文书思想深度'], en: ['TOEFL: 100+', 'SAT: 1500+', 'Intellectual Essays'] }
    },
    {
       name: { zh: '宾夕法尼亚大学', en: 'UPenn' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png',
       rank: 12,
       requirements: { zh: ['托福：100+', 'SAT：1500+', '职业/社会影响力'], en: ['TOEFL: 100+', 'SAT: 1500+', 'Social Impact'] }
    },
     {
       name: { zh: '纽约大学', en: 'NYU' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nyu_short_color.svg/2560px-Nyu_short_color.svg.png',
       rank: 39,
       requirements: { zh: ['托福：100+', 'SAT/ACT可选', '国际化视野'], en: ['TOEFL: 100+', 'SAT Opt', 'Global View'] }
    }
  ],
  canada: [
    {
       name: { zh: '麦吉尔大学', en: 'McGill University' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Mcgill_univ_ca_logo.png',
       rank: 27,
       requirements: { zh: ['雅思：6.5', 'GPA：85%+', '高考一本线'], en: ['IELTS: 6.5', 'GPA: 85%+', 'Gaokao Tier 1'] }
    },
    {
       name: { zh: '多伦多大学', en: 'University of Toronto' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/UofT_Wordmark.png',
       rank: 29,
       requirements: { zh: ['雅思：6.5', 'GPA：85%+', '高考一本线'], en: ['IELTS: 6.5', 'GPA: 85%+', 'Gaokao Tier 1'] }
    },
    {
       name: { zh: '英属哥伦比亚大学', en: 'UBC' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/UBC_logo.jpg',
       rank: 40,
       requirements: { zh: ['雅思：6.5', 'GPA：84%+', '高考一本线'], en: ['IELTS: 6.5', 'GPA: 84%+', 'Gaokao Tier 1'] }
    },
    {
       name: { zh: '阿尔伯塔大学', en: 'University of Alberta' },
       logo: 'https://www.ualberta.ca/en/toolkit/media-library/homepage-assets/ua_logo_green_rgb.png',
       rank: 94,
       requirements: { zh: ['雅思：6.5', 'GPA：80%+', '高考/会考'], en: ['IELTS: 6.5', 'GPA: 80%+', 'Gaokao/Huikao'] }
    },
    {
       name: { zh: '滑铁卢大学', en: 'University of Waterloo' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg',
       rank: 119,
       requirements: { zh: ['雅思：6.5-7.0', 'GPA：85%+', '数学竞赛加分'], en: ['IELTS: 6.5-7.0', 'GPA: 85%+', 'Math Contest'] }
    },
    {
       name: { zh: '西安大略大学', en: 'Western University' },
       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Western_ontario_univ_textlogo.svg/2560px-Western_ontario_univ_textlogo.svg.png',
       rank: 151,
       requirements: { zh: ['雅思：6.5', 'GPA：80%+', '商科AEO竞争'], en: ['IELTS: 6.5', 'GPA: 80%+', 'AEO Competitive'] }
    },
    {
       name: { zh: '蒙特利尔大学', en: 'Université de Montréal' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universite_de_Montreal_logo.svg/2560px-Universite_de_Montreal_logo.svg.png',
       rank: 168,
       requirements: { zh: ['法语B2', 'GPA：75%+', '主要法语教学'], en: ['French B2', 'GPA: 75%+', 'French Taught'] }
    },
    {
       name: { zh: '麦克马斯特大学', en: 'McMaster University' },
       logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/McMaster_University_logo.svg/1200px-McMaster_University_logo.svg.png',
       rank: 173,
       requirements: { zh: ['雅思：6.5', 'GPA：80%+', '工程/医科强'], en: ['IELTS: 6.5', 'GPA: 80%+', 'Eng/Med Strong'] }
    }
  ]
};

export const countryTabs = [
  { value: 'uk', label: { zh: '英国', en: 'UK' } },
  { value: 'australia', label: { zh: '澳洲', en: 'Australia' } },
  { value: 'newzealand', label: { zh: '新西兰', en: 'New Zealand' } },
  { value: 'hk', label: { zh: '中国香港', en: 'Hong Kong' } },
  { value: 'us', label: { zh: '美国', en: 'US' } },
  { value: 'canada', label: { zh: '加拿大', en: 'Canada' } }
];
