import type { TranslatedText } from "./types";

export interface Tutor {
  id: number;
  name: string;
  center: TranslatedText;
  role: TranslatedText;
  credentials: {
    zh: string[];
    en: string[];
  };
  image: string;
}

export const tutors: Tutor[] = [
  {
    id: 1,
    name: "Elaine",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "校长 英语组组长",
      en: "Principal, Head of English Department",
    },
    credentials: {
      zh: [
        "英属哥伦比亚大学教育学硕士",
        "暨南大学翻译硕士",
        "中国高中英语教师资格证持有者",
        "加拿大TESL证书持有者",
        "5年中国高中英语教学经验",
        "10年雅思及思培教学经验",
        "6年SSAT/SAT教学经验",
      ],
      en: [
        "Master of Education, University of British Columbia",
        "Master of Translation, Jinan University",
        "Chinese High School English Teacher Certificate",
        "Canadian TESL Certificate",
        "5 years of high school English teaching experience in China",
        "10 years of IELTS and CELPIP teaching experience",
        "6 years of SSAT/SAT teaching experience",
      ],
    },
    image: "/images/tutors/1.Elaine.jpg",
  },
  {
    id: 2,
    name: "Sarah",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "英语组教师",
      en: "English Teacher",
    },
    credentials: {
      zh: [
        "卡尔加里大学教育学硕士",
        "苏州大学文学学士",
        "英语专业八级",
        "加拿大TESL证书持有者",
        "雅思8分获得者",
        "10年雅思教学经验",
        "8年思培教学经验",
      ],
      en: [
        "Master of Education, University of Calgary",
        "Bachelor of Arts, Soochow University",
        "TEM-8 Certificate",
        "Canadian TESL Certificate",
        "IELTS Band 8",
        "10 years of IELTS teaching experience",
        "8 years of CELPIP teaching experience",
      ],
    },
    image: "/images/tutors/2.Sarah.jpg",
  },
  {
    id: 3,
    name: "Claire",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "英语组教师",
      en: "English Teacher",
    },
    credentials: {
      zh: [
        "西蒙菲莎大学英语教学硕士",
        "沈阳师范大学法学学士",
        "英语专业八级",
        "加拿大TESL证书持有者",
        "雅思8分获得者",
        "9年雅思教学经验",
        "5年思培教学经验",
        "5年SSAT/SAT教学经验",
      ],
      en: [
        "Master of Arts in Teaching English, Simon Fraser University",
        "Bachelor of Law, Shenyang Normal University",
        "TEM-8 Certificate",
        "Canadian TESL Certificate",
        "IELTS Band 8",
        "9 years of IELTS teaching experience",
        "5 years of CELPIP teaching experience",
        "5 years of SSAT/SAT teaching experience",
      ],
    },
    image: "/images/tutors/3.Claire.jpg",
  },
  {
    id: 4,
    name: "Annie",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "英语组教师",
      en: "English Teacher",
    },
    credentials: {
      zh: [
        "维多利亚大学教育学硕士",
        "国立中山大学文学硕士",
        "加拿大TESL证书持有者",
        "前台湾菁英国际语言教育中心教学主管",
        "9年雅思教学经验",
        "5年思培教学经验",
      ],
      en: [
        "Master of Education, University of Victoria",
        "Master of Arts, National Sun Yat-sen University",
        "Canadian TESL Certificate",
        "Former Teaching Director, Taiwan Elite International Language Center",
        "9 years of IELTS teaching experience",
        "5 years of CELPIP teaching experience",
      ],
    },
    image: "/images/tutors/4.Annie.jpg",
  },
  {
    id: 5,
    name: "Danny",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "英语组教师",
      en: "English Teacher",
    },
    credentials: {
      zh: [
        "曼尼托巴大学教育学硕士",
        "北京语言大学翻译硕士",
        "加拿大TESL证书持有者",
        "CATTI二级口译证书持有者",
        "9年雅思教学经验",
        "5年思培教学经验",
      ],
      en: [
        "Master of Education, University of Manitoba",
        "Master of Translation, Beijing Language and Culture University",
        "Canadian TESL Certificate",
        "CATTI Level 2 Interpretation Certificate",
        "9 years of IELTS teaching experience",
        "5 years of CELPIP teaching experience",
      ],
    },
    image: "/images/tutors/5.Danny.jpg",
  },
  {
    id: 6,
    name: "Jean-Yves Lavoie",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "法语组教师",
      en: "French Teacher",
    },
    credentials: {
      zh: [
        "本科毕业于多伦多大学",
        "研究生毕业于中国人民大学",
        "8年法语教学经验",
        "精通中文、英语及法语",
      ],
      en: [
        "Bachelor's Degree, University of Toronto",
        "Graduate Degree, Renmin University of China",
        "8 years of French teaching experience",
        "Fluent in Chinese, English, and French",
      ],
    },
    image: "/images/tutors/6.Jean-Yves Lavoie.pic.png",
  },
  {
    id: 7,
    name: "Brian",
    center: {
      zh: "Simple简言 语言培训中心",
      en: "Simple Language Training Center",
    },
    role: {
      zh: "法语组教师",
      en: "French Teacher",
    },
    credentials: {
      zh: [
        "圭尔夫大学食品科学博士",
        "胡志明百科大学食品科学硕士",
        "英属哥伦比亚大学访问学者",
        "加拿大TESL证书持有者",
        "加拿大-东南亚交流奖学金获得者",
        "5年法语教学经验",
      ],
      en: [
        "PhD in Food Science, University of Guelph",
        "Master in Food Science, Ho Chi Minh City University of Technology",
        "Visiting Scholar, University of British Columbia",
        "Canadian TESL Certificate",
        "Canada-Southeast Asia Scholarship Recipient",
        "5 years of French teaching experience",
      ],
    },
    image: "/images/tutors/7.Brian.jpg",
  },
  {
    id: 8,
    name: "Leo",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "理科组组长",
      en: "Head of Science Department",
    },
    credentials: {
      zh: [
        "利兹大学电子与电气工程硕士",
        "江南大学电子通信工程硕士",
        "多伦多大学访问学者",
        "发表2篇论文收录于北大核心期刊",
        "中国高中数学教师资格证持有者",
        "前无锡新东方SAT数学组组长",
        "6年SSAT/SAT教学经验",
        "10年高中AP理科教学经验",
      ],
      en: [
        "Master in Electronic and Electrical Engineering, University of Leeds",
        "Master in Electronic Communication Engineering, Jiangnan University",
        "Visiting Scholar, University of Toronto",
        "2 papers published in Peking University Core Journals",
        "Chinese High School Mathematics Teacher Certificate",
        "Former Head of SAT Math, New Oriental Wuxi",
        "6 years of SSAT/SAT teaching experience",
        "10 years of high school AP science teaching experience",
      ],
    },
    image: "/images/tutors/8.Leo.jpg",
  },
  {
    id: 9,
    name: "Vision",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "理科组教师",
      en: "Science Teacher",
    },
    credentials: {
      zh: [
        "英属哥伦比亚大学统计学硕士",
        "曼尼托巴大学统计学学士",
        "8年北美教育平台理科教学经验",
        "曾任温哥华教育机构理科主讲教师",
        "群英教育大学数学和统计学明星教师",
        "长期负责各类竞赛、SSAT/SAT数学、AP理科教研",
      ],
      en: [
        "Master of Statistics, University of British Columbia",
        "Bachelor of Statistics, University of Manitoba",
        "8 years of science teaching experience on North American educational platforms",
        "Former Lead Science Teacher at Vancouver educational institutions",
        "Star Teacher of University Mathematics and Statistics at Elite Education",
        "Long-term responsibility for various competitions, SSAT/SAT Math, and AP Science curriculum development",
      ],
    },
    image: "/images/tutors/9.Vision.jpg",
  },
  {
    id: 10,
    name: "Nick",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "理科组教师",
      en: "Science Teacher",
    },
    credentials: {
      zh: [
        "湖首大学数学科学硕士",
        "西安大略大学应用数学荣誉学士",
        "硕士及本科阶段多门核心数学课程成绩 A / A+，具备扎实的理论基础与良好的学术训练",
        "4年加拿大大学本科课程教学经验",
        "5年北美高中学术课程体系教学经验",
      ],
      en: [
        "Master of Mathematical Sciences, Lakehead University",
        "Honours Bachelor of Applied Mathematics, Western University",
        "A/A+ grades in multiple core mathematics courses during master's and undergraduate studies, with solid theoretical foundation and excellent academic training",
        "4 years of teaching experience in Canadian undergraduate courses",
        "5 years of teaching experience in North American high school academic curriculum",
      ],
    },
    image: "/images/tutors/10.Nick.JPG",
  },
  {
    id: 11,
    name: "Elena",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "理科组教师",
      en: "Science Teacher",
    },
    credentials: {
      zh: [
        "西安大略大学化工硕士",
        "南京工业大学化工学士",
        "具备扎实的实验与科研训练背景",
        "曾参与多项有机化学与生物材料相关研究，掌握常用化学与生物实验技术",
        "5年高中理科教学经验，注重概念理解与实验原理讲解，帮助学生建立清晰的知识结构与科学思维",
      ],
      en: [
        "Master of Chemical Engineering, Western University",
        "Bachelor of Chemical Engineering, Nanjing Tech University",
        "Solid experimental and research training background",
        "Participated in multiple organic chemistry and biomaterial-related research, proficient in common chemical and biological experimental techniques",
        "5 years of high school science teaching experience, focusing on conceptual understanding and experimental principle explanation, helping students build clear knowledge structures and scientific thinking",
      ],
    },
    image: "/images/tutors/11.Elena.jpg",
  },
  {
    id: 12,
    name: "Cynthia",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "理科组教师",
      en: "Science Teacher",
    },
    credentials: {
      zh: [
        "麦吉尔大学生物科学硕士",
        "渥太华大学生物科学学士",
        "曾任职安省高中化学与生物学科辅导员",
        "6年高中理科教学经验",
        "教学风格灵活多样，适合各类学生",
      ],
      en: [
        "Master of Biological Sciences, McGill University",
        "Bachelor of Biological Sciences, University of Ottawa",
        "Former Chemistry and Biology Tutor at Ontario high schools",
        "6 years of high school science teaching experience",
        "Flexible and diverse teaching style, suitable for various types of students",
      ],
    },
    image: "/images/tutors/12.Cynthia.jpg",
  },
  {
    id: 13,
    name: "Queenie",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "计算机教师",
      en: "Computer Science Teacher",
    },
    credentials: {
      zh: [
        "卡尔顿大学工程学硕士",
        "香港理工大学工程学学士",
        "5年编程与计算机竞赛教学经验，熟悉竞赛题型与解题思路",
        "注重培养学生的算法思维、逻辑分析与问题拆解能力",
        "掌握各类编程语言、Web开发、软件开发等技巧",
      ],
      en: [
        "Master of Engineering, Carleton University",
        "Bachelor of Engineering, Hong Kong Polytechnic University",
        "5 years of programming and computer competition teaching experience, familiar with competition question types and problem-solving approaches",
        "Focus on cultivating students' algorithmic thinking, logical analysis, and problem decomposition abilities",
        "Proficient in various programming languages, web development, software development, and other skills",
      ],
    },
    image: "/images/tutors/13.Queenie.JPG",
  },
  {
    id: 14,
    name: "Hank",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "经济学教师",
      en: "Economics Teacher",
    },
    credentials: {
      zh: [
        "杜伦大学金融与投资学硕士",
        "新光银行资产定价人员",
        "花旗银行证劵与衍生性金融产品策略分析师",
        "私人私募对冲基金",
        "参与多家知名企业的宏观经济与市场周期分析，关注利率政策、通胀及货币环境对资产价格的影响",
        "教学中注重培养学生的金融思维、市场敏感度与分析能力",
      ],
      en: [
        "Master in Finance and Investment, Durham University",
        "Asset Pricing Specialist at Shin Kong Bank",
        "Securities and Derivatives Strategy Analyst at Citibank",
        "Private Equity Hedge Fund",
        "Participated in macroeconomic and market cycle analysis for multiple well-known enterprises, focusing on the impact of interest rate policies, inflation, and monetary environment on asset prices",
        "Teaching focuses on cultivating students' financial thinking, market sensitivity, and analytical abilities",
      ],
    },
    image: "/images/tutors/14.Hank.jpg",
  },
  {
    id: 15,
    name: "Lisa",
    center: {
      zh: "UCan优冠 学术辅导中心",
      en: "UCan Academic Tutoring Center",
    },
    role: {
      zh: "思维开发教师",
      en: "Critical Thinking Development Teacher",
    },
    credentials: {
      zh: [
        "加拿大认知发展与学习策略认证课程完成者",
        "专注儿童与青少年逻辑思维与认知能力研究",
        "6年思维训练与逻辑推理教学经验",
        "擅长空间想象、图形推理、模式识别与专注力培养",
        "课堂以互动式教学、游戏化练习为特色",
        "帮助学生在逻辑思考、专注力、解决问题、演讲能力方面取得显著提升",
      ],
      en: [
        "Certified in Canadian Cognitive Development and Learning Strategies",
        "Focus on children and adolescent logical thinking and cognitive ability research",
        "6 years of thinking training and logical reasoning teaching experience",
        "Expert in spatial imagination, graphic reasoning, pattern recognition, and concentration cultivation",
        "Classes feature interactive teaching and gamified practice",
        "Help students achieve significant improvements in logical thinking, concentration, problem-solving, and presentation skills",
      ],
    },
    image: "/images/tutors/15.Lisa.jpg",
  },
  {
    id: 16,
    name: "David",
    center: {
      zh: "Rise瑞思 升学规划中心",
      en: "Rise College Planning Center",
    },
    role: {
      zh: "升学规划组导师",
      en: "College Planning Counselor",
    },
    credentials: {
      zh: [
        "阿尔伯塔大学基础医学博士",
        "英国格拉斯哥大学心血管医学博士",
        "博士联盟成员，具备扎实的科研训练与跨学科研究背景",
        "6年高中课程选课、大学申学规划及大学专业选择经验",
        "熟悉北美及英国高校医学、生物相关专业体系",
      ],
      en: [
        "PhD in Basic Medical Science, University of Alberta",
        "PhD in Cardiovascular Medicine, University of Glasgow",
        "Member of PhD Alliance, with solid research training and interdisciplinary research background",
        "6 years of experience in high school course selection, university application planning, and university major selection",
        "Familiar with medical and biological-related programs in North American and UK universities",
      ],
    },
    image: "/images/tutors/16.David.jpg",
  },
  {
    id: 17,
    name: "Jason",
    center: {
      zh: "Rise瑞思 升学规划中心",
      en: "Rise College Planning Center",
    },
    role: {
      zh: "升学规划组导师",
      en: "College Planning Counselor",
    },
    credentials: {
      zh: [
        "滑铁卢大学计算机科学硕士",
        "2021年创办AuroraQuest INC并建立STUDYLAND在线AI学术平台",
        "2019年创办E-TECH Canada INC（安大略省最大华人区块链技术公司）",
        "2017年创办UwillBe优彼致愿大数据教育规划公司",
      ],
      en: [
        "Master of Computer Science, University of Waterloo",
        "Founded AuroraQuest INC in 2021 and established STUDYLAND online AI academic platform",
        "Founded E-TECH Canada INC in 2019 (Ontario's largest Chinese blockchain technology company)",
        "Founded UwillBe big data education planning company in 2017",
      ],
    },
    image: "/images/tutors/17.Jason.jpg",
  },
  {
    id: 18,
    name: "Sophie",
    center: {
      zh: "Rise瑞思 升学规划中心",
      en: "Rise College Planning Center",
    },
    role: {
      zh: "升学规划组导师",
      en: "College Planning Counselor",
    },
    credentials: {
      zh: [
        "西安大略大学毅伟商学院硕士",
        "曾任职于加拿大百事可乐、德国拜耳研发中心、美国嘉吉公司等多家世界500强企业，担任高级管理相关职位",
        "8年高中升学规划经验，熟悉加拿大大学申请流程、专业选择与录取要求",
        "指导学生完成选课、背景提升、活动梳理及申请文书准备，注重个性化规划与长期发展",
      ],
      en: [
        "Master from Ivey Business School, Western University",
        "Held senior management positions at multiple Fortune 500 companies including PepsiCo Canada, Bayer R&D Center Germany, and Cargill USA",
        "8 years of high school college planning experience, familiar with Canadian university application processes, major selection, and admission requirements",
        "Guide students through course selection, background enhancement, activity organization, and application essay preparation, focusing on personalized planning and long-term development",
      ],
    },
    image: "/images/tutors/18.Sophiejpg.jpg",
  },
  {
    id: 19,
    name: "Derrick",
    center: {
      zh: "Rise瑞思 升学规划中心",
      en: "Rise College Planning Center",
    },
    role: {
      zh: "升学规划组导师",
      en: "College Planning Counselor",
    },
    credentials: {
      zh: [
        "英属哥伦比亚大学心理与经济学双学位",
        "熟悉加拿大中学—大学衔接体系",
        "深入了解安省高中课程、选课规划及大学录取要求",
        "擅长为学生制定长期升学路径规划，涵盖选课、成绩提升与背景积累",
        "指导学生进行专业方向探索与大学定位，提升申请匹配度",
        "熟悉申请流程与时间节点，注重规划的可执行性",
      ],
      en: [
        "Double Degree in Psychology and Economics, University of British Columbia",
        "Familiar with Canadian secondary school to university transition system",
        "In-depth understanding of Ontario high school curriculum, course selection planning, and university admission requirements",
        "Expert in developing long-term college pathway planning for students, covering course selection, grade improvement, and background accumulation",
        "Guide students in exploring major directions and university positioning to improve application fit",
        "Familiar with application processes and timelines, focusing on planning feasibility",
      ],
    },
    image: "/images/tutors/19.Derrick.png",
  },
  {
    id: 20,
    name: "Rachel",
    center: {
      zh: "Rise瑞思 升学规划中心",
      en: "Rise College Planning Center",
    },
    role: {
      zh: "升学规划组导师",
      en: "College Planning Counselor",
    },
    credentials: {
      zh: [
        "具备升学文书指导与学术表达辅导经验",
        "曾任加拿大大学招生官",
        "擅长从学生经历中提炼亮点，帮助建立清晰、有说服力的个人定位",
        "指导学生完成申请文书、活动陈述与学术材料整合",
        "注重真实性与逻辑表达，避免模板化与空泛包装",
        "熟悉加拿大大学对综合素质与学术潜力的考察重点",
        "沟通方式细致耐心，善于引导学生自我思考与长期规划",
      ],
      en: [
        "Experience in college essay guidance and academic expression coaching",
        "Former Canadian university admissions officer",
        "Expert in extracting highlights from student experiences to help establish clear and convincing personal positioning",
        "Guide students through application essays, activity statements, and academic material integration",
        "Focus on authenticity and logical expression, avoiding templated and superficial packaging",
        "Familiar with Canadian universities' focus on comprehensive qualities and academic potential",
        "Detailed and patient communication style, skilled at guiding students' self-reflection and long-term planning",
      ],
    },
    image: "/images/tutors/20.Rachel.png",
  },
];
