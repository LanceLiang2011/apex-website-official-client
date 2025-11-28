import type { Course } from './types';

export const courses: Course[] = [
  // UCAN Courses - Categories/Overviews (matching navigation)
  {
    id: 'ucan-middle-high',
    slug: 'middle-high-improvement',
    centerId: 'ucan',
    name: {
      zh: '初高中课程提高',
      en: 'Middle/High School Improvement'
    },
    shortDescription: {
      zh: '全面覆盖初高中各学科，查漏补缺，巩固基础，提升校内成绩。',
      en: 'Comprehensive coverage of middle and high school subjects, filling gaps, solidifying foundations, and improving school grades.'
    },
    level: { zh: '综合', en: 'Comprehensive' },
    tags: [{ zh: '校内同步', en: 'School Sync' }]
  },
  {
    id: 'ucan-ap-overview',
    slug: 'ap-courses',
    centerId: 'ucan',
    name: {
      zh: 'AP 课程系列',
      en: 'AP Courses Series'
    },
    shortDescription: {
      zh: '提供微积分、物理、化学、经济等热门 AP 科目辅导，冲刺 5 分。',
      en: 'Tutoring for popular AP subjects like Calculus, Physics, Chemistry, Economics, aiming for a score of 5.'
    },
    level: { zh: '进阶', en: 'Advanced' },
    tags: [{ zh: 'AP', en: 'AP' }]
  },
  {
    id: 'ucan-ssat-sat',
    slug: 'ssat-sat',
    centerId: 'ucan',
    name: {
      zh: 'SSAT / SAT 标化备考',
      en: 'SSAT / SAT Preparation'
    },
    shortDescription: {
      zh: '系统性的标化考试培训体系，从词汇积累到真题演练，全方位提分。',
      en: 'Systematic standardized test training system, from vocabulary accumulation to past paper practice, comprehensively improving scores.'
    },
    level: { zh: '标化', en: 'Standardized Test' },
    tags: [{ zh: 'SAT', en: 'SAT' }, { zh: 'SSAT', en: 'SSAT' }]
  },
  {
    id: 'ucan-competitions',
    slug: 'competitions',
    centerId: 'ucan',
    name: {
      zh: '国际竞赛辅导',
      en: 'International Competitions'
    },
    shortDescription: {
      zh: 'AMC、物理碗、USACO 等各类国际竞赛辅导，提升学术背景。',
      en: 'Tutoring for various international competitions like AMC, Physics Bowl, USACO, enhancing academic background.'
    },
    level: { zh: '竞赛', en: 'Competition' },
    tags: [{ zh: '竞赛', en: 'Competition' }]
  },
  {
    id: 'ucan-critical-thinking',
    slug: 'critical-thinking',
    centerId: 'ucan',
    name: {
      zh: '思维训练开发',
      en: 'Critical Thinking Development'
    },
    shortDescription: {
      zh: '培养逻辑思维、批判性思维和创新能力，为未来学术研究打下基础。',
      en: 'Cultivate logical thinking, critical thinking, and innovation capabilities, laying the foundation for future academic research.'
    },
    level: { zh: '素养', en: 'Literacy' },
    tags: [{ zh: '思维训练', en: 'Critical Thinking' }]
  },

  // UCAN Specific Courses (kept for detail)
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
    id: 'ucan-sat-intensive',
    slug: 'sat-prep', // Note: Navigation uses 'ssat-sat' for the category, this is a specific course
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
