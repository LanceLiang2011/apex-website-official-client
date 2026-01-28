import type { TranslatedText } from "./types";

export const ieltsTestCentreData = {
  hero: {
    slides: [
      {
        image: "/images/ielts/008.jpg",
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
    description: {
      zh: "选择适合您需求的考试类型",
      en: "Choose the test type that suits your needs",
    },
    types: [
      {
        icon: "academic",
        title: {
          zh: "学术类",
          en: "Academic",
        },
        badge: {
          zh: "A类",
          en: "Type A",
        },
        description: {
          zh: "适用于申请高等教育及专业注册",
          en: "For higher education and professional registration",
        },
        features: {
          zh: [
            "本科/研究生申请",
            "学术环境评估",
            "国际认可",
            "学术类阅读与写作",
          ],
          en: [
            "Undergraduate/Graduate applications",
            "Academic environment assessment",
            "International recognition",
            "Academic reading and writing",
          ],
        },
      },
      {
        icon: "general",
        title: {
          zh: "培训类",
          en: "General Training",
        },
        badge: {
          zh: "G类",
          en: "Type G",
        },
        description: {
          zh: "适用于移民、工作经验及培训项目",
          en: "For immigration, work experience, and training programs",
        },
        features: {
          zh: ["移民申请", "工作签证", "职业培训", "日常生活场景"],
          en: [
            "Immigration applications",
            "Work visas",
            "Professional training",
            "Everyday life scenarios",
          ],
        },
      },
    ],
  },

  testFormats: {
    title: {
      zh: "考试形式",
      en: "Test Formats",
    },
    description: {
      zh: "根据您的偏好选择考试形式",
      en: "Choose your preferred test format",
    },
    formats: [
      {
        icon: "computer",
        title: {
          zh: "机考",
          en: "Computer-based",
        },
        description: {
          zh: "在电脑上完成考试，出分更快",
          en: "Complete test on computer with faster results",
        },
        features: {
          zh: ["3-5天出成绩", "考试时间灵活", "打字更便捷", "即时字数统计"],
          en: [
            "Results in 3-5 days",
            "Flexible test times",
            "Convenient typing",
            "Instant word count",
          ],
        },
      },
      {
        icon: "paper",
        title: {
          zh: "纸笔考试",
          en: "Paper-based",
        },
        description: {
          zh: "传统纸笔作答方式",
          en: "Traditional paper-based test format",
        },
        features: {
          zh: ["传统考试形式", "手写作答", "每月多场考试", "13天出成绩"],
          en: [
            "Traditional format",
            "Handwritten answers",
            "Multiple tests monthly",
            "Results in 13 days",
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
    videoUrl: "https://www.youtube.com/embed/nacxvsD6kUs",
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
          zh: "驾车：Highway 7 与 Leslie Street 交接处，提供免费停车位",
          en: "Driving: At Highway 7 and Leslie Street intersection, free parking available",
        },
        {
          zh: "公交：多条 YRT 公交线路可达，详见 YRT 官网",
          en: "Bus: Multiple YRT routes available, see YRT website for details",
        },
      ],
    },
    photos: [
      "/images/ielts/008.jpg",
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
        qrImage: "/images/qr.jpeg",
      },
      {
        icon: "instructions",
        title: {
          zh: "考前须知",
          en: "Pre-test Instructions",
        },
        items: [
          {
            zh: "考试当天需携带有效身份证件（护照或PR卡）",
            en: "Bring valid ID (passport or PR card) on test day",
          },
          {
            zh: "提前1小时到达考场进行签到",
            en: "Arrive 1 hour early for check-in",
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
          zh: "纸笔考试通常13天后公布成绩，机考则在3-5个工作日内出成绩。成绩公布后，您将收到电子邮件或者短信通知。",
          en: "Paper-based test results are typically available 13 days after the test, while computer-based results are available within 3-5 business days. You will receive an email or SMS notification when results are published.",
        },
      },
      {
        question: {
          zh: "口语考试是什么形式？",
          en: "What format is the Speaking test?",
        },
        answer: {
          zh: "口语考试采用一对一面试形式，由认证考官进行评估。考试形式包括面对面或通过线上视频系统进行，但无论采用哪种形式，考生均需到达考试现场。考试共分为三个部分，全程约 11–14 分钟。",
          en: "The Speaking test is a one-on-one interview with a certified examiner. The test format can be conducted face-to-face or through an online video system, but candidates must arrive at the test center regardless of the format. The test consists of three parts and lasts approximately 11-14 minutes in total.",
        },
      },
      {
        question: {
          zh: "口语考试是否与笔试或机考同一天？",
          en: "Is the Speaking test on the same day as the written or computer-based test?",
        },
        answer: {
          zh: "口语考试可能安排在考试当日，也可能安排在考试前一周或考试后一周的任意一天，具体时间以考试中心最终邮件通知为准。",
          en: "The Speaking test may be scheduled on the same day as your test, or on any day within one week before or after your test date. The specific schedule will be confirmed by the test centre via email notification.",
        },
      },
      {
        question: {
          zh: "能否重考单项？",
          en: "Can I retake individual test sections?",
        },
        answer: {
          zh: "可以。雅思在部分考点支持单项重考（One Skill Retake），考生可在规定时间内仅重考听、说、读、写中的其中一项，是否开放及具体安排以考试中心通知为准。目前只支持机考单项重考，所以参加纸笔考试的同学是没有办法参加单项重考的。",
          en: "Yes. IELTS offers One Skill Retake at selected test centres, allowing candidates to retake only one section (Listening, Speaking, Reading, or Writing) within a specified timeframe. Availability and specific arrangements are subject to test centre notification. Currently, One Skill Retake is only available for computer-based tests, so candidates who take the paper-based test cannot use this option.",
        },
      },
      {
        question: {
          zh: "考试当天需要带什么？",
          en: "What should I bring on test day?",
        },
        answer: {
          zh: "必须携带有效身份证件，如护照、PR卡（与报名时使用的证件一致）。考场会提供黑笔、铅笔、橡皮等文具。严禁携带手机、手表、电子设备、书籍、笔记等物品进入考场。",
          en: "You must bring valid identification such as passport or PR card (matching the document used during registration). Black pens, pencils, erasers, and other stationery will be provided at the test centre. Mobile phones, watches, electronic devices, books, notes, and other items are strictly prohibited in the test room.",
        },
      },
      {
        question: {
          zh: "取消和改期政策",
          en: "Cancellation and rescheduling policy",
        },
        answer: {
          zh: "如果您在考试日期前5周以上取消考试，可以获得全额报名费退款，但需扣除75加币的管理费。但是，如果您在考试日期前不足5周取消考试 ，则无法获得退款。除非您能提供充分的理由证明，否则您仍需支付全部考试费用。如果您希望在预定考试日期前 5 周以上更改考试日期，您将被收取 75 加币的管理费，并且只能改期到未来 3 个月内有空位的日期。",
          en: "If you cancel more than 5 weeks before the test date, you can receive a full refund of the registration fee minus a $75 CAD administrative fee. However, if you cancel less than 5 weeks before the test date, no refund will be provided unless you can provide sufficient justification. If you wish to reschedule more than 5 weeks before your scheduled test date, you will be charged a $75 CAD administrative fee and can only reschedule to an available date within the next 3 months.",
        },
      },
      {
        question: {
          zh: "如何领取成绩单（TRF）？",
          en: "How to collect the Test Report Form (TRF)?",
        },
        answer: {
          zh: "考试成绩公布后，成绩单将统一通过邮寄方式寄送至考生报名时填写的地址。",
          en: "After test results are published, the Test Report Form will be uniformly mailed to the address provided during registration.",
        },
      },
      {
        question: {
          zh: "收不到成绩单怎么办？",
          en: "What should I do if I don't receive my TRF?",
        },
        answer: {
          zh: "联系考试中心并提供考生的考试信息。",
          en: "Contact the test centre and provide the candidate's test information.",
        },
      },
    ],
  },
};
