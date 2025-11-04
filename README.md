# Next Vibe Coding Starter

A modern and opinionated Next.js starter template with best practices and powerful development tools preconfigured.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with React 19
- **UI Components:** 
  - [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable components
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- **Styling:** 
  - [Tailwind CSS v4](https://tailwindcss.com/) with class-variance-authority
  - [DaisyUI](https://daisyui.com/) - High-level CSS class abstraction for Tailwind CSS (prefixed with `d-`)
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **Animations:** [Motion](https://motion.dev/) - Production-ready animation library
- **Dark Mode:** [next-themes](https://github.com/pacocoursey/next-themes) - Perfect dark mode support
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Code Quality:**
  - [Biome](https://biomejs.dev/) for formatting and linting
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit linting
- **Logging:** [Pino](https://github.com/pinojs/pino) with pino-pretty for pretty logging in development

## 🏁 Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/next-vibe-coding-starter.git
    cd next-vibe-coding-starter
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Run the development server:
    ```bash
    pnpm dev
    ```

4. Open browser and navigate to `http://localhost:3000`

### 🔧 Scripts

- `pnpm dev` - Start development server with Rspack
- `pnpm build` - Build production pnpmdle (runs format and lint first)
- `pnpm start` - Start production server
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint code with Biome

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [DaisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS
- [Biome](https://biomejs.dev/) - The next-generation toolchain for web projects