! DISCLAIMER:
The content of the project is generated with Bolt.new

# Design System Demo

A modern, production-ready design system built with React, Tailwind CSS, and shadcn/ui components. This project demonstrates best practices for building scalable and maintainable design systems.

![Design System Demo](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop)

## Features

- 🎨 Comprehensive design tokens and theming
- 🌗 Dark and light mode support
- 📚 Component documentation with Storybook
- 🎯 Fully typed with TypeScript
- 🛠 Built with modern tools and best practices
- 📱 Responsive and accessible components

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Storybook
- Vite
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

### Building

Build the application:

```bash
npm run build
```

Build Storybook:

```bash
npm run build-storybook
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Base UI components
│   └── theme-provider.tsx
├── stories/         # Storybook stories
├── lib/
│   └── utils.ts     # Utility functions
└── App.tsx          # Main application
```

## Design System Components

The design system includes:

### Colors

- Primary
- Secondary
- Accent
- Muted

### Typography

- Heading scales (h1-h4)
- Body text
- Font weights and styles

### Components

- Buttons (multiple variants)
- Cards
- Tabs
- And more...

### Patterns

- Common layout structures
- Component combinations
- Best practices examples

## Theme Customization

The design system supports both light and dark themes out of the box. Theme configuration can be found in:

- `tailwind.config.js` - Base theme configuration
- `src/index.css` - CSS variables and base styles
- `src/components/theme-provider.tsx` - Theme context and switching logic

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this design system in your own projects.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Storybook](https://storybook.js.org/) - UI component documentation
- [Lucide](https://lucide.dev/) - Beautiful open-source icons
