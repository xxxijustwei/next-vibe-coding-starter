# Next Vibe Coding Starter

A modern and opinionated Next.js starter template with best practices and powerful development tools preconfigured.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with React 19
- **Bundler:** [Rspack](https://rspack.dev/) - High-performance Rust-based bundler
- **UI Components:** 
  - [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable components
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- **Styling:** 
  - [Tailwind CSS v4](https://tailwindcss.com/) with class-variance-authority
  - OKLCH color system for better color handling
- **Animations:** [Motion](https://motion.dev/) - Production-ready animation library
- **Dark Mode:** [next-themes](https://github.com/pacocoursey/next-themes) - Perfect dark mode support
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Code Quality:**
  - [Biome](https://biomejs.dev/) for formatting and linting
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit linting
- **Logging:** [Pino](https://github.com/pinojs/pino) with pino-pretty for pretty logging in development

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/next-vibe-coding-starter.git
    cd next-vibe-coding-starter
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Run the development server:
    ```bash
    bun dev
    ```

4. Open browser and navigate to `http://localhost:3000`

### Project Structure

```
src/
├── app/         # App router pages and layouts
├── components/  # Reusable UI components
├── hooks/       # Custom React hooks
├── lib/         # Utility functions and shared logic
└── styles/      # Global styles and Tailwind configurations
```

### Scripts

- `bun dev` - Start development server with Rspack
- `bun build` - Build production bundle (runs format and lint first)
- `bun start` - Start production server
- `bun format` - Format code with Biome
- `bun lint` - Lint code with Biome

## Features

- ⚡ **High-Performance Bundler** - Powered by Rspack for faster builds
- 🎨 **Modern UI Components** - Pre-configured shadcn/ui with Radix UI primitives
- 🌓 **Dark Mode Support** - Built-in theme switching with next-themes
- ✨ **Smooth Animations** - Motion library for production-ready animations
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- 🔧 **Developer Experience** - Biome for fast formatting and linting
- 🎯 **Type Safety** - Full TypeScript support throughout
- 🚀 **Pre-commit Hooks** - Automated code quality checks with Husky

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Biome](https://biomejs.dev/) - The next-generation toolchain for web projects