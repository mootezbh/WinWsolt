import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { useUser } from "@clerk/clerk-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { Movie } from "../lib/types";
import MovieCard from "../components/MovieCard";

const TABS = [
  { key: "watching", label: "Watching" },
  { key: "completed", label: "Completed" },
];

const MyMovies = () => {
  const { user } = useUser();
  const [tab, setTab] = useState("watching");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const fetchMovies = async () => {
      const q = query(
        collection(db, `users/${user.id}/myMovies`),
        where("listType", "==", tab)
      );
      const snap = await getDocs(q);
      setMovies(snap.docs.map((doc) => doc.data() as Movie));
      setLoading(false);
    };
    fetchMovies();
  }, [user, tab]);

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Movie List</h1>
      <div className="flex gap-4 mb-8">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              tab === t.key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-800 text-blue-600 border-blue-300 dark:border-gray-700"
            }`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="border rounded-lg p-8 text-center text-gray-400">
          <span>Your movie list is empty. Start tracking your movies!</span>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyMovies;
