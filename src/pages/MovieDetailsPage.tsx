import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../lib/types";
import { fetchMovie } from "../lib/api";
import { db } from "../lib/firebase";
import { setDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-react";
import { toast } from "../components/ui/toast";
import { useState, useEffect } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<Movie, Error>({
    queryKey: ["movie", id],
    queryFn: () => fetchMovie(id!),
    enabled: !!id,
  });

  const [myListType, setMyListType] = useState<"watching" | "completed" | null>(
    null
  );
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (!user || !movie) return;
    setChecking(true);
    const check = async () => {
      const userId = user.id;
      const movieRef = doc(db, `users/${userId}/myMovies`, movie.id.toString());
      const snap = await getDoc(movieRef);
      if (snap.exists()) {
        setMyListType((snap.data() as any).listType);
      } else {
        setMyListType(null);
      }
      setChecking(false);
    };
    check();
  }, [user, movie]);

  async function handleAddMovie(listType: "watching" | "completed") {
    if (!user || !movie) return;
    const userId = user.id;
    const movieRef = doc(db, `users/${userId}/myMovies`, movie.id.toString());
    await setDoc(movieRef, {
      ...movie,
      listType,
      addedAt: Date.now(),
    });
    setMyListType(listType);
    toast({
      title: `Added to ${listType === "watching" ? "Watching" : "Completed"}!`,
      description: `${movie.title} has been added to your ${listType} list.`,
    });
  }

  async function handleRemoveMovie() {
    if (!user || !movie) return;
    const userId = user.id;
    const movieRef = doc(db, `users/${userId}/myMovies`, movie.id.toString());
    await deleteDoc(movieRef);
    setMyListType(null);
    toast({
      title: `Removed from My Movies`,
      description: `${movie.title} has been removed from your list.`,
    });
  }

  return (
    <div className="mt-4 max-w-3xl mx-auto py-20 px-4">
      {isLoading && <div className="text-center text-gray-500">Loading...</div>}
      {isError && (
        <div className="text-center text-red-500">
          Failed to load movie details.
        </div>
      )}
      {movie && (
        <div className="flex flex-col md:flex-row gap-8">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full max-w-xs h-80 bg-gray-200 flex items-center justify-center text-gray-400 rounded-lg">
              No Image
            </div>
          )}
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">
              {movie.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-2 items-center">
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
              {movie.runtime && (
                <span className="text-xs text-gray-400">
                  {movie.runtime} min
                </span>
              )}
              {movie.original_language && (
                <span className="text-xs text-gray-400">
                  Lang: {movie.original_language.toUpperCase()}
                </span>
              )}
            </div>
            {movie.genres && movie.genres.length > 0 && (
              <p className="text-xs text-gray-400 mb-1">
                {movie.genres.map((g) => g.name).join(", ")}
              </p>
            )}
            {movie.release_date && (
              <p className="text-gray-500 mb-2">
                Release: {movie.release_date}
              </p>
            )}
            {movie.overview && (
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {movie.overview}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-4 items-center">
              {checking ? (
                <span className="text-gray-400">Checking...</span>
              ) : myListType ? (
                <>
                  {myListType === "watching" && (
                    <button
                      className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors cursor-pointer"
                      onClick={() => handleAddMovie("completed")}
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button
                    className="bg-red-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer"
                    onClick={handleRemoveMovie}
                  >
                    Remove from My Movies
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={() => handleAddMovie("watching")}
                  >
                    Add to Watching
                  </button>
                  <button
                    className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors cursor-pointer"
                    onClick={() => handleAddMovie("completed")}
                  >
                    Add to Completed
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
