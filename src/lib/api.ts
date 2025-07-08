const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

async function fetchTMDB(url: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function searchMovies(query: string) {
  const url = `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
    query
  )}`;
  return fetchTMDB(url);
}

export async function getPopularMovies() {
  const url = `${TMDB_BASE_URL}/movie/popular`;
  return fetchTMDB(url);
}

export async function fetchMovie(id: string) {
  const url = `${TMDB_BASE_URL}/movie/${id}`;
  return fetchTMDB(url);
}
