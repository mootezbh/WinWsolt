import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "./ui/theme-toggle";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn && window.location.pathname === "/") {
      navigate("/movies");
    }
  }, [isSignedIn, navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              WinWsolt
            </Link>
          </div>

          <div className="hidden md:block">
            <SignedIn>
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/movies"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Movies
                </Link>
                <Link
                  to="/my-movies"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  My List
                </Link>
              </div>
            </SignedIn>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
