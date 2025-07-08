# WinWsolt 🎬

A modern movie tracker app built with React, Clerk authentication, TanStack Query, TMDB API, Tailwind CSS v4, shadcn/ui, and Firebase.

## Features

- Beautiful landing page with Arabic hero section and illustration
- Clerk authentication (Sign In/Up modals, user button)
- Dark mode support (shadcn/ui toggle)
- Protected routes for movies and user lists
- Movie search and details (TMDB API)
- Add movies to "Watching" or "Completed" lists
- My Movies page with tab filter (Watching/Completed)
- Responsive, theme-aware design
- Toast notifications for actions (shadcn/sonner)
- Data stored in Firebase Firestore per user

## Getting Started

### 1. Clone the repo

```sh
git clone https://github.com/your-username/winwsolt.git
cd winwsolt
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Set up environment variables

- Create a `.env` file in the root with your TMDB API token:
  ```env
  VITE_TMDB_TOKEN=your_tmdb_token_here
  ```
- Set up Clerk and Firebase credentials as needed in the code.

### 4. Run the app

```sh
pnpm dev
```

## Folder Structure

- `src/pages/` — Main pages (Home, Movies, MyMovies, NotFound, MovieDetails)
- `src/components/` — UI components (Navbar, MovieCard, etc.)
- `src/lib/` — API, types, and Firebase config
- `src/components/ui/` — shadcn/ui and custom UI utilities

## Credits

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Clerk](https://clerk.com/)
- [Firebase](https://firebase.google.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ for movie lovers.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
