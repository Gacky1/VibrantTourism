# Vibrant Tourism

A modern, scalable, component-based tourism website built with React, Vite, and Tailwind CSS.

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, MainLayout)
│   ├── sections/        # Page sections (CategoryGrid, AboutSection, etc.)
│   ├── ui/             # Reusable UI components (Button, etc.)
│   └── index.js        # Component exports
├── pages/              # Page components
├── data/               # Mock data and configurations
└── styles/             # Global styles
```

### Key Features
- **Component-based**: Atomic design principles with reusable components
- **Framework-agnostic**: Clean separation allows easy framework switching
- **Mobile-first**: Responsive design with Tailwind CSS
- **Data-driven**: All content configurable via data objects
- **Backend-ready**: Structured for API integration

## 🚀 Components

### Layout Components
- **MainLayout**: Main page wrapper with navbar and footer
- **Navbar**: Sticky navigation with mobile menu and scroll effects

### Section Components
- **CategoryGrid**: Responsive grid for tourism categories with hover effects
- **SectionText**: Flexible text sections with configurable layouts
- **AboutSection**: Two-column about section
- **WhatWeDo**: Service cards with animations

### UI Components
- **Button**: Configurable button with multiple variants and sizes

## 📱 Responsive Design

- **Desktop**: 3-column grid, full navigation
- **Tablet**: 2-column grid, condensed layout
- **Mobile**: Single column, hamburger menu

## 🔧 Development

```bash
# Install dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Start development server (Frontend)
npm run dev

# Start backend server (in separate terminal)
cd backend
npm start

# Build for production
npm run build
```

## 🔐 Admin Panel

### Access
- **URL**: http://localhost:5173/admin
- **Username**: `admin`
- **Password**: `admin@123`

### Features
- Session-based authentication
- Protected dashboard routes
- Logout functionality
- Ready for content management integration

## 🎨 Customization

### Colors
Modify `tailwind.config.js` to update the color scheme:
```js
colors: {
  primary: { /* Blue theme */ },
  accent: { /* Orange accent */ }
}
```

### Content
Update `src/data/mockData.js` to modify:
- Navigation menu items
- Tourism categories
- Service cards
- Text content

## 🔮 Future Backend Integration

The architecture supports:
- **CMS Integration**: Headless CMS for content management
- **API Integration**: RESTful or GraphQL APIs
- **Authentication**: User login and membership system
- **Admin Dashboard**: Content and user management
- **Media Management**: Image and video uploads
- **Employment Portal**: Job listings and applications
- **Course Management**: Skill development programs

## 📦 Dependencies

### Frontend
- React 18+ with React Router
- Vite for build tooling
- Tailwind CSS for styling
- PostCSS and Autoprefixer

### Backend
- Express.js for server
- Express-session for authentication
- CORS for cross-origin requests

## 🎯 Performance

- Lazy loading ready
- Component-level code splitting
- Optimized images and assets
- Minimal bundle size