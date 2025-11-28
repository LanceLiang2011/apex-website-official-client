import type { TranslatedText, Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    slug: '2024-us-college-trends',
    title: {
      zh: '2024年美国本科申请趋势解读',
      en: 'Analysis of 2024 US Undergraduate Application Trends'
    },
    excerpt: {
      zh: '随着标化可选政策的延续，美国大学申请竞争愈发激烈。本文将为您深度解析2024年申请季的最新趋势与应对策略。',
      en: 'With the continuation of test-optional policies, competition for US university applications is becoming increasingly fierce. This article analyzes the latest trends and strategies for the 2024 application season.'
    },
    content: {
      zh: '这里是文章的详细内容...',
      en: 'Here is the detailed content of the article...'
    },
    date: '2023-11-15',
    category: { zh: '升学指导', en: 'Admission Guidance' },
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    slug: 'how-to-prepare-toefl',
    title: {
      zh: '如何高效备考托福听力？',
      en: 'How to Efficiently Prepare for TOEFL Listening?'
    },
    excerpt: {
      zh: '托福听力是许多考生的痛点。本文分享了5个实用的听力训练技巧，帮助您在短时间内提升听力水平。',
      en: 'TOEFL listening is a pain point for many test takers. This article shares 5 practical listening training tips to help you improve your listening skills in a short time.'
    },
    content: {
      zh: '这里是文章的详细内容...',
      en: 'Here is the detailed content of the article...'
    },
    date: '2023-10-28',
    category: { zh: '语言培训', en: 'Language Training' },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    slug: 'ap-calculus-tips',
    title: {
      zh: 'AP微积分BC满分攻略',
      en: 'Tips for Getting a Perfect Score in AP Calculus BC'
    },
    excerpt: {
      zh: 'AP微积分BC涵盖了大量知识点。如何梳理知识体系，攻克难点？本文为您提供一份详细的备考指南。',
      en: 'AP Calculus BC covers a lot of knowledge points. How to organize the knowledge system and overcome difficulties? This article provides you with a detailed preparation guide.'
    },
    content: {
      zh: '这里是文章的详细内容...',
      en: 'Here is the detailed content of the article...'
    },
    date: '2023-09-10',
    category: { zh: '学术辅导', en: 'Academic Tutoring' },
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop'
  }
];
