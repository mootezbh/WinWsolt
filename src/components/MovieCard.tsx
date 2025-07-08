import type { Movie } from "../lib/types";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movies/${movie.id}`} className="block">
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-100 dark:border-gray-800 w-full max-w-md mx-auto"
        style={{ minHeight: 380, maxWidth: 340 }}
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover bg-gray-100 dark:bg-gray-800"
            style={{ maxHeight: 256 }}
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
            {movie.title}
          </h2>
          <div className="flex items-center gap-2 mb-2">
            {movie.vote_average !== undefined && (
              <span className="text-yellow-500 font-semibold flex items-center">
                ★ {movie.vote_average.toFixed(1)}
              </span>
            )}
            {movie.vote_count !== undefined && (
              <span className="text-xs text-gray-400">
                ({movie.vote_count} votes)
              </span>
            )}
          </div>
          {movie.release_date && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {movie.release_date}
            </p>
          )}
          {movie.genres && movie.genres.length > 0 && (
            <p className="text-xs text-gray-400 mb-1">
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
          )}
          {movie.runtime && (
            <p className="text-xs text-gray-400 mb-1">{movie.runtime} min</p>
          )}
          {movie.original_language && (
            <p className="text-xs text-gray-400 mb-1">
              Lang: {movie.original_language.toUpperCase()}
            </p>
          )}
          {movie.overview && (
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mt-1">
              {movie.overview}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
