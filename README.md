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
git clone https://github.com/mootezbh/WinWsolt.git
cd winwsolt
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Set up environment variables

- Create a `.env` file in the root with your TMDB API token:
- Copy the example env from .env.example
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


# React + TypeScript + Vite
