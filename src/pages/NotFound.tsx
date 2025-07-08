import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-7xl font-extrabold text-blue-600 dark:text-blue-400 animate-bounce mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
        Page Not Found
      </h2>
      <p className="mb-8 text-gray-500 dark:text-gray-400 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
        <br />
        Try going back to the homepage.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
      >
        Go Home
      </Link>
      <div className="mt-10 opacity-60">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="60"
            cy="20"
            rx="50"
            ry="10"
            fill="currentColor"
            className="text-blue-100 dark:text-blue-900 animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
