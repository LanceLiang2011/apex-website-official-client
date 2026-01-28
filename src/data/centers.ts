import type { Center } from './types';

export const centers: Center[] = [
  {
    id: 'ucan',
    slug: 'ucan',
    name: {
      zh: '优冠学术辅导中心',
      en: 'UCAN Tutoring Center'
    },
    slogan: {
      zh: '专注学术提升，成就名校梦想',
      en: 'Focus on Academic Excellence, Achieve Your Dream School'
    },
    description: {
      zh: '优冠学术辅导中心致力于为学生提供高质量的学术辅导课程，涵盖初高中全科辅导、AP/IB/A-Level国际课程辅导以及各类国际竞赛培训。',
      en: 'UCAN Tutoring Center is dedicated to providing high-quality academic tutoring, covering middle and high school subjects, AP/IB/A-Level international curricula, and various international competition training.'
    },
    courses: ['ucan-ap-calc', 'ucan-sat', 'ucan-competition-math'],
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'simple',
    slug: 'simple-language',
    name: {
      zh: '简言语言培训中心',
      en: 'Simple Language Training Center'
    },
    slogan: {
      zh: '语言连接世界，沟通创造未来',
      en: 'Language Connects the World, Communication Creates the Future'
    },
    description: {
      zh: '简言语言培训中心提供专业的语言培训服务，包括托福、雅思、思培等标化考试培训，以及英语口语、写作等实用技能提升课程。',
      en: 'Simple Language Training Center offers professional language training services, including standardized test prep for TOEFL, IELTS, CELPIP, as well as practical skills improvement in English speaking and writing.'
    },
    courses: ['simple-toefl', 'simple-ielts'],
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'rise',
    slug: 'rise',
    name: {
      zh: '瑞思升学规划中心',
      en: 'Rise Academic Planning Center'
    },
    slogan: {
      zh: '科学规划，赢在起点',
      en: 'Scientific Planning, Win at the Starting Line'
    },
    description: {
      zh: '瑞思升学规划中心为学生提供全方位的升学规划服务，包括选课指导、背景提升、文书润色及大学申请全程跟踪。',
      en: 'Rise Academic Planning Center provides comprehensive college planning services, including course selection guidance, background enhancement, essay polishing, and full-process university application tracking.'
    },
    courses: ['rise-planning-us', 'rise-planning-uk'],
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop'
  }
];
