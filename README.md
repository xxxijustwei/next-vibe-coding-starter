# Next Vibe Coding Starter

A modern and opinionated Next.js starter template with best practices and powerful development tools preconfigured.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with React 19
- **UI:** [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable components
- **Styling:** 
  - [Tailwind CSS v4](https://tailwindcss.com/) with class-variance-authority
  - OKLCH color system for better color handling
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Code Quality:**
  - [Biome](https://biomejs.dev/) for formatting and linting
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit linting

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
├── lib/         # Utility functions and shared logic
└── styles/      # Global styles and Tailwind configurations
```

### Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build production bundle
- `bun start` - Start production server
- `bun format` - Format code with Biome
- `bun lint` - Lint code with Biome

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Biome](https://biomejs.dev/) - The next-generation toolchain for web projects