# Data Management Guide

This document provides detailed information about the data management system in the Apex Education website.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Files Reference](#data-files-reference)
3. [Content Organization](#content-organization)
4. [Adding New Content](#adding-new-content)
5. [CMS Migration Strategy](#cms-migration-strategy)
6. [Best Practices](#best-practices)

## Architecture Overview

### Design Principles

The data management system is built on three core principles:

1. **Separation of Concerns**: Content is completely separated from presentation logic
2. **Type Safety**: All data structures are strictly typed with TypeScript
3. **CMS-Ready**: The structure is designed to be easily replaced by a headless CMS

### Data Flow

```
┌─────────────────┐
│  Data Sources   │
│  (src/data/)    │
└────────┬────────┘
         │
         ├─────────────┐
         │             │
    ┌────▼────┐   ┌────▼────┐
    │ Static  │   │ Dynamic │
    │ Content │   │ Content │
    │ (UI)    │   │(Centers)│
    └────┬────┘   └────┬────┘
         │             │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │ Components  │
         │  (Astro)    │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │   Pages     │
         └─────────────┘
```

## Data Files Reference

### 1. types.ts

**Purpose**: Define TypeScript interfaces for all data structures

**Key Types**:

```typescript
// Language selector
export type Locale = 'zh' | 'en';

// Bilingual text container
export interface TranslatedText {
  zh: string;
  en: string;
}

// Course structure
export interface Course {
  id: string;
  slug: string;
  centerId: 'ucan' | 'simple' | 'rise';
  name: TranslatedText;
  shortDescription: TranslatedText;
  level?: TranslatedText;
  tags?: TranslatedText[];
  duration?: TranslatedText;
  price?: TranslatedText;
  description?: TranslatedText;
}

// Education center structure
export interface Center {
  id: 'ucan' | 'simple' | 'rise';
  slug: string;
  name: TranslatedText;
  slogan?: TranslatedText;
  description: TranslatedText;
  heroImage?: string;
  courses: string[]; // array of Course.id
}

// Blog/news post structure
export interface Post {
  id: string;
  slug: string;
  title: TranslatedText;
  excerpt: TranslatedText;
  content: TranslatedText;
  date: string;
  category: TranslatedText;
  image: string;
}

// Navigation item structure
export interface NavItem {
  label: TranslatedText;
  href: string;
  children?: NavItem[];
}
```

**When to Edit**:
- Adding new content types
- Modifying existing data structures
- Adding new locales

### 2. content.ts

**Purpose**: Centralized storage for all static UI content

**Structure**:

```typescript
export const content = {
  home: {
    // Homepage sections
    hero: { slides: [...] },
    about: { ... },
    centers: { ... },
    courseHighlights: { ... },
    blog: { ... }
  },
  pages: {
    // Individual page content
    about: { hero, mission, advantages, history },
    educationInfo: { ... },
    post: { ... },
    center: { ... },
    course: { ... }
  },
  common: {
    // Reusable UI elements
    navigation: { ... },
    buttons: { ... },
    labels: { ... }
  },
  footer: { ... },
  qrFloat: { ... },
  contact: { ... }
}
```

**When to Edit**:
- Changing page headings
- Updating button labels
- Modifying hero sections
- Updating any static text

**Usage Example**:

```astro
---
import { content as siteContent } from '../../data/content';

const locale: Locale = 'zh';
const aboutContent = siteContent.home.about;
---

<h2>{aboutContent.title[locale]}</h2>
<p>{aboutContent.description[locale]}</p>
```

### 3. centers.ts

**Purpose**: Define the three education centers

**Data Structure**:

```typescript
export const centers: Center[] = [
  {
    id: 'ucan',
    slug: 'ucan',
    name: {
      zh: '优冠学术辅导中心',
      en: 'UCAN Tutoring Center'
    },
    slogan: {
      zh: '专业国际课程辅导',
      en: 'Professional International Curriculum Tutoring'
    },
    description: { ... },
    heroImage: 'https://...',
    courses: ['toefl-prep', 'ielts-advanced', ...]
  },
  // ... other centers
];
```

**When to Edit**:
- Adding/removing centers
- Updating center descriptions
- Changing hero images
- Modifying course assignments

### 4. courses.ts

**Purpose**: Catalog of all course offerings

**Data Structure**:

```typescript
export const courses: Course[] = [
  {
    id: 'toefl-prep',
    slug: 'toefl-prep',
    centerId: 'simple',
    name: {
      zh: 'TOEFL 备考强化班',
      en: 'TOEFL Prep Intensive'
    },
    shortDescription: { ... },
    level: {
      zh: '中级-高级',
      en: 'Intermediate-Advanced'
    },
    tags: [
      { zh: '标化考试', en: 'Standardized Test' },
      { zh: '语言培训', en: 'Language Training' }
    ],
    description: { ... }
  },
  // ... other courses
];
```

**When to Edit**:
- Adding new courses
- Updating course information
- Changing course categorization
- Modifying tags and levels

### 5. posts.ts

**Purpose**: Blog and news articles

**Data Structure**:

```typescript
export const posts: Post[] = [
  {
    id: '1',
    slug: '2024-us-college-trends',
    title: {
      zh: '2024年美国本科申请趋势解读',
      en: 'Analysis of 2024 US Undergraduate Application Trends'
    },
    excerpt: { ... },
    content: { ... },
    date: '2023-11-15',
    category: {
      zh: '升学指导',
      en: 'Admission Guidance'
    },
    image: 'https://...'
  },
  // ... other posts
];
```

**When to Edit**:
- Publishing new articles
- Updating existing posts
- Changing categories
- Modifying featured images

### 6. navigation.ts

**Purpose**: Site navigation structure

**Data Structure**:

```typescript
export const navItems: NavItem[] = [
  {
    label: { zh: '首页', en: 'Home' },
    href: '/'
  },
  {
    label: { zh: '旗下中心', en: 'Our Centers' },
    href: '#',
    children: [
      {
        label: { zh: '优冠学术辅导中心', en: 'UCAN Tutoring Center' },
        href: '/ucan'
      },
      // ... other children
    ]
  },
  // ... other nav items
];
```

**When to Edit**:
- Changing navigation labels
- Adding/removing menu items
- Restructuring navigation hierarchy

## Content Organization

### Naming Conventions

1. **File Names**: camelCase for data files (`content.ts`, `centers.ts`)
2. **Object Keys**: camelCase for properties (`heroImage`, `subheading`)
3. **IDs**: kebab-case for identifiers (`toefl-prep`, `ucan`)
4. **Slugs**: kebab-case for URLs (`simple-language`, `2024-us-college-trends`)

### Localization Pattern

All user-facing text uses the `TranslatedText` pattern:

```typescript
{
  zh: '中文内容',
  en: 'English content'
}
```

**Usage in components**:

```astro
{translatedText[locale]}
```

## Adding New Content

### Adding a New Page Section

1. **Define content in `content.ts`**:

```typescript
// In src/data/content.ts
export const content = {
  pages: {
    // ... existing pages
    newPage: {
      hero: {
        title: { zh: '新页面标题', en: 'New Page Title' },
        subtitle: { zh: '副标题', en: 'Subtitle' }
      },
      sections: {
        intro: { zh: '介绍', en: 'Introduction' }
      }
    }
  }
}
```

2. **Create the page component**:

```astro
---
// src/components/pages/NewPage.astro
import { content as siteContent } from '../../data/content';
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const pageContent = siteContent.pages.newPage;
---

<section>
  <h1>{pageContent.hero.title[locale]}</h1>
  <p>{pageContent.hero.subtitle[locale]}</p>
</section>
```

3. **Create the route**:

```astro
---
// src/pages/new-page.astro
import NewPage from '../components/pages/NewPage.astro';
---

<NewPage locale="zh" />
```

### Adding a New Center

1. **Add to `centers.ts`**:

```typescript
export const centers: Center[] = [
  // ... existing centers
  {
    id: 'new-center',
    slug: 'new-center',
    name: {
      zh: '新中心名称',
      en: 'New Center Name'
    },
    description: {
      zh: '中心描述',
      en: 'Center description'
    },
    heroImage: 'https://...',
    courses: []
  }
];
```

2. **Create center page route**:

```astro
// src/pages/new-center.astro
// Follow existing center page pattern
```

### Adding a New Course

1. **Add to `courses.ts`**:

```typescript
export const courses: Course[] = [
  // ... existing courses
  {
    id: 'new-course-id',
    slug: 'new-course',
    centerId: 'ucan', // or 'simple' or 'rise'
    name: {
      zh: '新课程名称',
      en: 'New Course Name'
    },
    shortDescription: {
      zh: '简短描述',
      en: 'Short description'
    },
    tags: [
      { zh: '标签', en: 'Tag' }
    ]
  }
];
```

2. **Update center's course list**:

```typescript
// In centers.ts
{
  id: 'ucan',
  courses: ['existing-course', 'new-course-id'] // Add new course ID
}
```

### Adding a New Blog Post

```typescript
// In posts.ts
export const posts: Post[] = [
  // ... existing posts
  {
    id: '4',
    slug: 'new-post-slug',
    title: {
      zh: '文章标题',
      en: 'Article Title'
    },
    excerpt: {
      zh: '文章摘要',
      en: 'Article excerpt'
    },
    content: {
      zh: '完整内容',
      en: 'Full content'
    },
    date: '2024-01-15',
    category: {
      zh: '分类',
      en: 'Category'
    },
    image: 'https://...'
  }
];
```

## CMS Migration Strategy

### Phase 1: Current State (JSON/TS Files)

**Pros**:
- Version controlled
- Type-safe
- Fast development
- No external dependencies

**Cons**:
- Requires developer to edit
- No visual editor
- Limited collaboration

### Phase 2: API Wrapper Layer

Create abstraction layer for future CMS:

```typescript
// src/lib/cms.ts
import type { Center, Course, Post } from '../data/types';

// Current: Import from files
import { centers as staticCenters } from '../data/centers';
import { courses as staticCourses } from '../data/courses';
import { posts as staticPosts } from '../data/posts';

// Future: Fetch from CMS API
export async function getCenters(): Promise<Center[]> {
  // For now, return static data
  return staticCenters;
  
  // Future implementation:
  // const response = await fetch('https://cms.example.com/api/centers');
  // return response.json();
}

export async function getCourses(): Promise<Course[]> {
  return staticCourses;
}

export async function getPosts(): Promise<Post[]> {
  return staticPosts;
}

export async function getContent() {
  // Current: Import from file
  const { content } = await import('../data/content');
  return content;
  
  // Future: Fetch from CMS
  // return fetch('https://cms.example.com/api/content').then(r => r.json());
}
```

**Usage in components**:

```astro
---
import { getCenters, getContent } from '../../lib/cms';

const centers = await getCenters();
const content = await getContent();
---
```

### Phase 3: Full CMS Integration

1. **Choose a CMS**: Strapi, Contentful, Sanity, etc.

2. **Map data structures**: Use TypeScript interfaces as schema

3. **Update CMS wrapper**:

```typescript
// src/lib/cms.ts
const CMS_URL = import.meta.env.CMS_URL;
const CMS_TOKEN = import.meta.env.CMS_TOKEN;

export async function getCenters(): Promise<Center[]> {
  const response = await fetch(`${CMS_URL}/api/centers`, {
    headers: {
      'Authorization': `Bearer ${CMS_TOKEN}`
    }
  });
  return response.json();
}
```

4. **Configure build**: Fetch data at build time for static generation

### CMS Schema Mapping

TypeScript interfaces map directly to CMS content types:

| TypeScript Type | CMS Content Type | Fields |
|----------------|------------------|---------|
| `Center` | Center | id, slug, name (i18n), description (i18n), heroImage, courses (relation) |
| `Course` | Course | id, slug, centerId (relation), name (i18n), shortDescription (i18n), tags (repeater) |
| `Post` | Post/Article | id, slug, title (i18n), excerpt (i18n), content (rich text/i18n), date, category (i18n), image (media) |
| `content` object | Singleton/Global | Nested structure for all static content |

## Best Practices

### 1. Always Use Centralized Content

❌ **Don't do this**:
```astro
<h1>{locale === 'zh' ? '关于我们' : 'About Us'}</h1>
```

✅ **Do this**:
```astro
---
import { content as siteContent } from '../../data/content';
---
<h1>{siteContent.pages.about.hero.title[locale]}</h1>
```

### 2. Maintain Type Safety

Always import and use proper types:

```astro
---
import type { Locale } from '../../data/types';

interface Props {
  locale: Locale; // Not 'string'
}
---
```

### 3. Consistent Naming

- **Data files**: `centers.ts`, `courses.ts`, `content.ts`
- **IDs**: `toefl-prep`, `ielts-advanced`
- **Slugs**: Match IDs for consistency
- **Properties**: camelCase

### 4. Bilingual Completeness

Ensure all `TranslatedText` objects have both languages:

```typescript
// ✅ Good
name: {
  zh: '课程名称',
  en: 'Course Name'
}

// ❌ Missing english
name: {
  zh: '课程名称'
}
```

### 5. Image Management

Store image URLs in data files:

```typescript
// In content.ts or centers.ts
heroImage: 'https://images.unsplash.com/photo-...'

// Or for future CMS:
heroImage: '/uploads/hero-image.jpg' // CMS-uploaded images
```

### 6. Content Organization

Group related content logically:

```typescript
// ✅ Good - grouped by page
pages: {
  about: {
    hero: { ... },
    mission: { ... },
    history: { ... }
  }
}

// ❌ Bad - flat structure
aboutHeroTitle: { ... },
aboutMissionTitle: { ... },
aboutHistoryTitle: { ... }
```

## Troubleshooting

### Content Not Updating

1. **Check import**: Ensure you're importing from the correct file
2. **Restart dev server**: Some changes require a server restart
3. **Clear cache**: `rm -rf dist .astro`

### Type Errors

1. **Ensure locale is typed**: `const locale: Locale = 'zh';`
2. **Check TranslatedText**: All bilingual fields must have both `zh` and `en`
3. **Import types**: Always import from `'../data/types'`

### Missing Content

1. **Verify data file**: Check that content exists in data file
2. **Check nested structure**: Ensure you're accessing the correct nested property
3. **Locale mismatch**: Verify you're using the correct locale key

---

For questions or clarifications, please refer to the main README.md or contact the development team.
