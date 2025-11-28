export type Locale = 'zh' | 'en';

export interface TranslatedText {
  zh: string;
  en: string;
}

export interface Course {
  id: string;
  slug: string;
  centerId: 'ucan' | 'simple' | 'rise';
  name: TranslatedText;
  shortDescription: TranslatedText;
  level?: TranslatedText;
  tags?: TranslatedText[]; // Display tags
  duration?: TranslatedText;
  price?: TranslatedText;
  description?: TranslatedText; // Full description
}

export interface Center {
  id: 'ucan' | 'simple' | 'rise';
  slug: string;
  name: TranslatedText;
  slogan?: TranslatedText;
  description: TranslatedText;
  heroImage?: string;
  courses: string[]; // array of Course.id
}

export interface NavItem {
  label: TranslatedText;
  href: string; // Base href (without locale prefix, handled by component)
  children?: NavItem[];
}

export interface Post {
  id: string;
  slug: string;
  title: TranslatedText;
  excerpt: TranslatedText;
  content: TranslatedText; // Placeholder for full content
  date: string;
  category: TranslatedText;
  image: string;
}
