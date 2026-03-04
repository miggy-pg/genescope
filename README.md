# Encarta Encyclopedia Web App

A modern web application inspired by Microsoft Encarta Kids 2009, bringing the classic multimedia encyclopedia experience to the browser.

![Encarta Reference](screenshots/encarta.jpeg)

## Project Overview

Microsoft Encarta was a digital multimedia encyclopedia published by Microsoft from 1993 to 2009. It was one of the first multimedia encyclopedias, featuring articles, images, videos, and interactive content. The Encarta Kids edition provided an accessible, visually engaging interface for younger users to explore knowledge across various categories.

This project aims to recreate that experience as a modern web application.

## Core Features

### 1. Category-Based Navigation
The home screen displays content organized into intuitive categories:

**Left Panel:**
- Animals
- Science
- Sports and Recreation
- The Arts
- Reading and Writing

**Right Panel:**
- People
- Places
- History
- Social Studies
- Games and Fun Stuff!

### 2. Search Functionality
A prominent search bar allows users to quickly find articles and content across all categories.

### 3. Navigation Controls
- Home button - return to main category screen
- Back/Forward navigation - browse history
- Favorites system - save articles for later

### 4. Rich Multimedia Content
Each article can contain:
- Text content with structured sections
- Images and illustrations
- Videos and animations
- Interactive elements
- Related article links

## Technical Architecture

### Frontend Components

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx          # Navigation bar with search
│   │   ├── Sidebar.tsx         # Category navigation
│   │   └── Footer.tsx
│   ├── Home/
│   │   ├── CategoryGrid.tsx    # Main category buttons
│   │   └── CategoryCard.tsx    # Individual category button
│   ├── Search/
│   │   ├── SearchBar.tsx       # Search input component
│   │   └── SearchResults.tsx   # Results display
│   ├── Article/
│   │   ├── ArticleView.tsx     # Article content display
│   │   ├── MediaGallery.tsx    # Images/videos viewer
│   │   └── RelatedArticles.tsx # Related content links
│   └── Games/
│       └── GamesList.tsx       # Interactive activities
├── pages/
│   ├── index.tsx               # Home page with categories
│   ├── category/[slug].tsx     # Category listing page
│   ├── article/[id].tsx        # Individual article page
│   └── search.tsx              # Search results page
├── styles/
│   └── theme.ts                # Yellow/orange/green color scheme
└── data/
    └── articles/               # Article content (JSON/MDX)
```

### Data Structure

**Category:**
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
}
```

**Article:**
```typescript
interface Article {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  summary: string;
  content: string;          // MDX or HTML content
  featuredImage: string;
  media: MediaItem[];
  relatedArticles: string[];
  tags: string[];
  readingLevel: 'easy' | 'medium' | 'advanced';
}
```

## Design System

### Color Palette (Based on Encarta Kids)
- **Primary Yellow:** `#F5D000` - Main background gradient
- **Secondary Orange:** `#F5A623` - Accent and hover states
- **Category Green:** `#7CB342` - Category button borders
- **Lime Accent:** `#C0D944` - Highlights
- **Text Dark:** `#333333` - Primary text

### Typography
- Headings: Rounded, friendly sans-serif
- Body: Clear, readable sans-serif
- Buttons: Bold, high contrast

### UI Elements
- Rounded rectangle buttons with icons
- Gradient backgrounds
- Drop shadows for depth
- Playful, educational imagery

## Development Phases

### Phase 1: Foundation
- [x] Project setup (Vite + React + TypeScript)
- [x] Basic routing structure (React Router)
- [x] Design system and theme (Tailwind CSS)
- [x] Home page with category grid

### Phase 2: Content System
- [ ] Article data structure
- [ ] Category pages
- [ ] Article view component
- [ ] Search functionality

### Phase 3: Media & Interactivity
- [ ] Image galleries
- [ ] Video player integration
- [ ] Interactive elements
- [ ] Games section

### Phase 4: Polish
- [ ] Animations and transitions
- [ ] Responsive design
- [ ] Accessibility improvements
- [ ] Performance optimization

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **Build Tool:** Vite
- **Framework:** React 18
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State Management:** Zustand
- **Content:** JSON/MDX for articles
- **Search:** Client-side fuzzy search

## License

This is an educational project inspired by Microsoft Encarta. All original Encarta content and trademarks belong to Microsoft Corporation.
