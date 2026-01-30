import type { TranslatedText } from "./types";

export type PathwayDegree = "undergrad" | "postgrad";

export interface PathwayTableRow {
  method: TranslatedText; // 升学方式
  audience: TranslatedText; // 适合人群
  description: TranslatedText; // 具体说明 / 具体要求 / 可申请院校 / 录取要求
  requirements?: TranslatedText; // Specifically for some tables that split description/requirements
}

export interface PathwayTableData {
  headers: TranslatedText[]; // Custom headers for the table (e.g. Method, Audience, Description)
  rows: PathwayTableRow[];
}

export interface CountryPathways {
  [key: string]: {
    // 'undergrad' | 'postgrad'
    data: PathwayTableData;
  };
}

export const risePathways: Record<string, CountryPathways> = {
  uk: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: {
              zh: "国际体系课程直入",
              en: "Direct Entry (Intl Curriculum)",
            },
            audience: {
              zh: "A-Level/IB/AP/OSSD/SAT等国际课程体系的学生",
              en: "Students in A-Level/IB/AP/OSSD/SAT systems",
            },
            description: {
              zh: "国际体系课程认可度高、课程科目丰富，学生可以根据自己擅长的科目进行选课并参加考试。",
              en: "High recognition of international curriculums with diverse subjects. Students can choose subjects they excel in.",
            },
          },
          {
            method: { zh: "高考直入", en: "Gaokao Direct Entry" },
            audience: {
              zh: "高三参加完高考的应届生",
              en: "High school graduates who took Gaokao",
            },
            description: {
              zh: "英国部分大学接受中国高考成绩，高考生可凭高考成绩直接申请英国大学一年级。",
              en: "Some UK universities accept Gaokao scores for direct entry into Year 1.",
            },
          },
          {
            method: { zh: "本科预科", en: "Foundation Year" },
            audience: { zh: "高二/高三在读学生", en: "Year 11/12 students" },
            description: {
              zh: "本科预科主要是为了不满足直录要求，需要通过一年预科课程衔接后，直接进入本科大一。",
              en: "Designed for students not meeting direct entry requirements. Bridging course for 1 year before entering Year 1.",
            },
          },
          {
            method: { zh: "国际大一", en: "International Year One" },
            audience: { zh: "高三毕业学生", en: "High school graduates" },
            description: {
              zh: "部分英国大学接受高中毕业生直接入读国际大一文凭课程，相当于英国大学本科一年级，学生完成后可以直接进入到本科二年级。",
              en: "Diploma equivalent to Year 1. Upon completion, students progress to Year 2 of the degree.",
            },
          },
          {
            method: { zh: "Top up插读本科", en: "Top-up Degree" },
            audience: { zh: "大专", en: "College Diploma holders" },
            description: {
              zh: "英国Top-up课程为本科课程的最后一年，相当于国内专升本或者插读英国本科，学制为1年，成功完成课程的学生可以获得学士学位，与英国三年制本科毕业的学位一样。",
              en: "Final year of a specialized degree. 1-year duration. Grants a Bachelor degree equivalent to a standard 3-year degree.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: { zh: "本科毕业生", en: "Bachelor Graduates" },
            description: {
              zh: "凭大学四年成绩单及语言成绩申请，一般需要GPA 75%以上，雅思6.5分。",
              en: "Apply with transcript and language scores. Typically requires GPA 75%+ and IELTS 6.5.",
            },
          },
          {
            method: { zh: "硕士预科", en: "Pre-Masters" },
            audience: {
              zh: "本科成绩不足或转专业学生",
              en: "Low GPA or career changers",
            },
            description: {
              zh: "作为过渡课程，帮助学生适应英国教学模式，提升语言和学术能力，衔接硕士课程。",
              en: "Bridging course to adapt to UK education, improve language/academic skills, leading to Master's.",
            },
          },
          {
            method: { zh: "专升硕", en: "Top-up to Master's" },
            audience: { zh: "三年制大专毕业生", en: "3-year Diploma holders" },
            description: {
              zh: "通过Pre-Master或Top-up本科+硕士的方式，大专生可在2-3年内获得英国硕士学位。",
              en: "Via Pre-Master or Top-up Bachelor + Master's, diploma holders can obtain UK Master's in 2-3 years.",
            },
          },
          {
            method: { zh: "MBA/EMBA", en: "MBA/EMBA" },
            audience: {
              zh: "3年以上工作经验的管理层",
              en: "Managers with 3+ years experience",
            },
            description: {
              zh: "英国MBA课程注重实践，学制通常1年，毕业生职业发展快，薪资提升明显。",
              en: "UK MBA focuses on practice. Usually 1 year. Fast career growth and salary increase.",
            },
          },
        ],
      },
    },
  },
  australia: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合学生", en: "Target Audience" },
          { zh: "具体要求", en: "Requirements" },
        ],
        rows: [
          {
            method: { zh: "高考成绩直升", en: "Gaokao Direct Entry" },
            audience: { zh: "高中应届毕业生", en: "High School Graduates" },
            description: {
              zh: "澳洲八大（墨尔本大学除外）都认可高考成绩，国内高考生只要高考成绩达到标准，并且满足雅思条件，就可以凭借高考成绩直接升入澳洲高校的大一。",
              en: "Go8 (except Melbourne) accept Gaokao. Direct entry to Year 1 with meeting score and IELTS requirements.",
            },
          },
          {
            method: { zh: "预科 + 本科", en: "Foundation + Bachelor" },
            audience: {
              zh: "高二/高三在读或毕业生，平时均分80-85+",
              en: "Year 11/12 students, GPA 80-85+",
            },
            description: {
              zh: "学生不参加高考，或高考成绩不足，可以通过预科进入澳洲八大。预科完成后直接进入本科大一。澳洲大学预科通常要求雅思分数5.0-6.0，需要在预科学习8个月-1年时间，后进入澳洲本科学习。",
              en: "Via Foundation pathway if no Gaokao or low score. Requires IELTS 5.0-6.0, 8-12 months duration, then Year 1.",
            },
          },
          {
            method: { zh: "国际大一", en: "Diploma / Int'l Year 1" },
            audience: {
              zh: "普高学生不参加高考或高考分数不满足直录要求",
              en: "High school grads (no/low Gaokao)",
            },
            description: {
              zh: "澳洲高校的国际大一课程学习内容和本科大一相同，完成国际大一课程后可以衔接大二。其优势在于可以节省时间成本，只需完成1年国际大一课程，加上2年本科，达到标准就能顺利毕业。申请要求：平时成绩80-85+，雅思6.0-6.5+。",
              en: "Equivalent to Year 1 content, leads to Year 2. Saves time (1yr Diploma + 2yr Degree). Req: GPA 80-85+, IELTS 6.0-6.5+.",
            },
          },
          {
            method: { zh: "A-Level/IB直录", en: "A-Level/IB Direct Entry" },
            audience: {
              zh: "就读国际高中的学生",
              en: "International school students",
            },
            description: {
              zh: "持有A-Level、IB、SAT等国际课程成绩的学生可直接申请澳洲八大本科。A-Level通常需达到A*AA-AAB，IB需32-38分以上，雅思6.5-7.0。",
              en: "A-Level (A*AA-AAB), IB (32-38+), SAT accepted. Direct entry to Go8. IELTS 6.5-7.0 required.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: {
              zh: "本科毕业生，均分70-85+",
              en: "Bachelor Grads, GPA 70-85+",
            },
            description: {
              zh: "澳洲八大通常要求均分75-85分，非八大要求70-75分。雅思一般要求6.5分。",
              en: "Go8 requires GPA 75-85, Non-Go8 70-75. IELTS typically 6.5.",
            },
          },
          {
            method: { zh: "专升硕", en: "Master's Qualifying / PQP" },
            audience: {
              zh: "大专毕业生/无学位证本科生",
              en: "College grads / Bachelor w/o Degree",
            },
            description: {
              zh: "通过3-6个月的硕士预科课程（MQP/PQP），衔接澳洲大学硕士课程。是专科生提升学历的高效途径。",
              en: "3-6 months Pre-Master (MQP) leading to Master's degree. Efficient path for upgrading qualification.",
            },
          },
          {
            method: { zh: "研究型硕士", en: "Master by Research" },
            audience: {
              zh: "有志于科研或读博的学生",
              en: "Students pursuing research/PhD",
            },
            description: {
              zh: "学制1.5-2年，需要完成研究课题。适合计划继续深造或从事学术研究的学生。需提前联系导师并提交研究计划。",
              en: "1.5-2 years. Requires research project. Suitable for academic career. Need supervisor and research proposal.",
            },
          },
          {
            method: { zh: "MBA课程", en: "MBA Programs" },
            audience: {
              zh: "2-3年以上工作经验的职场人士",
              en: "Professionals with 2-3+ years experience",
            },
            description: {
              zh: "澳洲MBA重视实践能力，学制1.5-2年，毕业生在亚太地区认可度高，薪资涨幅明显。部分院校要求GMAT成绩。",
              en: "Practical focus, 1.5-2 years. High recognition in Asia-Pacific. Significant salary increase. GMAT may be required.",
            },
          },
        ],
      },
    },
  },
  us: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: {
              zh: "国际体系课程直入",
              en: "Direct Entry (Intl Curriculum)",
            },
            audience: {
              zh: "A-Level/IB/AP/OSSD/SAT等国际课程体系的学生",
              en: "Students in Intl Systems",
            },
            description: {
              zh: "国际体系课程认可度高、课程科目丰富，学生可以根据自己擅长的科目进行选课并参加考试。",
              en: "High recognition, diverse subjects. Students choose subjects they excel in.",
            },
          },
          {
            method: { zh: "高考直入", en: "Gaokao Direct" },
            audience: { zh: "高三参加完高考的应届生", en: "Gaokao Takers" },
            description: {
              zh: "高考生可凭高考成绩直接申请美国大学一年级。",
              en: "Apply directly to US universities Year 1 with Gaokao scores.",
            },
          },
          {
            method: { zh: "本科预科", en: "Pathway Program" },
            audience: { zh: "高二/高三在读学生", en: "Year 11/12 Students" },
            description: {
              zh: "本科预科主要是为了不满足直录要求，需要通过一年预科课程衔接后，直接进入本科大一。",
              en: "For students not meeting direct entry requirements. 1 year bridge then Year 1.",
            },
          },
          {
            method: { zh: "国际大一", en: "International Year One" },
            audience: { zh: "高三毕业学生", en: "High School Grads" },
            description: {
              zh: "各大学自主设计课程内容及考试，就读完国际大一课程后直接升读大二。",
              en: "University designed curriculum. Progress to Year 2 after completion.",
            },
          },
          {
            method: { zh: "Top up插读本科", en: "Transfer Admission" },
            audience: { zh: "大专", en: "College Students" },
            description: {
              zh: "Top-up课程为本科课程的最后一年，相当于国内专升本或者插读美国本科，学制为1年，成功完成课程的学生可以获得学士学位。",
              en: "Final year transfer. equivalent to completing degree in 1 year.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: {
              zh: "本科毕业生，GPA 3.0+",
              en: "Bachelor Grads, GPA 3.0+",
            },
            description: {
              zh: "凭借本科成绩单、语言成绩（托福/雅思）及GRE/GMAT（部分专业需求）申请。",
              en: "Apply with transcript, TOEFL/IELTS, and GRE/GMAT (if required).",
            },
          },
          {
            method: { zh: "硕士预科/桥梁课程", en: "Pathway / Pre-Master" },
            audience: {
              zh: "GPA或语言未达标者",
              en: "Lower GPA or Language scores",
            },
            description: {
              zh: "为学术背景或语言能力稍弱的学生提供过渡，通过后可进入正式硕士项目。",
              en: "Bridge program improving academic/language skills before full Master's.",
            },
          },
          {
            method: { zh: "研究型硕士/博士", en: "Research Master/PhD" },
            audience: {
              zh: "有科研背景和明确研究方向的学生",
              en: "Students with research background",
            },
            description: {
              zh: "需要提前套磁导师，提交研究计划。硕士通常2年，博士4-6年。全奖机会较多，适合学术深造。",
              en: "Need supervisor contact and research proposal. Master 2yrs, PhD 4-6yrs. Full funding opportunities available.",
            },
          },
          {
            method: { zh: "MBA/EMBA", en: "MBA/EMBA" },
            audience: {
              zh: "3-5年以上管理工作经验",
              en: "Management experience 3-5+ years",
            },
            description: {
              zh: "顶尖商学院MBA学制2年，注重案例教学和人脉积累。申请需GMAT 700+，托福100+，以及工作经验证明。",
              en: "Top B-schools: 2 years. Case-based learning and networking. Requires GMAT 700+, TOEFL 100+, work experience.",
            },
          },
        ],
      },
    },
  },
  canada: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合学生", en: "Target Audience" },
          { zh: "可申请院校", en: "Universities" },
          { zh: "录取要求", en: "Requirements" },
        ],
        rows: [
          {
            method: { zh: "高考成绩直入", en: "Direct Entry (Gaokao)" },
            audience: {
              zh: "高考成绩优秀，同时想拥有更多海外院校选择的学生",
              en: "Good Gaokao score, seeking more options",
            },
            description: {
              zh: "多伦多大学，英属哥伦比亚大学，麦吉尔大学，麦克马斯特大学，滑铁卢大学等",
              en: "UofT, UBC, McGill, McMaster, Waterloo, etc.",
            },
            requirements: {
              zh: "高考成绩超过一本线60-80分以上；会考成绩优秀；雅思6.5（单项6）",
              en: "Gaokao 60-80+ above Tier 1; Excellent Huikao; IELTS 6.5 (6.0).",
            },
          },
          {
            method: {
              zh: "本科直录（无高考）",
              en: "Direct Entry (No Gaokao)",
            },
            audience: {
              zh: "高考成绩不理想不参加高考，同时想去海外院校等学生",
              en: "Low/No Gaokao score, seeking overseas study",
            },
            description: {
              zh: "渥太华大学，卡尔顿大学，约克大学，达尔豪斯大学等",
              en: "uOttawa, Carleton, York, Dalhousie, etc.",
            },
            requirements: {
              zh: "高中成绩80-85分，无需高考，提供会考成绩即可；雅思6.5（单项6）",
              en: "GPA 80-85, No Gaokao needed, Huikao req; IELTS 6.5 (6.0).",
            },
          },
          {
            method: { zh: "本科预科", en: "Foundation" },
            audience: {
              zh: "高考成绩或高中成绩不满足直录，但同时想申请海外学校的学生",
              en: "Score not met for direct entry",
            },
            description: {
              zh: "多伦多中央大学，西蒙飞莎大学-FIC，曼尼托巴大学-ICM，劳瑞尔大学等",
              en: "Ryerson (TMU), SFU-FIC, UManitoba-ICM, Laurier, etc.",
            },
            requirements: {
              zh: "高二或高三结束后，高中成绩75-80以上；雅思成绩5.5-6，单项5-5.5",
              en: "Finish Year 11/12, GPA 75-80+; IELTS 5.5-6.0 (5-5.5).",
            },
          },
          {
            method: { zh: "学院转大学（2+2）", en: "College Transfer (2+2)" },
            audience: {
              zh: "想节省费用或暂时未达到大学录取标准的学生",
              en: "Cost-conscious or temporarily below requirements",
            },
            description: {
              zh: "塞内卡学院、乔治布朗学院、亚岗昆学院等",
              en: "Seneca College, George Brown, Algonquin, etc.",
            },
            requirements: {
              zh: "先在公立学院完成2年副学士课程（Diploma），学分转入合作大学继续完成后2年本科。总学费可节省30-40%。要求：高中均分70+，雅思6.0（单项5.5）。",
              en: "2 years at college (Diploma), transfer credits to partner university for final 2 years. Save 30-40% tuition. Req: GPA 70+, IELTS 6.0 (5.5).",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
          { zh: "申请条件", en: "Conditions" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: {
              zh: "本科学历，GPA3.0以上，英语水平达标",
              en: "Bachelor Degree, GPA 3.0+, English requirement met",
            },
            description: {
              zh: "加拿大硕士通常1.5-2年学习时长。专业设置非常多元、创新，学历含金量高，就业前景好。",
              en: "1.5-2 years. Diverse and innovative majors. High degree value and good job prospects.",
            },
            requirements: {
              zh: "GPA：3.0以上。排名越高的院校要求越高。常春藤院校普通要求3.6+。语言：托福80/雅思6.5，排名越高的院校要求越高。常春藤院校普通要求托福105+/雅思7.5。",
              en: "GPA: 3.0+ (Ivy 3.6+). TOEFL 80/IELTS 6.5 (Ivy 105+/7.5).",
            },
          },
          {
            method: { zh: "双录取/研究生文凭课程", en: "Dual/Post-Grad Cert" },
            audience: {
              zh: "GPA偏低/本科无学位/专科/复杂学历",
              en: "Low GPA / No Degree / Diploma / Complex background",
            },
            description: {
              zh: "双录取：主要针对托福/雅思无法达到直录的学生。先读学校自己的语言课程，达到级别后可以升读硕士。研文：主要针对GPA低于3.0无法直录硕士的学生，一年制的graduate diploma。",
              en: "Dual: For students needing language prep. PGC: For GPA<3.0, 1-year graduate diploma.",
            },
            requirements: {
              zh: "GPA：2.0—3.0 语言：低于托福80/雅思6.5，依据不同院校有不同的要求",
              en: "GPA: 2.0-3.0. Language: Below TOEFL 80/IELTS 6.5.",
            },
          },
          {
            method: { zh: "MBA课程", en: "MBA Programs" },
            audience: {
              zh: "2年以上管理岗位工作经验",
              en: "2+ years management experience",
            },
            description: {
              zh: "加拿大MBA注重实用性，学制1-2年。如多伦多大学Rotman、西安大略Ivey商学院全球排名靠前，毕业生就业率高。",
              en: "1-2 years. Practical focus. Top schools like Rotman (UofT), Ivey (Western) rank globally. High employment rate.",
            },
            requirements: {
              zh: "GPA：3.0以上，部分院校要求GMAT 600-650+。工作经验：2-5年，需提供推荐信和职业规划。语言：托福90-100/雅思6.5-7.0。",
              en: "GPA 3.0+, GMAT 600-650+ (some schools). Experience: 2-5 years, references and career plan needed. TOEFL 90-100/IELTS 6.5-7.0.",
            },
          },
          {
            method: { zh: "研究型硕士", en: "Master by Research" },
            audience: {
              zh: "有科研经验或计划申请博士",
              en: "Research experience or PhD plans",
            },
            description: {
              zh: "学制2年，以研究为主，需要完成论文。提前套磁导师并提交研究计划。全奖机会较多，适合深造。",
              en: "2 years. Research-focused with thesis. Need supervisor and research proposal. Full funding opportunities. Suitable for further study.",
            },
            requirements: {
              zh: "GPA：3.5以上，部分院校要求GRE。语言：托福90-100/雅思6.5-7.0。需具备一定的科研背景和学术成果。",
              en: "GPA 3.5+, GRE may be required. TOEFL 90-100/IELTS 6.5-7.0. Research background and academic achievements needed.",
            },
          },
        ],
      },
    },
  },
  newzealand: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "预科 + 本科", en: "Foundation + Bachelor" },
            audience: { zh: "高二/高三完成", en: "Year 11/12 Completed" },
            description: {
              zh: "通往新西兰八大名校的最佳途径，预科学习8-12个月后升读大一。",
              en: "Best path to NZ universities. 8-12 months Foundation then Year 1.",
            },
          },
          {
            method: { zh: "高考成绩直录", en: "Gaokao Direct" },
            audience: { zh: "高考成绩达到一本线", en: "Good Gaokao Score" },
            description: {
              zh: "新西兰所有公立大学均接受中国高考成绩申请直录大一。",
              en: "All NZ public universities accept Gaokao for direct Year 1 entry.",
            },
          },
          {
            method: { zh: "大一文凭课程", en: "Diploma" },
            audience: { zh: "高三毕业生", en: "High School Grads" },
            description: {
              zh: "相当于大一课程，通过后直接升读大二。省时省费用。",
              en: "Equivalent to Year 1. Progress to Year 2. Saves time and cost.",
            },
          },
          {
            method: { zh: "A-Level/IB直录", en: "A-Level/IB Direct Entry" },
            audience: {
              zh: "国际高中学生",
              en: "International School Students",
            },
            description: {
              zh: "A-Level成绩AAB-BBB或IB戉30-34分可直接申请奥克兰大学等名校。雅思需达到6.0-6.5。",
              en: "A-Level AAB-BBB or IB 30-34 for direct entry to top universities like UoA. IELTS 6.0-6.5 required.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: {
              zh: "本科毕业，均分70-75+",
              en: "Bachelor Grads, GPA 70-75+",
            },
            description: {
              zh: "新西兰硕士学制灵活（1-2年），部分专业接受跨专业申请。",
              en: "Flexible duration (1-2 years). Some majors accept career changes.",
            },
          },
          {
            method: { zh: "学士后文凭 GD", en: "Graduate Diploma (GD)" },
            audience: {
              zh: "想转专业或均分不够直录硕士",
              en: "Career changers or Low GPA",
            },
            description: {
              zh: "1年制课程，读完可作为跳板申请硕士，由于同属Level 7，也可用于工签申请。",
              en: "1 year course. Pathway to Master's or for work visa (Level 7).",
            },
          },
          {
            method: { zh: "PGD + 硕士", en: "PGD + Master's" },
            audience: {
              zh: "想节省时间并快速提升学历",
              en: "Fast-track seekers",
            },
            description: {
              zh: "1年PGD(Postgraduate Diploma) + 0.5-1年Master，共计1.5-2年获得硕士学位。是新西兰特色途径。",
              en: "1yr PGD + 0.5-1yr Master = 1.5-2yrs total. Unique NZ pathway for faster Master's degree.",
            },
          },
          {
            method: { zh: "MBA课程", en: "MBA Programs" },
            audience: {
              zh: "2年以上工作经验的管理层",
              en: "Managers with 2+ years experience",
            },
            description: {
              zh: "奥克兰大学、棅西大学等提供MBA课程，学制1.5年，性价比高，毕业可申请3年开放工签。",
              en: "UoA, Massey etc offer MBA. 1.5 years. High ROI. Graduates eligible for 3-year open work visa.",
            },
          },
        ],
      },
    },
  },
  hk: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "具体要求", en: "Requirements" },
          { zh: "说明", en: "Note" },
        ],
        rows: [
          {
            method: { zh: "高考统招提前批", en: "Gaokao Early Batch" },
            audience: {
              zh: "高考超一本线100分以上（港中文/港城大）",
              en: "Gaokao 100+ above Tier 1",
            },
            description: {
              zh: "通过填报志愿进行录取，不占用常规志愿名额。",
              en: "Admitted via standard volunteering system.",
            },
          },
          {
            method: { zh: "独立招生", en: "Independent Application" },
            audience: {
              zh: "高考超一本线50-80分+英语120分+",
              en: "Gaokao 50-80+ above Tier 1, English 120+",
            },
            description: {
              zh: "需单独向学校递交申请，并参加全英文面试（港大/科大等）。",
              en: "Apply directly to uni. Requires English interview (HKU/HKUST etc).",
            },
          },
          {
            method: { zh: "副学士", en: "Associate Degree" },
            audience: {
              zh: "高考成绩本科线以上，英语90分+",
              en: "Gaokao above Bachelor line, English 90+",
            },
            description: {
              zh: "2年副学士+2年本科，毕业证书与直录无异，是进入港八大的黄金跳板。",
              en: "2yr Associate + 2yr Bachelor. Same degree certificate. Golden pathway to top HK unis.",
            },
          },
          {
            method: { zh: "IB/A-Level直录", en: "IB/A-Level Direct Entry" },
            audience: {
              zh: "国际课程体系学生",
              en: "International curriculum students",
            },
            description: {
              zh: "IB 32-40分或A-Level AAA-ABB可直接申请港大、科大等名校。要求雅思6.5或托福90。",
              en: "IB 32-40 or A-Level AAA-ABB for direct entry to HKU, HKUST, etc. IELTS 6.5 or TOEFL 90 required.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "适合人群", en: "Target Audience" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "授课型硕士", en: "Taught Master" },
            audience: { zh: "本科毕业生", en: "Bachelor Graduates" },
            description: {
              zh: "学制1年，高性价比。申请需提供雅思（6.0-6.5+），985/211均分80+，双非85+。",
              en: "1 year duration. High ROI. Requires IELTS 6.0-6.5+, GPA 80-85+.",
            },
          },
          {
            method: { zh: "研究型硕士", en: "Research Master (MPhil)" },
            audience: {
              zh: "有科研经验或计划申请博士",
              en: "Research experience or PhD plans",
            },
            description: {
              zh: "学制2年，全奖机会较多，需要完成研究课题和论文。适合计划读博的学生。",
              en: "2 years. Full funding opportunities. Research project and thesis required. Suitable for PhD candidates.",
            },
          },
          {
            method: { zh: "专升硕", en: "Top-up Master" },
            audience: { zh: "大专毕业生", en: "College diploma holders" },
            description: {
              zh: "部分院校接受三年制大专申请硕士，但需要2-5年相关工作经验。部分院校接受先读副学士再进入硕士。",
              en: "Some schools accept 3-year diploma with 2-5 years work experience. Or via Associate Degree pathway first.",
            },
          },
          {
            method: { zh: "MBA/EMBA", en: "MBA/EMBA" },
            audience: {
              zh: "3年以上管理经验",
              en: "3+ years management experience",
            },
            description: {
              zh: "港大、科大、中文大学MBA全球排名靠前，学制1-2年，毕业生可申请IANG签证留港工作。",
              en: "HKU, HKUST, CUHK MBA globally ranked. 1-2 years. Graduates eligible for IANG visa to work in HK.",
            },
          },
        ],
      },
    },
  },
  macau: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "独立招生（高考）", en: "Independent (Gaokao)" },
            audience: {
              zh: "一本/二本线上学生",
              en: "Tier 1/2 Gaokao students",
            },
            description: {
              zh: "澳大/澳科技等院校独立招生，不影响内地录取。二本线上英文良好也有机会。",
              en: "Direct application. Does not conflict with mainland offers.",
            },
          },
          {
            method: { zh: "A-Level/IB直录", en: "A-Level/IB Direct" },
            audience: {
              zh: "国际课程体系学生",
              en: "International curriculum students",
            },
            description: {
              zh: "A-Level BBB以上或IB 28-32分可申请澳门大学、澳门科技大学。雅思6.0或托福80。",
              en: "A-Level BBB+ or IB 28-32 for UM, MUST. IELTS 6.0 or TOEFL 80.",
            },
          },
          {
            method: { zh: "副学位课程", en: "Associate Degree" },
            audience: {
              zh: "高考二本线上，英语良好",
              en: "Tier 2 line, good English",
            },
            description: {
              zh: "澳门部分院校提供2年副学位课程，毕业后可升读澳门或海外大学本科最后2年。",
              en: "2-year Associate programs. Can transfer to final 2 years of Bachelor in Macau or overseas.",
            },
          },
          {
            method: { zh: "中外合作项目", en: "Sino-Foreign Programs" },
            audience: {
              zh: "各层次高中毕业生",
              en: "All levels of high school grads",
            },
            description: {
              zh: "澳门城市大学等院校与境外大学合作办学，学费相对廉宜，录取标准灵活，毕业获境外学位。",
              en: "Joint programs with overseas universities. Lower tuition. Flexible admission. Foreign degree upon graduation.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "硕士直录", en: "Master's Direct Entry" },
            audience: { zh: "本科毕业生", en: "Bachelor Graduates" },
            description: {
              zh: "主要看重本科院校背景及均分。澳门大学多要求六级430或雅思6.0。",
              en: "Focus on GPA/Background. UM accepts CET-6 430 or IELTS 6.0.",
            },
          },
          {
            method: { zh: "授课型硕士", en: "Taught Master" },
            audience: { zh: "本科均分75-80以上", en: "GPA 75-80+" },
            description: {
              zh: "学制2年，学费相对便宜（每年5-8万澳门元）。毕业后可留澳工作或去港澳大湾区发展。",
              en: "2 years. Lower tuition (MOP 50-80k/year). Can work in Macau or Greater Bay Area after graduation.",
            },
          },
          {
            method: { zh: "研究型硕士", en: "Research Master" },
            audience: {
              zh: "有科研经历或计划申请博士",
              en: "Research background or PhD plans",
            },
            description: {
              zh: "学制2-3年，需要提前联系导师并提交研究计划。奖学金机会多，可覆盖学费和生活费。",
              en: "2-3 years. Need supervisor and research proposal. Scholarships available covering tuition and living.",
            },
          },
          {
            method: { zh: "MBA课程", en: "MBA Programs" },
            audience: { zh: "2年以上工作经验", en: "2+ years work experience" },
            description: {
              zh: "澳门大学、澳门科技大学提供MBA课程，学制2年，在大湾区认可度高，适合深耕大湾区市场的人士。",
              en: "UM, MUST offer MBA. 2 years. High recognition in Greater Bay Area. Suitable for professionals in GBA market.",
            },
          },
        ],
      },
    },
  },
  singapore: {
    undergrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "具体要求", en: "Requirements" },
        ],
        rows: [
          {
            method: { zh: "公立大学直录", en: "Public Uni Direct" },
            audience: {
              zh: "高考超一本线80-100分 + 雅思6.5/托福90",
              en: "High Gaokao + IELTS 6.5",
            },
            description: {
              zh: "包括国立大学(NUS)和南洋理工(NTU)，竞争极其激烈，通常需额外参加入学考试或面试。",
              en: "NUS/NTU. Extremely competitive. Often needs entry exam/interview.",
            },
          },
          {
            method: { zh: "私立大学", en: "Private University" },
            audience: {
              zh: "高二/高三学生，雅思5.5左右",
              en: "Year 11/12, IELTS 5.5",
            },
            description: {
              zh: "双联课程（如颁发伦敦大学、澳洲大学学位），学制短（2-3年），入学灵活，是名校跳板。",
              en: "Twinning programs awarding UK/AU degrees. Short duration (2-3y). Flexible entry.",
            },
          },
          {
            method: { zh: "A-Level考试（新加坡）", en: "Singapore A-Level" },
            audience: { zh: "优秀高中生", en: "Top High Schoolers" },
            description: {
              zh: "去新加坡读A-Level预备班，考出成绩申请公立大学，含金量最高。",
              en: "Study A-Level prep in Singapore. Highest recognition pathway.",
            },
          },
          {
            method: { zh: "理工学院路径", en: "Polytechnic Pathway" },
            audience: { zh: "高二/高三学生", en: "Year 11/12 students" },
            description: {
              zh: "读完3年理工学院Diploma，可申请公立大学或海外名校。GPA高者可免修1年本科。",
              en: "3-year Polytechnic Diploma, then apply to public uni or overseas. High GPA may get 1-year credit exemption.",
            },
          },
        ],
      },
    },
    postgrad: {
      data: {
        headers: [
          { zh: "升学方式", en: "Pathway" },
          { zh: "具体说明", en: "Description" },
        ],
        rows: [
          {
            method: { zh: "公立大学硕士", en: "Public Uni Master" },
            audience: {
              zh: "985/211均分80+，雅思6.5-7.0",
              en: "Top Tier Uni grads, GPA 80+, IELTS 6.5-7.0",
            },
            description: {
              zh: "学制1-1.5年，世界排名极高，申请难度大，部分商科需GMAT。",
              en: "1-1.5 years. Top ranking. High difficulty. GMAT often needed for Biz.",
            },
          },
          {
            method: { zh: "私立大学硕士", en: "Private Uni Master" },
            audience: { zh: "本科均分70左右", en: "GPA around 70" },
            description: {
              zh: "颁发英澳合作名校学位，学制1年，回国可认证。",
              en: "Awards UK/AU degrees. 1 year. Recognized globally.",
            },
          },
          {
            method: { zh: "研究型硕士", en: "Research Master" },
            audience: {
              zh: "有科研背景、GPA 85+",
              en: "Research background, GPA 85+",
            },
            description: {
              zh: "主要由NUS和NTU提供，学制2年，需要完成研究课题。全奖机会多，可覆盖学费和生活费。",
              en: "Mainly NUS/NTU. 2 years. Research project required. Full funding available covering tuition and living.",
            },
          },
          {
            method: { zh: "MBA课程", en: "MBA Programs" },
            audience: {
              zh: "3年以上管理经验",
              en: "3+ years management experience",
            },
            description: {
              zh: "NUS/NTU/SMU的MBA全球排名顶尖，学制1-2年。需要GMAT 650+、托福100+、丰富的管理经验。",
              en: "NUS/NTU/SMU MBA globally top-ranked. 1-2 years. Requires GMAT 650+, TOEFL 100+, rich management experience.",
            },
          },
        ],
      },
    },
  },
};

export const countryOptions = [
  { value: "uk", label: { zh: "英国", en: "UK" } },
  { value: "australia", label: { zh: "澳洲", en: "Australia" } },
  { value: "newzealand", label: { zh: "新西兰", en: "New Zealand" } },
  { value: "us", label: { zh: "美国", en: "USA" } },
  { value: "canada", label: { zh: "加拿大", en: "Canada" } },
  { value: "hk", label: { zh: "中国香港", en: "Hong Kong" } },
  { value: "macau", label: { zh: "中国澳门", en: "Macau" } },
  { value: "singapore", label: { zh: "新加坡", en: "Singapore" } },
];

export const degreeOptions = [
  { value: "undergrad", label: { zh: "本科", en: "Undergraduate" } },
  { value: "postgrad", label: { zh: "硕博", en: "Postgraduate" } },
];
