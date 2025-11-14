## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/tripzy-frontend-test.git
cd tripzy-frontend-test
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running Production Build

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🏗️ Architecture & Technical Decisions

### Framework & Core Technologies

- **Next.js 16** (App Router) - Latest React framework with server components and enhanced routing
- **React 19.2** - Latest React version with improved performance
- **TypeScript 5** - Type-safe development with strict mode enabled

### UI Libraries & Styling

- **Ant Design 5.28.1** - Enterprise-grade UI component library
  - Custom theme configuration with primary color #19C0FF
  - Responsive components with consistent sizing (52px height for inputs)
  - Custom date picker with double-panel calendar view
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **Nunito Sans** (Google Fonts) - Modern, readable font family

### Project Structure

```
app/
├── components/
│   ├── Background.tsx          # Shared layout wrapper
│   ├── SearchForm.tsx           # Main search form container
│   └── SearchForm/
│       ├── BusSearchForm.tsx    # Bus search form logic
│       ├── LocationInput.tsx    # Location autocomplete
│       ├── DoublePanelDatePicker.tsx  # Custom date picker
│       ├── DepartureDateInput.tsx
│       ├── ReturnDateInput.tsx
│       ├── PassengerInput.tsx
│       ├── SearchButton.tsx
│       ├── SwapButton.tsx
│       └── types.ts             # TypeScript interfaces
├── data/
│   └── locations.ts             # Location data and helpers
├── search/
│   └── page.tsx                 # Search results page
├── layout.tsx                   # Root layout with theme config
├── page.tsx                     # Homepage
└── globals.css                  # Global styles

```

### Design Decisions

1. **Component Composition**: Modular components for reusability and maintainability
2. **Type Safety**: Comprehensive TypeScript interfaces for all props and data structures
3. **Validation Strategy**: Real-time validation with error state management
4. **Responsive Design**: Mobile-first approach with Ant Design Grid breakpoints
5. **State Management**: React hooks for local state, URL parameters for search state
6. **CSS Strategy**: Combination of Tailwind utilities and CSS modules for complex components
7. **Date Handling**: Day.js for lightweight date manipulation with timezone support
8. **Navigation**: Next.js App Router with `useRouter` for programmatic navigation

### Configuration

- **ESLint**: Next.js recommended config with TypeScript support
- **Ant Design Theme**: Custom primary color, border radius, and component sizes
- **Tailwind**: Integrated with PostCSS for optimal performance
- **TypeScript**: Strict mode with path aliases (`@/*`)

## 🔗 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design Documentation](https://ant.design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Day.js Documentation](https://day.js.org/)

## Demo

- [Live Demo Link](https://tripzy-app-demo.vercel.app/)
