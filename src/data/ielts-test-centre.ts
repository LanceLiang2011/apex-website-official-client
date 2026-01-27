import type { TranslatedText } from "./types";

export const ieltsTestCentreData = {
  hero: {
    slides: [
      {
        image: "/images/ielts/center.jpg",
        title: {
          zh: "官方授权 IELTS 考试中心",
          en: "Officially Authorized IELTS Test Centre",
        },
        subtitle: {
          zh: "提供舒适专业的考试环境，助您轻松应考",
          en: "Providing a comfortable and professional testing environment to help you succeed",
        },
        cta: {
          zh: "立即报名",
          en: "Register Now",
        },
      },
      {
        image: "/images/ielts/001.jpg",
        title: {
          zh: "便捷的考试预约",
          en: "Convenient Test Booking",
        },
        subtitle: {
          zh: "稳定的考位供应，灵活的考试时间",
          en: "Stable seat availability with flexible test dates",
        },
        cta: {
          zh: "立即报名",
          en: "Register Now",
        },
      },
      {
        image: "/images/ielts/005.jpg",
        title: {
          zh: "专业的考试服务",
          en: "Professional Test Services",
        },
        subtitle: {
          zh: "中文服务支持，交通便利",
          en: "Chinese language support with convenient transportation",
        },
        cta: {
          zh: "立即报名",
          en: "Register Now",
        },
      },
      {
        image: "/images/ielts/009.jpg",
        title: {
          zh: "优质的备考资源",
          en: "Quality Preparation Resources",
        },
        subtitle: {
          zh: "提供全面的备考材料和模考体验",
          en: "Comprehensive preparation materials and mock test experience",
        },
        cta: {
          zh: "立即报名",
          en: "Register Now",
        },
      },
    ],
    registerLink:
      "https://ielts.idp.com/book/IELTS?countryId=35&testCentreId=14181&testVenueId=5731&testCentreLocationId=4291&testSessionDate=02/07/2026%2012:00:00%20AM&lang=en&isSelt=false&restrictToSpecifiedDate=true&testmoduleid=2&ref=bxsearch",
  },

  introduction: {
    title: {
      zh: "关于 IELTS 考试",
      en: "About IELTS",
    },
    description: {
      zh: "雅思考试（IELTS）全称为国际英语语言测试系统，是全球广泛认可的英语能力测试。无论您是计划留学深造、移民海外，还是寻求专业发展，雅思成绩都是您语言能力的权威证明。考试全面评估听、说、读、写四项技能，帮助您展现真实的英语水平。",
      en: "The International English Language Testing System (IELTS) is a globally recognized English proficiency test. Whether you're planning to study abroad, immigrate, or advance your career, an IELTS score serves as authoritative proof of your language abilities. The test comprehensively assesses your listening, speaking, reading, and writing skills, helping you demonstrate your true English proficiency.",
    },
  },

  testTypes: {
    title: {
      zh: "考试类型",
      en: "Test Types",
    },
    types: [
      {
        icon: "academic",
        title: {
          zh: "学术类 (Academic)",
          en: "Academic (A)",
        },
        description: {
          zh: "适用于申请高等教育及专业注册",
          en: "For higher education and professional registration",
        },
        features: {
          zh: ["本科/研究生申请", "学术环境评估", "国际认可"],
          en: [
            "Undergraduate/Graduate applications",
            "Academic environment assessment",
            "International recognition",
          ],
        },
      },
      {
        icon: "general",
        title: {
          zh: "培训类 (General Training)",
          en: "General Training (G)",
        },
        description: {
          zh: "适用于移民、工作经验及培训项目",
          en: "For immigration, work experience, and training programs",
        },
        features: {
          zh: ["移民申请", "工作签证", "职业培训"],
          en: [
            "Immigration applications",
            "Work visas",
            "Professional training",
          ],
        },
      },
      {
        icon: "computer",
        title: {
          zh: "机考 (Computer-based)",
          en: "Computer-based",
        },
        description: {
          zh: "在电脑上完成考试，出分更快",
          en: "Complete test on computer with faster results",
        },
        features: {
          zh: ["3-5天出成绩", "考试时间灵活", "打字更便捷"],
          en: [
            "Results in 3-5 days",
            "Flexible test times",
            "Convenient typing",
          ],
        },
      },
      {
        icon: "paper",
        title: {
          zh: "纸笔考试 (Paper-based)",
          en: "Paper-based",
        },
        description: {
          zh: "传统纸笔作答方式",
          en: "Traditional paper-based test format",
        },
        features: {
          zh: ["传统考试形式", "手写作答", "每月多场考试"],
          en: [
            "Traditional format",
            "Handwritten answers",
            "Multiple tests monthly",
          ],
        },
      },
    ],
  },

  registrationVideo: {
    title: {
      zh: "报名流程",
      en: "Registration Process",
    },
    description: {
      zh: "观看官方视频，了解详细的考试报名步骤",
      en: "Watch the official video to learn the detailed registration steps",
    },
    videoUrl: "https://www.youtube.com/embed/oQQTj6DNCNg",
  },

  centreInfo: {
    title: {
      zh: "考点信息",
      en: "Test Centre Information",
    },
    address: {
      label: {
        zh: "考点地址",
        en: "Address",
      },
      value: "#1-30 Wertheim Ct, Richmond Hill, ON, L4B 1B9",
    },
    transportation: {
      title: {
        zh: "交通指引",
        en: "Transportation",
      },
      directions: [
        {
          zh: "地铁：从 Finch Station 乘坐 Viva Blue 直达 Wertheim Ct",
          en: "Subway: Take Viva Blue from Finch Station directly to Wertheim Ct",
        },
        {
          zh: "驾车：Highway 7 与 Weston Rd 交界处，提供免费停车位",
          en: "Driving: At Highway 7 and Weston Rd intersection, free parking available",
        },
        {
          zh: "公交：多条 YRT 公交线路可达，详见 YRT 官网",
          en: "Bus: Multiple YRT routes available, see YRT website for details",
        },
      ],
    },
    photos: [
      "/images/ielts/center.jpg",
      "/images/ielts/002.jpg",
      "/images/ielts/003.jpg",
      "/images/ielts/004.jpg",
      "/images/ielts/006.jpg",
      "/images/ielts/007.jpg",
    ],
  },

  advantages: {
    title: {
      zh: "考点优势",
      en: "Centre Advantages",
    },
    items: [
      {
        icon: "certificate",
        title: {
          zh: "官方授权",
          en: "Officially Authorized",
        },
        description: {
          zh: "IDP 官方授权考点，成绩全球认可",
          en: "IDP officially authorized, globally recognized results",
        },
      },
      {
        icon: "comfort",
        title: {
          zh: "舒适环境",
          en: "Comfortable Environment",
        },
        description: {
          zh: "宽敞明亮的考场，先进的设备设施",
          en: "Spacious and bright test rooms with advanced facilities",
        },
      },
      {
        icon: "location",
        title: {
          zh: "交通便利",
          en: "Convenient Location",
        },
        description: {
          zh: "地理位置优越，多种交通方式可达",
          en: "Prime location with multiple transportation options",
        },
      },
      {
        icon: "availability",
        title: {
          zh: "考位充足",
          en: "Stable Availability",
        },
        description: {
          zh: "每月多场考试，考位供应稳定",
          en: "Multiple tests monthly with stable seat availability",
        },
      },
      {
        icon: "support",
        title: {
          zh: "中文服务",
          en: "Chinese Support",
        },
        description: {
          zh: "提供中文咨询服务，沟通无障碍",
          en: "Chinese consultation services for barrier-free communication",
        },
      },
    ],
  },

  preparationResources: {
    title: {
      zh: "备考资源",
      en: "Preparation Resources",
    },
    sections: [
      {
        icon: "materials",
        title: {
          zh: "IELTS 备考资料",
          en: "IELTS Practice Materials",
        },
        description: {
          zh: "扫描二维码添加客服微信，免费获取官方备考资料",
          en: "Scan QR code to add customer service on WeChat and obtain official preparation materials",
        },
        qrImage: "/images/pr.jpeg",
      },
      {
        icon: "instructions",
        title: {
          zh: "考前须知",
          en: "Pre-test Instructions",
        },
        items: [
          {
            zh: "考试当天需携带有效身份证件（护照或身份证）",
            en: "Bring valid ID (passport or ID card) on test day",
          },
          {
            zh: "提前30分钟到达考场进行签到",
            en: "Arrive 30 minutes early for check-in",
          },
          {
            zh: "禁止携带电子设备、书籍等物品进入考场",
            en: "Electronic devices and books are prohibited in the test room",
          },
          {
            zh: "笔试与口试可能安排在不同日期",
            en: "Written and speaking tests may be scheduled on different dates",
          },
          {
            zh: "遵守考场规则，违规将影响考试成绩",
            en: "Follow test room rules; violations may affect results",
          },
        ],
      },
      {
        icon: "mock",
        title: {
          zh: "模考体验",
          en: "Mock Test Experience",
        },
        description: {
          zh: "了解我们的雅思培训课程，包含全真模考服务",
          en: "Learn about our IELTS training courses with full mock test services",
        },
        link: "/simple-language",
      },
    ],
  },

  faq: {
    title: {
      zh: "常见问题",
      en: "Frequently Asked Questions",
    },
    items: [
      {
        question: {
          zh: "成绩多久公布？",
          en: "How long does it take to receive results?",
        },
        answer: {
          zh: "纸笔考试通常13天后公布成绩，机考则在3-5个工作日内出成绩。成绩公布后，您将收到电子邮件通知。",
          en: "Paper-based test results are typically available 13 days after the test, while computer-based results are available within 3-5 business days. You will receive an email notification when results are published.",
        },
      },
      {
        question: {
          zh: "口语考试是什么形式？",
          en: "What format is the Speaking test?",
        },
        answer: {
          zh: "口语考试采用一对一面试形式，由认证考官进行评估。考试分为三个部分：自我介绍、话题陈述和双向讨论，全程约11-14分钟。",
          en: "The Speaking test is a one-on-one interview with a certified examiner. It consists of three parts: introduction, topic talk, and two-way discussion, lasting approximately 11-14 minutes in total.",
        },
      },
      {
        question: {
          zh: "口语考试是否与笔试同一天？",
          en: "Is the Speaking test on the same day as the written test?",
        },
        answer: {
          zh: "口语考试通常安排在笔试前后一周内，具体时间以准考证为准。您将在笔试日前两天收到口语考试的具体安排通知。",
          en: "The Speaking test is usually scheduled within a week before or after the written test. The specific time will be indicated on your admission ticket. You will receive notification of your Speaking test arrangement two days before the written test.",
        },
      },
      {
        question: {
          zh: "能否重考单项？",
          en: "Can I retake individual test sections?",
        },
        answer: {
          zh: "IELTS 考试不支持单项重考。如果您对某一科目的成绩不满意，需要重新报名完整的考试，包括听说读写四个部分。",
          en: "IELTS does not allow retaking individual sections. If you are unsatisfied with a particular section's score, you must register for the complete test again, including all four sections: Listening, Reading, Writing, and Speaking.",
        },
      },
      {
        question: {
          zh: "考试当天需要带什么？",
          en: "What should I bring on test day?",
        },
        answer: {
          zh: "必须携带有效身份证件（与报名时使用的证件一致）。考场会提供铅笔、橡皮等文具。严禁携带手机、手表、电子设备、书籍、笔记等物品进入考场。",
          en: "You must bring valid identification (matching the document used during registration). Pencils, erasers, and other stationery will be provided at the test centre. Mobile phones, watches, electronic devices, books, notes, and other items are strictly prohibited in the test room.",
        },
      },
      {
        question: {
          zh: "取消和改期政策",
          en: "Cancellation and rescheduling policy",
        },
        answer: {
          zh: "如需取消或改期，必须在考试日期前至少5周提出申请。在此期限内取消可获得部分退费；改期需支付额外费用。逾期将无法退费或改期。",
          en: "To cancel or reschedule, you must submit your request at least 5 weeks before the test date. Cancellations within this timeframe are eligible for partial refunds; rescheduling requires an additional fee. Late requests will not be eligible for refunds or rescheduling.",
        },
      },
      {
        question: {
          zh: "如何领取成绩单（TRF）？",
          en: "How to collect the Test Report Form (TRF)?",
        },
        answer: {
          zh: "成绩公布后，您可以选择到考点现场领取纸质成绩单，或申请邮寄服务（可能需要额外费用）。同时，您也可以通过官方网站下载电子成绩单。",
          en: "After results are published, you can collect your paper TRF at the test centre in person, or request mail delivery (additional fees may apply). You can also download an electronic copy from the official website.",
        },
      },
      {
        question: {
          zh: "收不到成绩单怎么办？",
          en: "What should I do if I don't receive my TRF?",
        },
        answer: {
          zh: "如果在成绩公布后15个工作日内未收到成绩单，请及时联系考试中心。您可以拨打客服电话或发送邮件查询，考试中心将协助您重新寄送或提供其他解决方案。",
          en: "If you do not receive your TRF within 15 business days after results publication, please contact the test centre promptly. You can call customer service or send an email for inquiries, and the test centre will assist in resending or providing alternative solutions.",
        },
      },
    ],
  },
};
