import type { Course } from './types';

export const courses: Course[] = [
  // UCAN Courses
  {
    id: 'ucan-ap-calc',
    slug: 'ap-calculus',
    centerId: 'ucan',
    name: {
      zh: 'AP 微积分 BC',
      en: 'AP Calculus BC'
    },
    shortDescription: {
      zh: '深入理解微积分概念，备战 AP 考试，助力大学申请。',
      en: 'Deep understanding of calculus concepts, AP exam preparation, boosting college applications.'
    },
    level: {
      zh: '进阶',
      en: 'Advanced'
    },
    tags: [
      { zh: 'AP课程', en: 'AP Courses' },
      { zh: '数学', en: 'Math' }
    ]
  },
  {
    id: 'ucan-sat',
    slug: 'sat-prep',
    centerId: 'ucan',
    name: {
      zh: 'SAT 冲刺班',
      en: 'SAT Intensive Prep'
    },
    shortDescription: {
      zh: '针对 SAT 考试重点难点进行强化训练，快速提分。',
      en: 'Intensive training on SAT key difficulties to improve scores quickly.'
    },
    level: {
      zh: '中级',
      en: 'Intermediate'
    },
    tags: [
      { zh: '标化考试', en: 'Standardized Test' },
      { zh: 'SAT', en: 'SAT' }
    ]
  },
  {
    id: 'ucan-competition-math',
    slug: 'competition-math',
    centerId: 'ucan',
    name: {
      zh: 'AMC 10/12 数学竞赛',
      en: 'AMC 10/12 Math Competition'
    },
    shortDescription: {
      zh: '系统的竞赛思维训练，历年真题解析，冲击高分奖项。',
      en: 'Systematic competition thinking training, analysis of past papers, aiming for high scores and awards.'
    },
    level: {
      zh: '竞赛',
      en: 'Competition'
    },
    tags: [
      { zh: '竞赛课程', en: 'Competition' },
      { zh: '数学', en: 'Math' }
    ]
  },
  // Simple Courses
  {
    id: 'simple-toefl',
    slug: 'toefl-basic',
    centerId: 'simple',
    name: {
      zh: '托福基础班',
      en: 'TOEFL Foundation'
    },
    shortDescription: {
      zh: '夯实英语基础，全面提升听说读写能力，为托福考试做好准备。',
      en: 'Solidify English foundation, comprehensively improve listening, speaking, reading, and writing skills, preparing for the TOEFL exam.'
    },
    level: {
      zh: '入门',
      en: 'Beginner'
    },
    tags: [
      { zh: '托福', en: 'TOEFL' },
      { zh: '语言培训', en: 'Language Training' }
    ]
  },
  {
    id: 'simple-ielts',
    slug: 'ielts-advanced',
    centerId: 'simple',
    name: {
      zh: '雅思高分班',
      en: 'IELTS Advanced'
    },
    shortDescription: {
      zh: '针对雅思考试技巧进行深度解析，模拟实战，冲刺高分。',
      en: 'In-depth analysis of IELTS exam techniques, mock exams, aiming for high scores.'
    },
    level: {
      zh: '进阶',
      en: 'Advanced'
    },
    tags: [
      { zh: '雅思', en: 'IELTS' },
      { zh: '语言培训', en: 'Language Training' }
    ]
  },
  // Rise Courses
  {
    id: 'rise-planning-us',
    slug: 'us-college-planning',
    centerId: 'rise',
    name: {
      zh: '美国本科升学规划',
      en: 'US Undergraduate Planning'
    },
    shortDescription: {
      zh: '从9年级开始的长线规划，打造独特的申请形象，冲击藤校/Top 30。',
      en: 'Long-term planning starting from 9th grade, creating a unique applicant profile, aiming for Ivy League/Top 30.'
    },
    level: {
      zh: '全阶段',
      en: 'All Stages'
    },
    tags: [
      { zh: '升学规划', en: 'College Planning' },
      { zh: '美国', en: 'USA' }
    ]
  },
  {
    id: 'rise-planning-uk',
    slug: 'uk-college-planning',
    centerId: 'rise',
    name: {
      zh: '英国G5名校申请',
      en: 'UK G5 Application'
    },
    shortDescription: {
      zh: '专注于英国顶尖名校申请，文书指导与面试培训。',
      en: 'Focus on top UK university applications, essay guidance, and interview training.'
    },
    level: {
      zh: '全阶段',
      en: 'All Stages'
    },
    tags: [
      { zh: '升学规划', en: 'College Planning' },
      { zh: '英国', en: 'UK' }
    ]
  }
];
