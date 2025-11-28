# Apex Education Website - Official Client

A multilingual education services website built with Astro, featuring three specialized centers: UCAN Tutoring Center, Simple Language Training Center, and Rise Academic Planning Center.

## 🌟 Features

- **Multilingual Support**: Full Chinese (zh) and English (en) support with Astro i18n
- **Content Management System**: Centralized content management ready for CMS integration
- **Three Specialized Centers**: Independent pages for each educational center
- **Course Management**: Dynamic course listings and detail pages
- **Blog/Education Info**: News and educational resources section
- **Responsive Design**: Mobile-first, fully responsive layouts
- **Type-Safe**: Full TypeScript support for data structures

## 📁 Project Structure

```
/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable components
│   │   ├── home/            # Homepage-specific components
│   │   │   ├── Hero.astro
│   │   │   ├── AboutSection.astro
│   │   │   ├── CentersSection.astro
│   │   │   ├── CourseHighlights.astro
│   │   │   └── HomeBlogSection.astro
│   │   ├── pages/           # Page components
│   │   │   ├── AboutPage.astro
│   │   │   ├── CenterPage.astro
│   │   │   ├── CoursePage.astro
│   │   │   ├── EducationInfoPage.astro
│   │   │   ├── HomePage.astro
│   │   │   └── PostPage.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── QrFloat.astro
│   ├── data/                # Data management layer
│   │   ├── types.ts         # TypeScript type definitions
│   │   ├── content.ts       # Centralized content (CMS-ready)
│   │   ├── centers.ts       # Center data
│   │   ├── courses.ts       # Course data
│   │   ├── posts.ts         # Blog/news posts
│   │   └── navigation.ts    # Navigation structure
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/               # File-based routing
│       ├── index.astro      # Homepage (zh)
│       ├── about.astro
│       ├── education-info/
│       ├── [center]/        # Dynamic center pages
│       └── en/              # English pages
└── package.json
```

## 🗂️ Data Management Architecture

### Content Separation Philosophy

This project implements a **strict separation between data and presentation** to prepare for future CMS integration. All user-editable content is managed through centralized data files.

### Data Files Overview

#### 1. **`src/data/types.ts`** - Type Definitions
Defines TypeScript interfaces for all data structures:
- `Locale`: Language type (`'zh' | 'en'`)
- `TranslatedText`: Bilingual text object
- `Course`: Course information structure
- `Center`: Education center structure
- `Post`: Blog/news post structure
- `NavItem`: Navigation item structure

#### 2. **`src/data/content.ts`** - Centralized Content (⭐ CMS-Ready)
**This is the primary file for managing static page content.**

Structure:
```typescript
{
  home: {
    hero: { slides: [...] },
    about: { title, subtitle, description, ... },
    centers: { heading, subheading },
    courseHighlights: { heading, subheading, ... },
    blog: { heading, subheading, ... }
  },
  pages: {
    about: { hero, mission, advantages, history },
    educationInfo: { hero, sidebar, ... },
    post: { shareHeading, consultation, ... },
    center: { introHeading, coursesHeading, ... },
    course: { inquireHeading, targetAudienceItems, ... }
  },
  common: {
    navigation: { home, about, centers, ... },
    buttons: { learnMore, viewDetails, ... },
    labels: { popularCourses, search, ... }
  },
  footer: {
    brandDescription,
    quickLinks,
    centersLinks,
    newsletter
  },
  qrFloat: { scanText, subText },
  contact: { phone, email, ... }
}
```

**Key Features:**
- All text content in one place
- Bilingual support built-in
- Easy to replace with CMS API calls
- Type-safe through TypeScript

#### 3. **`src/data/centers.ts`** - Center Data
Manages the three education centers:
- UCAN Tutoring Center
- Simple Language Training Center  
- Rise Academic Planning Center

Each center includes:
- ID, slug, name, description
- Hero image
- Associated courses
- Slogans

#### 4. **`src/data/courses.ts`** - Course Catalog
All course offerings across all centers:
- Course names and descriptions
- Tags, levels, duration
- Center associations
- Localized content

#### 5. **`src/data/posts.ts`** - Blog/News Content
Educational articles and news posts:
- Titles, excerpts, full content
- Categories and dates
- Images
- Localized for both languages

#### 6. **`src/data/navigation.ts`** - Site Navigation
Main navigation structure with:
- Top-level links
- Dropdown menus
- Localized labels

### How to Update Content

#### For Static Page Content (Headings, Buttons, Labels)
Edit `src/data/content.ts`:

```typescript
// Example: Change homepage hero title
content.home.hero.slides[0].title = {
  zh: '新的中文标题',
  en: 'New English Title'
}

// Example: Update button text
content.common.buttons.learnMore = {
  zh: '了解详情',
  en: 'Learn More'
}
```

#### For Dynamic Content (Centers, Courses, Posts)
Edit the respective data files:

**Centers:** `src/data/centers.ts`
**Courses:** `src/data/courses.ts`
**Posts:** `src/data/posts.ts`

#### Component Usage Example

Components consume centralized content:

```astro
---
import { content as siteContent } from '../../data/content';
import type { Locale } from '../../data/types';

const locale: Locale = 'zh';
const heroContent = siteContent.home.hero;
---

<h1>{heroContent.slides[0].title[locale]}</h1>
```

## 🔄 CMS Integration Roadmap

### Current State: JSON Files
All content is managed through TypeScript/JSON files in `src/data/`.

### Future State: Headless CMS
To integrate with a CMS (Strapi, Contentful, Sanity, etc.):

1. **Keep the same data structure** - The current TypeScript interfaces define your CMS schema
2. **Replace static imports** - Change from:
   ```typescript
   import { content } from '../../data/content';
   ```
   To:
   ```typescript
   const content = await fetchFromCMS();
   ```
3. **Update build process** - Fetch data at build time or use SSR

### Migration Steps

1. **Phase 1: Current** ✅
   - All content in `src/data/*.ts` files
   - Type-safe, version controlled
   - Easy to edit for developers

2. **Phase 2: API Wrapper** (Next)
   - Create `src/lib/cms.ts` wrapper
   - Implement fetcher functions
   - Maintain same data structure

3. **Phase 3: CMS Integration** (Future)
   - Set up headless CMS
   - Configure content models based on TypeScript types
   - Switch data source from files to API

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro check` | Type-check Astro files |

## 🌐 Internationalization (i18n)

### Supported Languages
- Chinese (`zh`) - Default
- English (`en`)

### Adding a New Language

1. **Update types:**
   ```typescript
   // src/data/types.ts
   export type Locale = 'zh' | 'en' | 'fr'; // Add new language
   ```

2. **Add translations:**
   Update all `TranslatedText` objects in content files to include the new locale.

3. **Configure Astro i18n:**
   ```javascript
   // astro.config.mjs
   i18n: {
     locales: ['zh', 'en', 'fr'],
     defaultLocale: 'zh'
   }
   ```

## 📝 Content Guidelines

### Translatable Content
All user-facing text should be:
- Defined in `src/data/content.ts`
- Use `TranslatedText` type
- Include all supported locales

### Non-Translatable Content
- File paths and slugs
- Technical identifiers
- URLs (use locale-aware URL helpers)

## 🎨 Styling

- **Framework**: Tailwind CSS (utility-first)
- **Color Scheme**: 
  - Primary Blue: `rgb(21, 26, 95)`
  - Accent Red: `rgb(193, 9, 35)`
- **Responsive**: Mobile-first approach
- **CSS Variables**: Defined in BaseLayout

## 🚀 Deployment

This site is built as a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

For SSR (Server-Side Rendering) capabilities for dynamic content from CMS:
- Configure Astro adapter
- Deploy to Node.js hosting or serverless platforms

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🛠️ Development Best Practices

1. **Always use centralized content** - Never hardcode user-facing text in components
2. **Type safety** - Leverage TypeScript for data structures
3. **Consistent naming** - Follow existing naming conventions in data files
4. **Locale-aware** - Always provide translations for both languages
5. **Component reusability** - Keep components focused and reusable

## 📞 Support

For questions or issues, please contact the development team or open an issue in the project repository.

---

Built with ❤️ using [Astro](https://astro.build)
