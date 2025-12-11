import type { TranslatedText } from './types';

/**
 * Centralized Content Management System
 * 
 * This file contains all static content that appears across the website.
 * It's designed to be easily replaced by a CMS in the future.
 * 
 * Structure:
 * - home: Homepage specific content
 * - pages: Individual page content (about, education-info, etc.)
 * - common: Shared content across multiple pages
 * - ui: UI labels, buttons, and navigation text
 * - contact: Contact information
 */

export const content = {
  // ==================== HOME PAGE ====================
  home: {
    hero: {
      slides: [
        {
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
          title: {
            zh: '开启您的名校之旅',
            en: 'Start Your Journey to Top Universities'
          },
          subtitle: {
            zh: '专业的学术辅导与升学规划，助力学子圆梦。',
            en: 'Professional academic tutoring & college planning to help students achieve their dreams.'
          },
          cta: {
            zh: '了解课程',
            en: 'View Courses'
          },
          link: '/ucan'
        },
        {
          image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
          title: {
            zh: '语言连接世界',
            en: 'Language Connects the World'
          },
          subtitle: {
            zh: '托福、雅思、多邻国全方位培训，沟通无障碍。',
            en: 'Comprehensive training for TOEFL, IELTS, Duolingo for barrier-free communication.'
          },
          cta: {
            zh: '查看详情',
            en: 'Learn More'
          },
          link: '/simple-language'
        }
      ]
    },
    about: {
      title: { zh: '关于我们', en: 'About Us' },
      subtitle: { zh: '专注教育，成就未来', en: 'Focus on Education, Achieve the Future' },
      description: {
        zh: 'Apex Education 致力于为学生提供最优质的国际教育资源。我们拥有经验丰富的师资团队，科学的课程体系，以及个性化的升学规划服务。无论是标化考试提分，还是名校申请指导，我们都是您最值得信赖的伙伴。',
        en: 'Apex Education is dedicated to providing the highest quality international education resources for students. We have an experienced team of teachers, a scientific curriculum system, and personalized college planning services. Whether it is standardized test score improvement or top university application guidance, we are your most trustworthy partner.'
      },
      buttonText: { zh: '了解更多', en: 'Read More' },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
    },
    centers: {
      heading: { zh: '我们的中心', en: 'Our Centers' },
      subheading: {
        zh: '三大专业中心，为您提供全方位的教育服务',
        en: 'Three professional centers providing comprehensive education services for you'
      }
    },
    tutors: {
      heading: { zh: '师资队伍', en: 'Our Tutors' },
      subheading: { zh: '专业的教育团队', en: 'Professional Teaching Team' },
      viewDetails: { zh: '查看详情', en: 'See Details' },
      list: [
        {
          name: { zh: 'Ms. Sarah Johnson', en: 'Ms. Sarah Johnson' },
          role: { zh: '高级英语讲师', en: 'Senior English Instructor' },
          description: { 
            zh: '拥有剑桥大学英语文学硕士学位，10年国际学校教学经验，擅长雅思、托福备考指导。', 
            en: 'MA in English Literature from Cambridge University. 10 years of teaching experience in international schools, specializing in IELTS and TOEFL preparation.' 
          },
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
        },
        {
          name: { zh: 'Mr. David Chen', en: 'Mr. David Chen' },
          role: { zh: '数学/物理竞赛教练', en: 'Math/Physics Contest Coach' },
          description: { 
            zh: '北京大学物理系毕业，曾辅导多名学生获得AMC及物理碗金奖，教学风格严谨风趣。', 
            en: 'Graduated from Physics Department of Peking University. Coached multiple students to win Gold Awards in AMC and Physics Bowl. Rigorous yet humorous teaching style.' 
          },
          image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop'
        },
        {
          name: { zh: 'Dr. Emily Wang', en: 'Dr. Emily Wang' },
          role: { zh: '升学规划总监', en: 'Director of College Counseling' },
          description: { 
            zh: '哥伦比亚大学教育学博士，深谙美国名校申请流程，成功帮助数百位学生进入常春藤盟校。', 
            en: 'Ed.D. from Columbia University. Expert in US top university application process. Successfully helped hundreds of students enter Ivy League schools.' 
          },
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
        },
        {
          name: { zh: 'Mr. Michael Brown', en: 'Mr. Michael Brown' },
          role: { zh: 'SAT/ACT 标化讲师', en: 'SAT/ACT Instructor' },
          description: { 
            zh: '美国本土资深教师，ETS认证培训师，拥有独特的阅读写作教学法，帮助学生快速提分。', 
            en: 'Native senior teacher from the US, ETS certified trainer. Has unique teaching methods for reading and writing, helping students improve scores quickly.' 
          },
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
        }
      ]
    },
    whyChooseUs: {
      heading: { zh: 'Apex 的优势', en: 'The Apex Difference' },
      subText: { 
        zh: '十余年来，我们致力于为学生提供最优质的教育服务，赢得了广泛的信任与好评。',
        en: "For over a decade, we've been dedicated to providing top-quality education services, earning widespread trust and acclaim."
      },
      features: [
        {
          title: { zh: '顶尖师资团队', en: 'Top-Tier Faculty' },
          description: { 
            zh: '来自世界名校的精英导师，拥有丰富的教学经验和独特的教育理念。',
            en: 'Elite tutors from world-renowned universities with extensive teaching experience.'
          }
        },
        {
          title: { zh: '个性化定制方案', en: 'Personalized Plans' },
          description: { 
            zh: '拒绝流水线式教学，为每一位学生量身打造专属的升学规划路线。',
            en: 'Tailor-made admission plans for every student, rejecting assembly-line teaching.'
          }
        },
        {
          title: { zh: '卓越的升学成果', en: 'Proven Results' },
          description: { 
            zh: '累计帮助数千名学子成功录取哈佛、耶鲁、牛津、剑桥等世界顶尖名校。',
            en: 'Helped thousands of students successfully admit to Ivy League and G5 universities.'
          }
        },
        {
          title: { zh: '全方位全程陪伴', en: 'Holistic Support' },
          description: { 
            zh: '从学术辅导到文书润色，从背景提升到面试指导，我们全程陪伴左右。',
            en: 'From academic tutoring to essay editing, we are with you every step of the way.'
          }
        }
      ]
    },
    blog: {
      heading: { zh: '最新资讯', en: 'Latest News' },
      subheading: {
        zh: '关注教育动态，把握升学先机',
        en: 'Stay updated with education news and admission opportunities'
      },
      viewMoreText: { zh: '查看更多', en: 'View More' }
    }
  },

  // ==================== ABOUT PAGE ====================
  pages: {
    about: {
      hero: {
        title: { zh: '关于我们', en: 'About Us' },
        subtitle: { zh: '专注教育，成就未来', en: 'Focus on Education, Achieve the Future' },
        backgroundImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop'
      },
      mission: {
        heading: { zh: '我们的使命', en: 'Our Mission' },
        content: {
          zh: 'Apex Education 成立于2010年，致力于为中国学生提供最优质的国际教育资源。我们的使命是通过科学的规划和专业的辅导，帮助每一位学生发现自己的潜力，实现进入世界名校的梦想。',
          en: 'Founded in 2010, Apex Education is dedicated to providing the highest quality international education resources for Chinese students. Our mission is to help every student discover their potential and achieve their dream of entering top universities through scientific planning and professional tutoring.'
        }
      },
      advantages: {
        heading: { zh: '我们的优势', en: 'Our Advantages' },
        items: [
          {
            title: { zh: '顶尖师资', en: 'Top Faculty' },
            description: {
              zh: '来自哈佛、耶鲁、牛津等名校的精英导师团队。',
              en: 'Elite tutor team from Harvard, Yale, Oxford, etc.'
            }
          },
          {
            title: { zh: '个性化定制', en: 'Personalized Customization' },
            description: {
              zh: '根据学生特点量身定制升学方案。',
              en: 'Tailor-made admission plans based on student characteristics.'
            }
          },
          {
            title: { zh: '全程陪伴', en: 'Full Process Companionship' },
            description: {
              zh: '从规划到申请，提供全方位的指导与支持。',
              en: 'Comprehensive guidance and support from planning to application.'
            }
          },
          {
            title: { zh: '卓越成果', en: 'Excellent Results' },
            description: {
              zh: '累计帮助数千名学子进入梦想学府。',
              en: 'Helped thousands of students enter their dream universities.'
            }
          }
        ]
      },
      history: {
        heading: { zh: '发展历程', en: 'History' },
        milestones: [
          {
            year: '2010',
            title: { zh: '机构成立', en: 'Founded' },
            description: {
              zh: 'Apex Education 在上海成立。',
              en: 'Apex Education was founded in Shanghai.'
            }
          },
          {
            year: '2015',
            title: { zh: '拓展业务', en: 'Expansion' },
            description: {
              zh: '开设优冠学术辅导中心，专注于国际课程辅导。',
              en: 'Opened UCAN Tutoring Center, focusing on international curriculum tutoring.'
            }
          },
          {
            year: '2018',
            title: { zh: '全面升级', en: 'Upgrade' },
            description: {
              zh: '成立瑞思升学规划中心，提供一站式留学服务。',
              en: 'Established Rise Academic Planning Center, providing one-stop study abroad services.'
            }
          },
          {
            year: '2023',
            title: { zh: '新的征程', en: 'New Journey' },
            description: {
              zh: '累计服务学生超过5000人。',
              en: 'Served over 5000 students cumulatively.'
            }
          }
        ]
      }
    },

    educationInfo: {
      hero: {
        title: { zh: '教育信息', en: 'Education Info' },
        subtitle: {
          zh: '最新的教育资讯与备考干货',
          en: 'Latest Education News and Preparation Tips'
        }
      },
      sidebar: {
        searchPlaceholder: { zh: '搜索文章...', en: 'Search posts...' },
        categories: {
          heading: { zh: '分类', en: 'Categories' },
          items: [
            { zh: '学术辅导', en: 'Academic Tutoring', count: 12 },
            { zh: '语言培训', en: 'Language Training', count: 8 },
            { zh: '升学指导', en: 'Admission Guidance', count: 15 },
            { zh: '教育动态', en: 'Education News', count: 5 }
          ]
        },
        recentPosts: {
          heading: { zh: '最新文章', en: 'Recent Posts' }
        }
      },
      readMore: { zh: '阅读全文', en: 'Read More' }
    },

    post: {
      shareHeading: { zh: '分享文章', en: 'Share this post' },
      consultation: {
        heading: { zh: '预约免费咨询', en: 'Book Free Consultation' },
        description: {
          zh: '专业的升学规划顾问为您解答疑惑。',
          en: 'Professional admission consultants to answer your questions.'
        },
        buttonText: { zh: '立即预约', en: 'Book Now' }
      },
      placeholderNote: {
        zh: '（此处为文章正文内容占位符。实际开发中，这里将渲染 Markdown 内容或富文本内容。）',
        en: '(This is a placeholder for the article content. In actual development, Markdown or rich text content will be rendered here.)'
      },
      subheadingExample: { zh: '小标题示例', en: 'Subheading Example' }
    },

    center: {
      introHeading: { zh: '中心介绍', en: 'Center Introduction' },
      coursesHeading: { zh: '精选课程', en: 'Featured Courses' },
      viewDetailsButton: { zh: '了解详情', en: 'View Details' }
    },

    course: {
      inquireHeading: { zh: '咨询课程', en: 'Inquire' },
      inquireDescription: {
        zh: '联系我们获取详细课表和报价',
        en: 'Contact us for schedule and pricing'
      },
      contactButton: { zh: '立即咨询', en: 'Contact Now' },
      responseTime: { zh: '30分钟内回复', en: 'Response within 30 mins' },
      overviewHeading: { zh: '课程介绍', en: 'Course Overview' },
      curriculumHeading: { zh: '课程大纲', en: 'Curriculum' },
      targetAudienceHeading: { zh: '适合人群', en: 'Target Audience' },
      centerHeading: { zh: '授课中心', en: 'Center' },
      contactHeading: { zh: '联系方式', en: 'Contact' },
      viewCenterPage: { zh: '查看中心主页 →', en: 'View Center Page →' },
      coursesCount: { zh: '门课程', en: 'Courses' },
      defaultDescription: {
        zh: '本课程旨在帮助学生掌握核心知识点，通过系统的训练和实战演练，提升学术能力和考试成绩。我们的专业教师团队将根据学生的具体情况，制定个性化的学习计划。',
        en: 'This course aims to help students master core knowledge points. Through systematic training and practical exercises, we improve academic ability and exam scores. Our professional teaching team will formulate personalized study plans based on the specific situation of students.'
      },
      curriculumPhase: { zh: '第 {i} 阶段：核心模块', en: 'Phase {i}: Core Module' },
      curriculumDescription: {
        zh: '深入讲解基础理论与解题技巧，配合大量真题练习。',
        en: 'In-depth explanation of basic theories and problem-solving techniques, combined with extensive past paper practice.'
      },
      targetAudienceItems: [
        { zh: '希望提升学术成绩的学生', en: 'Students wishing to improve academic grades' },
        { zh: '准备参加标化考试的学生', en: 'Students preparing for standardized tests' },
        { zh: '有志于申请名校的学生', en: 'Students aiming for top universities' },
        { zh: '需要系统性规划的学生', en: 'Students needing systematic planning' }
      ]
    }
  },

  // ==================== COMMON UI ELEMENTS ====================
  common: {
    navigation: {
      home: { zh: '首页', en: 'Home' },
      about: { zh: '关于我们', en: 'About Us' },
      centers: { zh: '旗下中心', en: 'Our Centers' },
      educationInfo: { zh: '教育信息', en: 'Education Info' },
      contact: { zh: '联系我们', en: 'Contact' }
    },
    buttons: {
      learnMore: { zh: '了解更多', en: 'Learn More' },
      viewDetails: { zh: '查看详情', en: 'View Details' },
      viewMore: { zh: '查看更多', en: 'View More' },
      viewAll: { zh: '查看所有', en: 'View All' },
      contactNow: { zh: '立即咨询', en: 'Contact Now' },
      bookNow: { zh: '立即预约', en: 'Book Now' },
      subscribe: { zh: '订阅', en: 'Subscribe' },
      enterCenter: { zh: '进入中心', en: 'Enter Center' },
      viewCenter: { zh: '进入中心', en: 'View Center' },
      readMore: { zh: '阅读全文', en: 'Read More' }
    },
    labels: {
      popularCourses: { zh: '热门课程', en: 'Popular Courses' },
      quickAccess: { zh: '课程直达', en: 'Quick Access' },
      search: { zh: '搜索', en: 'Search' },
      categories: { zh: '分类', en: 'Categories' },
      recentPosts: { zh: '最新文章', en: 'Recent Posts' },
      sharePost: { zh: '分享文章', en: 'Share this post' }
    },
    centerPlans: {
      planA: 'Plan A',
      planB: 'Plan B',
      planC: 'Plan C'
    }
  },

  // ==================== FOOTER ====================
  footer: {
    brandDescription: {
      zh: '致力于为学生提供全方位的国际教育解决方案，从语言培训到学术辅导，再到升学规划，助力每一位学子实现名校梦想。',
      en: 'Dedicated to providing comprehensive international education solutions for students, from language training to academic tutoring and college planning, helping every student achieve their dream school.'
    },
    addressHeading: { zh: '联系地址', en: 'Our Location' },
    hoursHeading: { zh: '营业时间', en: 'Opening Hours' },
    copyright: '© {year} Apex Education. All rights reserved.'
  },

  // ==================== QR FLOAT ====================
  qrFloat: {
    scanText: { zh: '扫码咨询', en: 'Scan to Chat' },
    subText: { zh: '添加顾问微信', en: 'Add WeChat' }
  },

  // ==================== CONTACT INFO ====================
  contact: {
    addressHeading: { zh: '地址与定位', en: 'Location' },
    hoursHeading: { zh: '营业时间', en: 'Opening Hours' },
    email: 'contact@apex-edu.com',
    wechat: 'apex-education',
    address: {
      zh: '30 Wertheim Ct #1, Richmond Hill, ON L4B 1B9, Canada',
      en: '30 Wertheim Ct #1, Richmond Hill, ON L4B 1B9, Canada'
    },
    openingHours: {
      days: { zh: '周一至周日', en: 'Monday - Sunday' },
      time: { zh: '10:00 - 18:00', en: '10:00 - 18:00' }
    }
  },
  // Service Process Steps for Rise Center
  serviceProcess: {
    heading: { zh: '一站式服务流程', en: 'One-Stop Service Process' },
    steps: [
      {
         id: 1,
         title: { zh: '前期咨询', en: 'Initial Consultation' },
         description: { zh: '掌握学生信息，了解留学意向', en: 'Assess student background & goals' },
         icon: 'chat'
      },
      {
         id: 2,
         title: { zh: '留学方案', en: 'Study Plan' },
         description: { zh: '院校专业分析，确定申请目标', en: 'Analyze options & set targets' },
         icon: 'document'
      },
      {
         id: 3,
         title: { zh: '申请材料', en: 'Materials Prep' },
         description: { zh: '收集、整理、翻译申请材料', en: 'Collect & translate documents' },
         icon: 'folder'
      },
      {
         id: 4,
         title: { zh: '提升建议', en: 'Enhancement' },
         description: { zh: 'GPA、语言能力、背景提升建议', en: 'GPA, Language & Background advice' },
         icon: 'bulb'
      },
      {
         id: 5,
         title: { zh: '文书制作', en: 'Essay Writing' },
         description: { zh: '文书素材头脑风暴及制作', en: 'Brainstorm & craft essays' },
         icon: 'edit'
      },
      {
         id: 6,
         title: { zh: '留学申请', en: 'Application' },
         description: { zh: '递交申请并跟踪申请进度', en: 'Submit & track status' },
         icon: 'send'
      },
      {
         id: 7,
         title: { zh: '面试指导', en: 'Interview Prep' },
         description: { zh: '分享面试经验及面试指导', en: 'Mock interviews & guidance' },
         icon: 'user'
      },
      {
         id: 8,
         title: { zh: '确认入读院校', en: 'Accept Offer' },
         description: { zh: 'offer分析，给出选择建议', en: 'Analyze offers & decide' },
         icon: 'check'
      },
      {
         id: 9,
         title: { zh: '签证申请', en: 'Visa Application' },
         description: { zh: '收集签证材料进行申请并跟踪进度', en: 'Prepare & submit visa app' },
         icon: 'passport'
      },
      {
         id: 10,
         title: { zh: '行前准备指导', en: 'Pre-departure' },
         description: { zh: '协助申请海外住宿及接机服务', en: 'Accommodation & Pickup help' },
         icon: 'plane'
      },
      {
         id: 11,
         title: { zh: '入学注册指导', en: 'Registration' },
         description: { zh: '发送院校资料，协助入学注册', en: 'Enrollment guidance' },
         icon: 'degree'
      },
      {
         id: 12,
         title: { zh: '梦想起航', en: 'Dream Start' },
         description: { zh: '开启留学新篇章', en: 'Start your journey' },
         icon: 'rocket'
      }
    ]
  }
};

export default content;
