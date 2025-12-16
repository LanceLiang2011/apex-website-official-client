import type { Course } from "./types";

export const courses: Course[] = [
  // UCAN Courses - Categories/Overviews (matching navigation)
  {
    id: "ucan-middle-high",
    slug: "middle-high-improvement",
    centerId: "ucan",
    name: {
      zh: "初高中课程提高",
      en: "Middle/High School Improvement",
    },
    shortDescription: {
      zh: "全面覆盖初高中各学科，查漏补缺，巩固基础，提升校内成绩。",
      en: "Comprehensive coverage of middle and high school subjects, filling gaps, solidifying foundations, and improving school grades.",
    },
    level: { zh: "综合", en: "Comprehensive" },
    tags: [{ zh: "校内同步", en: "School Sync" }],
  },
  {
    id: "ucan-ap-overview",
    slug: "ap-courses",
    centerId: "ucan",
    name: {
      zh: "AP 课程系列",
      en: "AP Courses Series",
    },
    shortDescription: {
      zh: "提供微积分、物理、化学、经济等热门 AP 科目辅导，冲刺 5 分。",
      en: "Tutoring for popular AP subjects like Calculus, Physics, Chemistry, Economics, aiming for a score of 5.",
    },
    level: { zh: "进阶", en: "Advanced" },
    tags: [{ zh: "AP", en: "AP" }],
  },
  {
    id: "ucan-ssat-sat",
    slug: "ssat-sat",
    centerId: "ucan",
    name: {
      zh: "SSAT / SAT 标化备考",
      en: "SSAT / SAT Preparation",
    },
    shortDescription: {
      zh: "系统性的标化考试培训体系，从词汇积累到真题演练，全方位提分。",
      en: "Systematic standardized test training system, from vocabulary accumulation to past paper practice, comprehensively improving scores.",
    },
    level: { zh: "标化", en: "Standardized Test" },
    tags: [
      { zh: "SAT", en: "SAT" },
      { zh: "SSAT", en: "SSAT" },
    ],
  },
  {
    id: "ucan-competitions",
    slug: "competitions",
    centerId: "ucan",
    name: {
      zh: "国际竞赛辅导",
      en: "International Competitions",
    },
    shortDescription: {
      zh: "AMC、物理碗、USACO 等各类国际竞赛辅导，提升学术背景。",
      en: "Tutoring for various international competitions like AMC, Physics Bowl, USACO, enhancing academic background.",
    },
    level: { zh: "竞赛", en: "Competition" },
    tags: [{ zh: "竞赛", en: "Competition" }],
  },
  {
    id: "ucan-critical-thinking",
    slug: "critical-thinking",
    centerId: "ucan",
    name: {
      zh: "思维训练开发",
      en: "Critical Thinking Development",
    },
    shortDescription: {
      zh: "培养逻辑思维、批判性思维和创新能力，为未来学术研究打下基础。",
      en: "Cultivate logical thinking, critical thinking, and innovation capabilities, laying the foundation for future academic research.",
    },
    level: { zh: "素养", en: "Literacy" },
    tags: [{ zh: "思维训练", en: "Critical Thinking" }],
  },

  // Simple Courses
  {
    id: "simple-toefl",
    slug: "toefl-basic",
    centerId: "simple",
    name: {
      zh: "托福基础班",
      en: "TOEFL Foundation",
    },
    shortDescription: {
      zh: "夯实英语基础，全面提升听说读写能力，为托福考试做好准备。",
      en: "Solidify English foundation, comprehensively improve listening, speaking, reading, and writing skills, preparing for the TOEFL exam.",
    },
    level: {
      zh: "入门",
      en: "Beginner",
    },
    tags: [
      { zh: "托福", en: "TOEFL" },
      { zh: "语言培训", en: "Language Training" },
    ],
  },
  {
    id: "simple-ielts",
    slug: "ielts-advanced",
    centerId: "simple",
    name: {
      zh: "雅思高分班",
      en: "IELTS Advanced",
    },
    shortDescription: {
      zh: "针对雅思考试技巧进行深度解析，模拟实战，冲刺高分。",
      en: "In-depth analysis of IELTS exam techniques, mock exams, aiming for high scores.",
    },
    level: {
      zh: "进阶",
      en: "Advanced",
    },
    tags: [
      { zh: "雅思", en: "IELTS" },
      { zh: "语言培训", en: "Language Training" },
    ],
  },
  // Rise Courses
  {
    id: "rise-planning-us",
    slug: "us-college-planning",
    centerId: "rise",
    name: {
      zh: "美国本科升学规划",
      en: "US Undergraduate Planning",
    },
    shortDescription: {
      zh: "从9年级开始的长线规划，打造独特的申请形象，冲击藤校/Top 30。",
      en: "Long-term planning starting from 9th grade, creating a unique applicant profile, aiming for Ivy League/Top 30.",
    },
    level: {
      zh: "全阶段",
      en: "All Stages",
    },
    tags: [
      { zh: "升学规划", en: "College Planning" },
      { zh: "美国", en: "USA" },
    ],
  },
  {
    id: "rise-planning-uk",
    slug: "uk-college-planning",
    centerId: "rise",
    name: {
      zh: "英国G5名校申请",
      en: "UK G5 Application",
    },
    shortDescription: {
      zh: "专注于英国顶尖名校申请，文书指导与面试培训。",
      en: "Focus on top UK university applications, essay guidance, and interview training.",
    },
    level: {
      zh: "全阶段",
      en: "All Stages",
    },
    tags: [
      { zh: "升学规划", en: "College Planning" },
      { zh: "英国", en: "UK" },
    ],
  },
];
