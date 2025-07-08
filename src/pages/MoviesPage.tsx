import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, getPopularMovies } from "../lib/api";
import MovieCard from "../components/MovieCard";
import type { MoviesResponse } from "../lib/types";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(search);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search]);

  const { data, isLoading, isError } = useQuery<MoviesResponse, Error>({
    queryKey: ["movies", query],
    queryFn: () => (query ? searchMovies(query) : getPopularMovies()),
  });

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <form
        className="mt-4 mb-8 flex gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 border rounded-lg px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {isLoading && <div className="text-center text-gray-500">Loading...</div>}
      {isError && (
        <div className="text-center text-red-500">Failed to load movies.</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(data?.results) && data.results.length > 0
          ? data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          : !isLoading && (
              <span className="col-span-full text-center text-gray-400">
                No movies found.
              </span>
            )}
      </div>
    </div>
  );
};

export default MoviesPage;
