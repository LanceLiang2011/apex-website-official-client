import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    label: { zh: "首页", en: "Home" },
    href: "/",
  },
  {
    label: { zh: "优冠学术辅导中心", en: "UCAN Tutoring Center" },
    href: "#",
    children: [
      {
        label: { zh: "初高中课程提高", en: "Middle/High School Improvement" },
        href: "/ucan/courses/middle-high-improvement", // Placeholder slug
      },
      {
        label: { zh: "AP课程", en: "AP Courses" },
        href: "/ucan/courses/ap-courses",
      },
      {
        label: { zh: "SSAT/SAT课程", en: "SSAT/SAT Courses" },
        href: "/ucan/courses/ssat-sat",
      },
      {
        label: { zh: "竞赛课程", en: "Competition Courses" },
        href: "/ucan/courses/competitions",
      },
      {
        label: { zh: "思维训练开发课程", en: "Critical Thinking Development" },
        href: "/ucan/courses/critical-thinking",
      },
    ],
  },
  {
    label: { zh: "简言语言培训中心", en: "Simple Language Training Center" },
    href: "/simple-language",
  },
  {
    label: { zh: "瑞思升学规划中心", en: "Rise Academic Planning Center" },
    href: "/rise",
  },
  {
    label: { zh: "IELTS 考试中心", en: "IELTS Test Centre" },
    href: "/ielts-test-centre",
  },
  {
    label: { zh: "教育信息", en: "Education Info" },
    href: "/education-info",
  },
  {
    label: { zh: "关于我们", en: "About Us" },
    href: "/about",
  },
];
