import type { TranslatedText } from './types';

export type PathwayDegree = 'undergrad' | 'postgrad';

export interface PathwayTableRow {
  method: TranslatedText;  // 升学方式
  audience: TranslatedText; // 适合人群
  description: TranslatedText; // 具体说明 / 具体要求 / 可申请院校 / 录取要求
  requirements?: TranslatedText; // Specifically for some tables that split description/requirements
}

export interface PathwayTableData {
  headers: TranslatedText[]; // Custom headers for the table (e.g. Method, Audience, Description)
  rows: PathwayTableRow[];
}

export interface CountryPathways {
  [key: string]: { // 'undergrad' | 'postgrad'
    data: PathwayTableData;
  }
}

export const risePathways: Record<string, CountryPathways> = {
  uk: {
    undergrad: {
      data: {
        headers: [
          { zh: '升学方式', en: 'Pathway' },
          { zh: '适合人群', en: 'Target Audience' },
          { zh: '具体说明', en: 'Description' }
        ],
        rows: [
          {
             method: { zh: '国际体系课程直入', en: 'Direct Entry (Intl Curriculum)' },
             audience: { zh: 'A-Level/IB/AP/OSSD/SAT等国际课程体系的学生', en: 'Students in A-Level/IB/AP/OSSD/SAT systems' },
             description: { zh: '国际体系课程认可度高、课程科目丰富，学生可以根据自己擅长的科目进行选课并参加考试。', en: 'High recognition of international curriculums with diverse subjects. Students can choose subjects they excel in.' }
          },
          {
             method: { zh: '高考直入', en: 'Gaokao Direct Entry' },
             audience: { zh: '高三参加完高考的应届生', en: 'High school graduates who took Gaokao' },
             description: { zh: '英国部分大学接受中国高考成绩，高考生可凭高考成绩直接申请英国大学一年级。', en: 'Some UK universities accept Gaokao scores for direct entry into Year 1.' }
          },
          {
             method: { zh: '本科预科', en: 'Foundation Year' },
             audience: { zh: '高二/高三在读学生', en: 'Year 11/12 students' },
             description: { zh: '本科预科主要是为了不满足直录要求，需要通过一年预科课程衔接后，直接进入本科大一。', en: 'Designed for students not meeting direct entry requirements. Bridging course for 1 year before entering Year 1.' }
          },
          {
             method: { zh: '国际大一', en: 'International Year One' },
             audience: { zh: '高三毕业学生', en: 'High school graduates' },
             description: { zh: '部分英国大学接受高中毕业生直接入读国际大一文凭课程，相当于英国大学本科一年级，学生完成后可以直接进入到本科二年级。', en: 'Diploma equivalent to Year 1. Upon completion, students progress to Year 2 of the degree.' }
          },
          {
             method: { zh: 'Top up插读本科', en: 'Top-up Degree' },
             audience: { zh: '大专', en: 'College Diploma holders' },
             description: { zh: '英国Top-up课程为本科课程的最后一年，相当于国内专升本或者插读英国本科，学制为1年，成功完成课程的学生可以获得学士学位，与英国三年制本科毕业的学位一样。', en: 'Final year of a specialized degree. 1-year duration. Grants a Bachelor degree equivalent to a standard 3-year degree.' }
          }
        ]
      }
    },
    postgrad: {
      data: {
        headers: [{ zh: '升学方式', en: 'Pathway' }, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }],
        rows: [
          {
            method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
            audience: { zh: '本科毕业生', en: 'Bachelor Graduates' },
            description: { zh: '凭大学四年成绩单及语言成绩申请，一般需要GPA 75%以上，雅思6.5分。', en: 'Apply with transcript and language scores. Typically requires GPA 75%+ and IELTS 6.5.' }
          },
          {
             method: { zh: '硕士预科', en: 'Pre-Masters' },
             audience: { zh: '本科成绩不足或转专业学生', en: 'Low GPA or career changers' },
             description: { zh: '作为过渡课程，帮助学生适应英国教学模式，提升语言和学术能力，衔接硕士课程。', en: 'Bridging course to adapt to UK education, improve language/academic skills, leading to Master\'s.' }
          }
        ]
      }
    }
  },
  australia: {
    undergrad: {
      data: {
        headers: [{ zh: '升学方式', en: 'Pathway' }, { zh: '适合学生', en: 'Target Audience' }, { zh: '具体要求', en: 'Requirements' }],
        rows: [
          {
            method: { zh: '高考成绩直升', en: 'Gaokao Direct Entry' },
            audience: { zh: '高中应届毕业生', en: 'High School Graduates' },
            description: { zh: '澳洲八大（墨尔本大学除外）都认可高考成绩，国内高考生只要高考成绩达到标准，并且满足雅思条件，就可以凭借高考成绩直接升入澳洲高校的大一。', en: 'Go8 (except Melbourne) accept Gaokao. Direct entry to Year 1 with meeting score and IELTS requirements.' }
          },
          {
            method: { zh: '预科 + 本科', en: 'Foundation + Bachelor' },
            audience: { zh: '高二/高三在读或毕业生，平时均分80-85+', en: 'Year 11/12 students, GPA 80-85+' },
            description: { zh: '学生不参加高考，或高考成绩不足，可以通过预科进入澳洲八大。预科完成后直接进入本科大一。澳洲大学预科通常要求雅思分数5.0-6.0，需要在预科学习8个月-1年时间，后进入澳洲本科学习。', en: 'Via Foundation pathway if no Gaokao or low score. Requires IELTS 5.0-6.0, 8-12 months duration, then Year 1.' }
          },
          {
            method: { zh: '国际大一', en: 'Diploma / Int\'l Year 1' },
            audience: { zh: '普高学生不参加高考或高考分数不满足直录要求', en: 'High school grads (no/low Gaokao)' },
            description: { zh: '澳洲高校的国际大一课程学习内容和本科大一相同，完成国际大一课程后可以衔接大二。其优势在于可以节省时间成本，只需完成1年国际大一课程，加上2年本科，达到标准就能顺利毕业。申请要求：平时成绩80-85+，雅思6.0-6.5+。', en: 'Equivalent to Year 1 content, leads to Year 2. Saves time (1yr Diploma + 2yr Degree). Req: GPA 80-85+, IELTS 6.0-6.5+.' }
          }
        ]
      }
    },
    postgrad: {
      data: {
         headers: [{ zh: '升学方式', en: 'Pathway' }, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }],
         rows: [
            {
               method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
               audience: { zh: '本科毕业生，均分70-85+', en: 'Bachelor Grads, GPA 70-85+' },
               description: { zh: '澳洲八大通常要求均分75-85分，非八大要求70-75分。雅思一般要求6.5分。', en: 'Go8 requires GPA 75-85, Non-Go8 70-75. IELTS typically 6.5.' }
            },
            {
               method: { zh: '专升硕', en: 'Master\'s Qualifying / PQP' },
               audience: { zh: '大专毕业生/无学位证本科生', en: 'College grads / Bachelor w/o Degree' },
               description: { zh: '通过3-6个月的硕士预科课程（MQP/PQP），衔接澳洲大学硕士课程。是专科生提升学历的高效途径。', en: '3-6 months Pre-Master (MQP) leading to Master\'s degree. Efficient path for upgrading qualification.' }
            }
         ]
      }
    }
  },
  us: {
    undergrad: {
      data: {
        headers: [{ zh: '升学方式', en: 'Pathway' }, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }],
        rows: [
           {
             method: { zh: '国际体系课程直入', en: 'Direct Entry (Intl Curriculum)' },
             audience: { zh: 'A-Level/IB/AP/OSSD/SAT等国际课程体系的学生', en: 'Students in Intl Systems' },
             description: { zh: '国际体系课程认可度高、课程科目丰富，学生可以根据自己擅长的科目进行选课并参加考试。', en: 'High recognition, diverse subjects. Students choose subjects they excel in.' }
           },
           {
             method: { zh: '高考直入', en: 'Gaokao Direct' },
             audience: { zh: '高三参加完高考的应届生', en: 'Gaokao Takers' },
             description: { zh: '高考生可凭高考成绩直接申请美国大学一年级。', en: 'Apply directly to US universities Year 1 with Gaokao scores.' }
           },
           {
             method: { zh: '本科预科', en: 'Pathway Program' },
             audience: { zh: '高二/高三在读学生', en: 'Year 11/12 Students' },
             description: { zh: '本科预科主要是为了不满足直录要求，需要通过一年预科课程衔接后，直接进入本科大一。', en: 'For students not meeting direct entry requirements. 1 year bridge then Year 1.' }
           },
           {
             method: { zh: '国际大一', en: 'International Year One' },
             audience: { zh: '高三毕业学生', en: 'High School Grads' },
             description: { zh: '各大学自主设计课程内容及考试，就读完国际大一课程后直接升读大二。', en: 'University designed curriculum. Progress to Year 2 after completion.' }
           },
           {
             method: { zh: 'Top up插读本科', en: 'Transfer Admission' },
             audience: { zh: '大专', en: 'College Students' },
             description: { zh: 'Top-up课程为本科课程的最后一年，相当于国内专升本或者插读美国本科，学制为1年，成功完成课程的学生可以获得学士学位。', en: 'Final year transfer. equivalent to completing degree in 1 year.' }
           }
        ]
      }
    },
    postgrad: {
      data: {
          headers: [{ zh: '升学方式', en: 'Pathway' }, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }],
          rows: [
             {
                method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
                audience: { zh: '本科毕业生，GPA 3.0+', en: 'Bachelor Grads, GPA 3.0+' },
                description: { zh: '凭借本科成绩单、语言成绩（托福/雅思）及GRE/GMAT（部分专业需求）申请。', en: 'Apply with transcript, TOEFL/IELTS, and GRE/GMAT (if required).' }
             },
             {
                method: { zh: '硕士预科/桥梁课程', en: 'Pathway / Pre-Master' },
                audience: { zh: 'GPA或语言未达标者', en: 'Lower GPA or Language scores' },
                description: { zh: '为学术背景或语言能力稍弱的学生提供过渡，通过后可进入正式硕士项目。', en: 'Bridge program improving academic/language skills before full Master\'s.' }
             }
          ]
      }
    }
  },
  canada: {
    undergrad: {
      data: {
        headers: [
          { zh: '升学方式', en: 'Pathway' }, 
          { zh: '适合学生', en: 'Target Audience' }, 
          { zh: '可申请院校', en: 'Universities' }, 
          { zh: '录取要求', en: 'Requirements' }
        ],
        rows: [
          {
            method: { zh: '高考成绩直入', en: 'Direct Entry (Gaokao)' },
            audience: { zh: '高考成绩优秀，同时想拥有更多海外院校选择的学生', en: 'Good Gaokao score, seeking more options' },
            description: { zh: '多伦多大学，英属哥伦比亚大学，麦吉尔大学，麦克马斯特大学，滑铁卢大学等', en: 'UofT, UBC, McGill, McMaster, Waterloo, etc.' },
            requirements: { zh: '高考成绩超过一本线60-80分以上；会考成绩优秀；雅思6.5（单项6）', en: 'Gaokao 60-80+ above Tier 1; Excellent Huikao; IELTS 6.5 (6.0).' }
          },
          {
            method: { zh: '本科直录（无高考）', en: 'Direct Entry (No Gaokao)' },
            audience: { zh: '高考成绩不理想不参加高考，同时想去海外院校等学生', en: 'Low/No Gaokao score, seeking overseas study' },
            description: { zh: '渥太华大学，卡尔顿大学，约克大学，达尔豪斯大学等', en: 'uOttawa, Carleton, York, Dalhousie, etc.' },
            requirements: { zh: '高中成绩80-85分，无需高考，提供会考成绩即可；雅思6.5（单项6）', en: 'GPA 80-85, No Gaokao needed, Huikao req; IELTS 6.5 (6.0).' }
          },
          {
             method: { zh: '本科预科', en: 'Foundation' },
             audience: { zh: '高考成绩或高中成绩不满足直录，但同时想申请海外学校的学生', en: 'Score not met for direct entry' },
             description: { zh: '多伦多中央大学，西蒙飞莎大学-FIC，曼尼托巴大学-ICM，劳瑞尔大学等', en: 'Ryerson (TMU), SFU-FIC, UManitoba-ICM, Laurier, etc.' },
             requirements: { zh: '高二或高三结束后，高中成绩75-80以上；雅思成绩5.5-6，单项5-5.5', en: 'Finish Year 11/12, GPA 75-80+; IELTS 5.5-6.0 (5-5.5).' }
          }
        ]
      }
    },
    postgrad: {
      data: {
        headers: [
            { zh: '升学方式', en: 'Pathway' }, 
            { zh: '适合人群', en: 'Target Audience' }, 
            { zh: '具体说明', en: 'Description' },
            { zh: '申请条件', en: 'Conditions' }
        ],
        rows: [
          {
            method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
            audience: { zh: '本科学历，GPA3.0以上，英语水平达标', en: 'Bachelor Degree, GPA 3.0+, English requirement met' },
            description: { zh: '加拿大硕士通常1.5-2年学习时长。专业设置非常多元、创新，学历含金量高，就业前景好。', en: '1.5-2 years. Diverse and innovative majors. High degree value and good job prospects.' },
            requirements: { zh: 'GPA：3.0以上。排名越高的院校要求越高。常春藤院校普通要求3.6+。语言：托福80/雅思6.5，排名越高的院校要求越高。常春藤院校普通要求托福105+/雅思7.5。', en: 'GPA: 3.0+ (Ivy 3.6+). TOEFL 80/IELTS 6.5 (Ivy 105+/7.5).' }
          },
          {
            method: { zh: '双录取/研究生文凭课程', en: 'Dual/Post-Grad Cert' },
            audience: { zh: 'GPA偏低/本科无学位/专科/复杂学历', en: 'Low GPA / No Degree / Diploma / Complex background' },
            description: { zh: '双录取：主要针对托福/雅思无法达到直录的学生。先读学校自己的语言课程，达到级别后可以升读硕士。研文：主要针对GPA低于3.0无法直录硕士的学生，一年制的graduate diploma。', en: 'Dual: For students needing language prep. PGC: For GPA<3.0, 1-year graduate diploma.' },
            requirements: { zh: 'GPA：2.0—3.0 语言：低于托福80/雅思6.5，依据不同院校有不同的要求', en: 'GPA: 2.0-3.0. Language: Below TOEFL 80/IELTS 6.5.' }
          }
        ]
      }
    }
  },
  newzealand: {
     undergrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '预科 + 本科', en: 'Foundation + Bachelor' },
                 audience: { zh: '高二/高三完成', en: 'Year 11/12 Completed' },
                 description: { zh: '通往新西兰八大名校的最佳途径，预科学习8-12个月后升读大一。', en: 'Best path to NZ universities. 8-12 months Foundation then Year 1.' }
              },
              {
                 method: { zh: '高考成绩直录', en: 'Gaokao Direct' },
                 audience: { zh: '高考成绩达到一本线', en: 'Good Gaokao Score' },
                 description: { zh: '新西兰所有公立大学均接受中国高考成绩申请直录大一。', en: 'All NZ public universities accept Gaokao for direct Year 1 entry.' }
              },
              {
                 method: { zh: '大一文凭课程', en: 'Diploma' },
                 audience: { zh: '高三毕业生', en: 'High School Grads' },
                 description: { zh: '相当于大一课程，通过后直接升读大二。省时省费用。', en: 'Equivalent to Year 1. Progress to Year 2. Saves time and cost.' }
              }
           ] 
        } 
     },
     postgrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
                 audience: { zh: '本科毕业，均分70-75+', en: 'Bachelor Grads, GPA 70-75+' },
                 description: { zh: '新西兰硕士学制灵活（1-2年），部分专业接受跨专业申请。', en: 'Flexible duration (1-2 years). Some majors accept career changes.' }
              },
              {
                 method: { zh: '学士后文凭 GD', en: 'Graduate Diploma (GD)' },
                 audience: { zh: '想转专业或均分不够直录硕士', en: 'Career changers or Low GPA' },
                 description: { zh: '1年制课程，读完可作为跳板申请硕士，由于同属Level 7，也可用于工签申请。', en: '1 year course. Pathway to Master\'s or for work visa (Level 7).' }
              }
           ] 
        } 
     }
  },
  hk: {
     undergrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '具体要求', en: 'Requirements' }, { zh: '说明', en: 'Note' }], 
           rows: [
              {
                 method: { zh: '高考统招提前批', en: 'Gaokao Early Batch' },
                 audience: { zh: '高考超一本线100分以上（港中文/港城大）', en: 'Gaokao 100+ above Tier 1' },
                 description: { zh: '通过填报志愿进行录取，不占用常规志愿名额。', en: 'Admitted via standard volunteering system.' }
              },
              {
                 method: { zh: '独立招生', en: 'Independent Application' },
                 audience: { zh: '高考超一本线50-80分+英语120分+', en: 'Gaokao 50-80+ above Tier 1, English 120+' },
                 description: { zh: '需单独向学校递交申请，并参加全英文面试（港大/科大等）。', en: 'Apply directly to uni. Requires English interview (HKU/HKUST etc).' }
              },
              {
                 method: { zh: '副学士', en: 'Associate Degree' },
                 audience: { zh: '高考成绩本科线以上，英语90分+', en: 'Gaokao above Bachelor line, English 90+' },
                 description: { zh: '2年副学士+2年本科，毕业证书与直录无异，是进入港八大的黄金跳板。', en: '2yr Associate + 2yr Bachelor. Same degree certificate. Golden pathway to top HK unis.' }
              }
           ] 
        } 
     },
     postgrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '适合人群', en: 'Target Audience' }, { zh: '具体说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '授课型硕士', en: 'Taught Master' },
                 audience: { zh: '本科毕业生', en: 'Bachelor Graduates' },
                 description: { zh: '学制1年，高性价比。申请需提供雅思（6.0-6.5+），985/211均分80+，双非85+。', en: '1 year duration. High ROI. Requires IELTS 6.0-6.5+, GPA 80-85+.' }
              }
           ] 
        } 
     }
  },
  macau: {
     undergrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '独立招生（高考）', en: 'Independent (Gaokao)' },
                 audience: { zh: '一本/二本线上学生', en: 'Tier 1/2 Gaokao students' },
                 description: { zh: '澳大/澳科技等院校独立招生，不影响内地录取。二本线上英文良好也有机会。', en: 'Direct application. Does not conflict with mainland offers.' }
              }
           ] 
        } 
     },
     postgrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '硕士直录', en: 'Master\'s Direct Entry' },
                 audience: { zh: '本科毕业生', en: 'Bachelor Graduates' },
                 description: { zh: '主要看重本科院校背景及均分。澳门大学多要求六级430或雅思6.0。', en: 'Focus on GPA/Background. UM accepts CET-6 430 or IELTS 6.0.' }
              }
           ] 
        } 
     }
  },
  singapore: {
     undergrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '具体要求', en: 'Requirements' }], 
           rows: [
              {
                 method: { zh: '公立大学直录', en: 'Public Uni Direct' },
                 audience: { zh: '高考超一本线80-100分 + 雅思6.5/托福90', en: 'High Gaokao + IELTS 6.5' },
                 description: { zh: '包括国立大学(NUS)和南洋理工(NTU)，竞争极其激烈，通常需额外参加入学考试或面试。', en: 'NUS/NTU. Extremely competitive. Often needs entry exam/interview.' }
              },
              {
                 method: { zh: '私立大学', en: 'Private University' },
                 audience: { zh: '高二/高三学生，雅思5.5左右', en: 'Year 11/12, IELTS 5.5' },
                 description: { zh: '双联课程（如颁发伦敦大学、澳洲大学学位），学制短（2-3年），入学灵活，是名校跳板。', en: 'Twinning programs awarding UK/AU degrees. Short duration (2-3y). Flexible entry.' }
              },
              {
                 method: { zh: 'A-Level考试（新加坡）', en: 'Singapore A-Level' },
                 audience: { zh: '优秀高中生', en: 'Top High Schoolers' },
                 description: { zh: '去新加坡读A-Level预备班，考出成绩申请公立大学，含金量最高。', en: 'Study A-Level prep in Singapore. Highest recognition pathway.' }
              }
           ] 
        } 
     },
     postgrad: { 
        data: { 
           headers: [{zh:'升学方式',en:'Pathway'}, { zh: '具体说明', en: 'Description' }], 
           rows: [
              {
                 method: { zh: '公立大学硕士', en: 'Public Uni Master' },
                 audience: { zh: '985/211均分80+，雅思6.5-7.0', en: 'Top Tier Uni grads, GPA 80+, IELTS 6.5-7.0' },
                 description: { zh: '学制1-1.5年，世界排名极高，申请难度大，部分商科需GMAT。', en: '1-1.5 years. Top ranking. High difficulty. GMAT often needed for Biz.' }
              },
              {
                 method: { zh: '私立大学硕士', en: 'Private Uni Master' },
                 audience: { zh: '本科均分70左右', en: 'GPA around 70' },
                 description: { zh: '颁发英澳合作名校学位，学制1年，回国可认证。', en: 'Awards UK/AU degrees. 1 year. Recognized globally.' }
              }
           ] 
        } 
     }
  }
};


export const countryOptions = [
  { value: 'uk', label: { zh: '英国', en: 'UK' } },
  { value: 'australia', label: { zh: '澳洲', en: 'Australia' } },
  { value: 'newzealand', label: { zh: '新西兰', en: 'New Zealand' } },
  { value: 'us', label: { zh: '美国', en: 'USA' } },
  { value: 'canada', label: { zh: '加拿大', en: 'Canada' } },
  { value: 'hk', label: { zh: '中国香港', en: 'Hong Kong' } },
  { value: 'macau', label: { zh: '中国澳门', en: 'Macau' } },
  { value: 'singapore', label: { zh: '新加坡', en: 'Singapore' } }
];

export const degreeOptions = [
  { value: 'undergrad', label: { zh: '本科', en: 'Undergraduate' } },
  { value: 'postgrad', label: { zh: '硕博', en: 'Postgraduate' } }
];
