export interface MajorDetail {
  label: { zh: string; en: string };
  value: string;
  description: { zh: string; en: string };
  employment: {
    zh: string;
    en: string;
  };
  rankings: { zh: string; en: string }[]; // List of top universities
}

export interface AreaCategory {
  label: { zh: string; en: string };
  value: string;
  majors: MajorDetail[];
}

export const popularMajorsData: AreaCategory[] = [
  {
    label: { zh: '理科工科', en: 'Science & Engineering' },
    value: 'stem',
    majors: [
      {
        label: { zh: '计算机科学', en: 'Computer Science' },
        value: 'cs',
        description: {
          zh: '计算机科学是系统性研究信息与计算的理论基础以及它们在计算机系统中如何实现与应用的实用技术的学科。它通常被形容为对那些创造、描述以及转换信息的算法处理的系统研究。',
          en: 'Computer Science is the systematic study of the theoretical foundations of information and computation and their implementation and application in computer systems.'
        },
        employment: {
          zh: '典型职业/平均年薪：程序员 / $80,930；应用软件开发师 / $96,260；网页开发师 / $67,540。随着数字化转型的加速，行业需求持续增长。',
          en: 'Typical Roles/Avg Salary: Programmer / $80,930; App Developer / $96,260; Web Developer / $67,540. High demand due to digital transformation.'
        },
        rankings: [
          { zh: '麻省理工学院', en: 'MIT' },
          { zh: '卡内基梅隆大学', en: 'Carnegie Mellon University' },
          { zh: '斯坦福大学', en: 'Stanford University' },
          { zh: '加州大学伯克利分校', en: 'UC Berkeley' },
          { zh: '牛津大学', en: 'University of Oxford' }
        ]
      },
      {
        label: { zh: '数学', en: 'Mathematics' },
        value: 'math',
        description: {
          zh: '数学是研究数量、结构、变化、空间以及信息等概念的一门学科，从计数、计算、量度和对物体形状及运动的观察中产生。',
          en: 'Mathematics is the abstract study of topics such as quantity, structure, space, and change. It is essential in many fields, including natural science, engineering, medicine, and finance.'
        },
        employment: {
          zh: '典型职业：数据分析师、精算师、统计学家。平均年薪：$90,000+。金融、科技、科研领域需求巨大。',
          en: 'Roles: Data Analyst, Actuary, Statistician. Avg Salary: $90,000+. High demand in Finance, Tech, and Research.'
        },
        rankings: [
           { zh: '麻省理工学院', en: 'MIT' },
           { zh: '斯坦福大学', en: 'Stanford University' },
           { zh: '剑桥大学', en: 'University of Cambridge' },
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '牛津大学', en: 'University of Oxford' }
        ]
      },
      {
        label: { zh: '物理学', en: 'Physics' },
        value: 'physics',
        description: {
          zh: '物理学是研究物质、能量、空间和时间及其相互作用的自然科学。它是关于大自然规律的知识，强调逻辑推导和实验验证。',
          en: 'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.'
        },
        employment: {
          zh: '典型职业：物理学家、研究员、工程师。平均年薪：$110,000+。主要就职于科研机构、能源公司及高科技制造企业。',
          en: 'Roles: Physicist, Researcher, Engineer. Avg Salary: $110,000+. Employed in Research Institutes, Energy, and High-Tech Manufacturing.'
        },
        rankings: [
           { zh: '麻省理工学院', en: 'MIT' },
           { zh: '斯坦福大学', en: 'Stanford University' },
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '加州理工学院', en: 'Caltech' },
           { zh: '剑桥大学', en: 'University of Cambridge' }
        ]
      },
      {
         label: { zh: '石油工程', en: 'Petroleum Engineering' },
         value: 'petroleum',
         description: {
           zh: '石油工程涉及石油和天然气的勘探与生产。该领域专注于设计和开发从地表下储层中提取油气的方法。',
           en: 'Petroleum engineering is a field of engineering concerned with the activities related to the production of Hydrocarbons, which can be either crude oil or natural gas.'
         },
         employment: {
           zh: '典型职业：石油工程师、钻井工程师。平均年薪：$130,000+。属于传统高薪工程行业。',
           en: 'Roles: Petroleum Engineer, Drilling Engineer. Avg Salary: $130,000+. traditionally one of the highest-paid engineering fields.'
         },
         rankings: [
            { zh: '德克萨斯大学奥斯汀分校', en: 'UT Austin' },
            { zh: '斯坦福大学', en: 'Stanford University' },
            { zh: '德州农工大学', en: 'Texas A&M' },
            { zh: '帝国理工学院', en: 'Imperial College London' },
            { zh: '阿德莱德大学', en: 'University of Adelaide' }
         ]
       },
       {
         label: { zh: '化学工程', en: 'Chemical Engineering' },
         value: 'chemeng',
         description: {
           zh: '化学工程是将物理科学（化学、物理）和生命科学（生物、微生物、生化）与数学和经济学结合起来，将原材料或化学品转化为有用形式或产品的工程学分支。',
           en: 'Chemical engineering utilizes physical sciences and life sciences together with mathematics and economics to produce, transform, transport, and properly use chemicals, materials and energy.'
         },
         employment: {
           zh: '典型职业：化学工程师、工艺工程师。平均年薪：$100,000+。制药、材料、日化行业为主。',
           en: 'Roles: Chemical Engineer, Process Engineer. Avg Salary: $100,000+. Key industries: Pharma, Materials, Consumer Goods.'
         },
         rankings: [
            { zh: '麻省理工学院', en: 'MIT' },
            { zh: '斯坦福大学', en: 'Stanford University' },
            { zh: '剑桥大学', en: 'University of Cambridge' },
            { zh: '加州大学伯克利分校', en: 'UC Berkeley' },
            { zh: '帝国理工学院', en: 'Imperial College London' }
         ]
       }
    ]
  },
  {
    label: { zh: '人文社科', en: 'Humanities & Social Sciences' },
    value: 'humanities',
    majors: [
      {
        label: { zh: '心理学', en: 'Psychology' },
        value: 'psychology',
        description: {
          zh: '心理学研究涉及知觉、认知、情绪、人格、行为和人际关系等许多领域，也与日常生活的许多领域——家庭、教育、健康等发生关联。心理学家从事基础研究的目的是描述、解释、预测和控制行为。',
          en: 'Psychology is the scientific study of mind and behavior. Psychologists are actively involved in studying and understanding mental processes, brain functions, and behavior.'
        },
        employment: {
          zh: '典型职业/平均年薪：心理医生 / $72,220。应用心理学家还有第五个目的——提高人类生活的质量。',
          en: 'Typical Roles: Psychologist / $72,220. Applied psychologists aim to improve the quality of human life.'
        },
        rankings: [
          { zh: '哈佛大学', en: 'Harvard University' },
          { zh: '牛津大学', en: 'University of Oxford' },
          { zh: '剑桥大学', en: 'University of Cambridge' },
          { zh: '斯坦福大学', en: 'Stanford University' },
          { zh: '伦敦大学学院', en: 'UCL' }
        ]
      },
      {
        label: { zh: '经济学', en: 'Economics' },
        value: 'economics',
        description: {
          zh: '经济学是研究人类社会在各个发展阶段上的各种经济活动和各种相应的经济关系及其运行、发展的规律的学科。',
          en: 'Economics focuses on the behaviour and interactions of economic agents and how economies work.'
        },
        employment: {
           zh: '典型职业：经济学家、金融分析师、顾问。平均年薪：$100,000+。政府、银行、咨询公司需求大。',
           en: 'Roles: Economist, Financial Analyst, Consultant. Avg Salary: $100,000+. High demand in Gov, Banks, Consulting.'
        },
        rankings: [
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '麻省理工学院', en: 'MIT' },
           { zh: '斯坦福大学', en: 'Stanford University' },
           { zh: '芝加哥大学', en: 'University of Chicago' },
           { zh: '伦敦政治经济学院', en: 'LSE' }
        ]
      },
      {
        label: { zh: '社会学', en: 'Sociology' },
        value: 'sociology',
        description: {
           zh: '社会学是系统地研究社会行为与人类群体的学科，起源于19世纪末期。',
           en: 'Sociology is the study of social life, social change, and the social causes and consequences of human behavior.'
        },
        employment: {
           zh: '典型职业：社会工作者、人力资源、市场研究。平均年薪：$50,000 - $70,000。',
           en: 'Roles: Social Worker, HR, Market Researcher. Avg Salary: $50,000 - $70,000.'
        },
        rankings: [
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '牛津大学', en: 'University of Oxford' },
           { zh: '伦敦政治经济学院', en: 'LSE' },
           { zh: '加州大学伯克利分校', en: 'UC Berkeley' },
           { zh: '斯坦福大学', en: 'Stanford University' }
        ]
      },
      {
        label: { zh: '法学', en: 'Law' },
        value: 'law',
        description: {
           zh: '法学是研究法律、法律现象及其规律性的学科。它是关于法律问题的知识体系。',
           en: 'Law is the discipline and profession concerned with the customs, practices, and rules of conduct of a community that are recognized as binding by the community.'
        },
        employment: {
           zh: '典型职业：律师、法官、法律顾问。平均年薪：$120,000+。',
           en: 'Roles: Lawyer, Judge, Legal Consultant. Avg Salary: $120,000+. High prestige and income potential.'
        },
        rankings: [
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '牛津大学', en: 'University of Oxford' },
           { zh: '剑桥大学', en: 'University of Cambridge' },
           { zh: '耶鲁大学', en: 'Yale University' },
           { zh: '斯坦福大学', en: 'Stanford University' }
        ]
      },
      {
         label: { zh: '传播与媒体研究', en: 'Communication & Media Studies' },
         value: 'media',
         description: {
            zh: '传播学是研究人类一切传播行为和传播过程发生、发展规律及其分析的学科。',
            en: 'Communication studies is an academic discipline that deals with processes of human communication.'
         },
         employment: {
            zh: '典型职业：公关专家、媒体策划、记者。平均年薪：$60,000+。新媒体时代需求激增。',
            en: 'Roles: PR Specialist, Media Planner, Journalist. Avg Salary: $60,000+. Growing demand in digital media.'
         },
         rankings: [
            { zh: '阿姆斯特丹大学', en: 'University of Amsterdam' },
            { zh: '南加州大学', en: 'USC' },
            { zh: '伦敦政治经济学院', en: 'LSE' },
            { zh: '德克萨斯大学奥斯汀分校', en: 'UT Austin' },
            { zh: '斯坦福大学', en: 'Stanford University' }
         ]
      }
    ]
  },
  {
    label: { zh: '商科管理', en: 'Business & Management' },
    value: 'business',
    majors: [
      {
        label: { zh: '会计学', en: 'Accounting' },
        value: 'accounting',
        description: {
          zh: '会计学是以研究财务活动和成本资料的收集、分类、综合、分析和解释的基础上形成协助决策的信息系统。可以说它是社会学科的组成部分，也是一门重要的管理学科。',
          en: 'Accounting is the system of recording and summarizing business and financial transactions and analyzing, verifying, and reporting the results.'
        },
        employment: {
          zh: '典型职业/平均年薪：会计师与审计师 / $63,550。会计学的研究对象是资金的运动。',
          en: 'Typical Roles/Avg Salary: Accountants & Auditors / $63,550. Essential for any business operation.'
        },
        rankings: [
          { zh: '哈佛大学', en: 'Harvard University' },
          { zh: '麻省理工学院', en: 'MIT' },
          { zh: '斯坦福大学', en: 'Stanford University' },
          { zh: '牛津大学', en: 'University of Oxford' },
          { zh: '芝加哥大学', en: 'University of Chicago' }
        ]
      },
      {
        label: { zh: '金融学', en: 'Finance' },
        value: 'finance',
        description: {
          zh: '金融学是研究价值判断和价值规律的学科。主要包括传统金融学理论和演化金融学理论两大领域。',
          en: 'Finance is the study of money and how it is used. It deals with the acquisition of funds and the management of these funds.'
        },
        employment: {
           zh: '典型职业：金融分析师、基金经理、投行顾问。平均年薪：$85,000+。',
           en: 'Roles: Financial Analyst, Fund Manager, Investment Banker. Avg Salary: $85,000+.'
        },
        rankings: [
           { zh: '哈佛大学', en: 'Harvard University' },
           { zh: '麻省理工学院', en: 'MIT' },
           { zh: '斯坦福大学', en: 'Stanford University' },
           { zh: '伦敦政治经济学院', en: 'LSE' },
           { zh: '牛津大学', en: 'University of Oxford' }
        ]
      },
      {
         label: { zh: '市场营销', en: 'Marketing' },
         value: 'marketing',
         description: {
            zh: '市场营销是在创造、沟通、传播和交换产品中，为顾客、客户、合作伙伴以及整个社会带来经济价值的活动、过程和体系。',
            en: 'Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers.'
         },
         employment: {
            zh: '典型职业：市场经理、品牌总监、数字营销专家。平均年薪：$130,000+（管理层）。',
            en: 'Roles: Marketing Manager, Brand Director, Digital Marketer. Avg Salary: $130,000+ (Management).'
         },
         rankings: [
            { zh: '宾夕法尼亚大学', en: 'UPenn' },
            { zh: '西北大学', en: 'Northwestern University' },
            { zh: '斯坦福大学', en: 'Stanford University' },
            { zh: '哈佛大学', en: 'Harvard University' },
            { zh: '哥伦比亚大学', en: 'Columbia University' }
         ]
      },
      {
         label: { zh: '人力资源管理', en: 'Human Resource Management' },
         value: 'hrm',
         description: {
            zh: '人力资源管理是指根据企业发展战略的要求，有计划地对人力资源进行合理配置，通过对员工的招聘、培训、使用、考核、激励、调整等一系列过程。',
            en: 'Human Resource Management is the strategic approach to the effective and efficient management of people in a company or organization.'
         },
         employment: {
            zh: '典型职业：HR经理、招聘专员、培训主管。平均年薪：$113,000+。',
            en: 'Roles: HR Manager, Recruiter, Training Director. Avg Salary: $113,000+.'
         },
         rankings: [
            { zh: '康奈尔大学', en: 'Cornell University' },
            { zh: '伦敦政治经济学院', en: 'LSE' },
            { zh: '哈佛大学', en: 'Harvard University' },
            { zh: '牛津大学', en: 'University of Oxford' },
            { zh: '密歇根大学', en: 'University of Michigan' }
         ]
      },
      {
         label: { zh: '国际商务', en: 'International Business' },
         value: 'ib',
         description: {
            zh: '国际商务学是一门研究跨国界商务活动的学科。随着全球化的深入，国际商务变得日益重要。',
            en: 'International Business comprises all commercial transactions that take place between two or more regions, countries and nations beyond their political boundaries.'
         },
         employment: {
            zh: '典型职业：国际业务经理、外贸专员、管理顾问。平均年薪：$80,000+。',
            en: 'Roles: International Business Manager, Trade Specialist, Management Consultant. Avg Salary: $80,000+.'
         },
         rankings: [
            { zh: '南卡罗来纳大学', en: 'University of South Carolina' },
            { zh: '佛罗里达国际大学', en: 'FIU' },
            { zh: '哈佛大学', en: 'Harvard University' },
            { zh: '宾夕法尼亚大学', en: 'UPenn' },
            { zh: '纽约大学', en: 'NYU' }
         ]
      }
    ]
  },
  {
     label: { zh: '医药生物', en: 'Medicine & Biology' },
     value: 'medbio',
     majors: [
        {
           label: { zh: '生物学', en: 'Biology' },
           value: 'biology',
           description: {
              zh: '生物，又称为生命科学，是自然科学的一大门类，是系统地阐述与自然生命特性有关的重大课题的科学。生物科学由经验主义出发，广泛研究生命的所有方面。',
              en: 'Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.'
           },
           employment: {
              zh: '典型职业/平均年薪：微生物学家 / $75,650；生物技术人员 / $45,860。',
              en: 'Typical Roles/Avg Salary: Microbiologist / $75,650; Biological Technician / $45,860.'
           },
           rankings: [
              { zh: '哈佛大学', en: 'Harvard University' },
              { zh: '麻省理工学院', en: 'MIT' },
              { zh: '斯坦福大学', en: 'Stanford University' },
              { zh: '牛津大学', en: 'University of Oxford' },
              { zh: '剑桥大学', en: 'University of Cambridge' }
           ]
        },
        {
           label: { zh: '医学', en: 'Medicine' },
           value: 'medicine',
           description: {
              zh: '医学是处理人健康定义中人的生理处于良好状态相关问题的一种科学，以治疗预防生理疾病和提高人体生理机体健康为目的。',
              en: 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.'
           },
           employment: {
              zh: '典型职业：医生、外科专家、医疗研究员。平均年薪：$208,000+。',
              en: 'Roles: Physician, Surgeon, Medical Researcher. Avg Salary: $208,000+. Highest earning potential.'
           },
           rankings: [
              { zh: '哈佛大学', en: 'Harvard University' },
              { zh: '牛津大学', en: 'University of Oxford' },
              { zh: '斯坦福大学', en: 'Stanford University' },
              { zh: '约翰霍普金斯大学', en: 'Johns Hopkins University' },
              { zh: '剑桥大学', en: 'University of Cambridge' }
           ]
        },
        {
           label: { zh: '兽医', en: 'Veterinary Science' },
           value: 'vet',
           description: {
              zh: '兽医学是应用医学、诊断、治疗等原则来处理动物（包括宠物、家畜、野生动物）疾病、侵害及受伤的学科。',
              en: 'Veterinary science deals with the health and well-being of animals. It encompasses everything from preventive care to complex surgeries.'
           },
           employment: {
              zh: '典型职业：兽医。平均年薪：$95,000+。随着宠物经济发展，需求稳定增长。',
              en: 'Roles: Veterinarian. Avg Salary: $95,000+. Growing demand with pet economy.'
           },
           rankings: [
              { zh: '加州大学戴维斯分校', en: 'UC Davis' },
              { zh: '康奈尔大学', en: 'Cornell University' },
              { zh: '皇家兽医学院', en: 'RVC' },
              { zh: '乌得勒支大学', en: 'Utrecht University' },
              { zh: '圭尔夫大学', en: 'University of Guelph' }
           ]
        },
        {
           label: { zh: '药理学', en: 'Pharmacology' },
           value: 'pharmacology',
           description: {
              zh: '药理学是研究药物与机体（包括病原体）相互作用及其规律和原理的学科。',
              en: 'Pharmacology is the branch of medicine concerned with the uses, effects, and modes of action of drugs.'
           },
           employment: {
              zh: '典型职业：药剂师、药物研究员。平均年薪：$128,000+。',
              en: 'Roles: Pharmacist, Pharmaceutical Researcher. Avg Salary: $128,000+.'
           },
           rankings: [
              { zh: '哈佛大学', en: 'Harvard University' },
              { zh: '莫纳什大学', en: 'Monash University' },
              { zh: '牛津大学', en: 'University of Oxford' },
              { zh: '剑桥大学', en: 'University of Cambridge' },
              { zh: '诺丁汉大学', en: 'University of Nottingham' }
           ]
        },
        {
           label: { zh: '护理', en: 'Nursing' },
           value: 'nursing',
           description: {
              zh: '护理学是一门独立的生命科学，旨在为人类健康服务。',
              en: 'Nursing is a profession within the health care sector focused on the care of individuals, families, and communities.'
           },
           employment: {
              zh: '典型职业：注册护士、执业护师。平均年薪：$75,000+（根据级别）。',
              en: 'Roles: Registered Nurse (RN), Nurse Practitioner. Avg Salary: $75,000+. Very high demand globally.'
           },
           rankings: [
              { zh: '宾夕法尼亚大学', en: 'UPenn' },
              { zh: '伦敦国王学院', en: 'KCL' },
              { zh: '约翰霍普金斯大学', en: 'Johns Hopkins University' },
              { zh: '华盛顿大学', en: 'University of Washington' },
              { zh: '南安普顿大学', en: 'University of Southampton' }
           ]
        }
     ]
  },
  {
     label: { zh: '艺术建筑', en: 'Arts & Architecture' },
     value: 'arts',
     majors: [
        {
           label: { zh: '建筑学', en: 'Architecture' },
           value: 'architecture',
           description: {
              zh: '建筑学是一门与建筑物设计和建造相关的艺术和技术的综合学科，横跨工程技术和人文艺术两大领域。',
              en: 'Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.'
           },
           employment: {
              zh: '典型职业/平均年薪：建筑师 / $79,650；景观设计师 / $68,570。',
              en: 'Typical Roles/Avg Salary: Architect / $79,650; Landscape Architect / $68,570.'
           },
           rankings: [
              { zh: '伦敦大学学院', en: 'UCL' },
              { zh: '麻省理工学院', en: 'MIT' },
              { zh: '代尔夫特理工大学', en: 'TU Delft' },
              { zh: '苏黎世联邦理工学院', en: 'ETH Zurich' },
              { zh: '曼彻斯特建筑学院', en: 'Manchester School of Architecture' }
           ]
        },
        {
           label: { zh: '美术', en: 'Fine Arts' },
           value: 'finearts',
           description: {
              zh: '美术指占据一定平面或空间、具有可视形象的艺术，主要包括绘画、雕塑、设计、建筑四大门类。',
              en: 'Fine art is art developed primarily for aesthetics or beauty, distinguishing it from decorative art or applied art.'
           },
           employment: {
              zh: '典型职业：艺术家、艺术总监、策展人。平均年薪：$50,000 - $90,000+（视名气而定）。',
              en: 'Roles: Artist, Art Director, Curator. Avg Salary: Varies widely based on recognition.'
           },
           rankings: [
              { zh: '皇家艺术学院', en: 'RCA' },
              { zh: '伦敦艺术大学', en: 'UAL' },
              { zh: '帕森斯设计学院', en: 'Parsons' },
              { zh: '罗德岛设计学院', en: 'RISD' },
              { zh: '麻省理工学院', en: 'MIT' }
           ]
        },
        {
           label: { zh: '音乐', en: 'Music' },
           value: 'music',
           description: {
              zh: '音乐是声音的艺术。它是一门需要通过表演来体现的艺术形式。',
              en: 'Music is an art form, and cultural activity, whose medium is sound. It involves performance, composition, and theory.'
           },
           employment: {
              zh: '典型职业：音乐家、作曲家、音乐教师。平均年薪：不稳定，但顶尖人才收入极高。',
              en: 'Roles: Musician, Composer, Music Teacher. Income varies; top performers earn significantly.'
           },
           rankings: [
              { zh: '皇家音乐学院', en: 'RCM' },
              { zh: '维也纳音乐与表演艺术大学', en: 'MDW' },
              { zh: '茱莉亚学院', en: 'Juilliard School' },
              { zh: '巴黎国立高等音乐舞蹈学院', en: 'CNSMDP' },
              { zh: '苏格兰皇家音乐学院', en: 'RCS' }
           ]
        }
     ]
  }
];
