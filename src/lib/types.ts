export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  original_language?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
};

export type MoviesResponse = {
  results: Movie[];
};
