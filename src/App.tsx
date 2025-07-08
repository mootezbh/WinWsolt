import { Routes, Route, Navigate } from "react-router-dom";
import { ClerkLoaded, ClerkLoading, useAuth } from "@clerk/clerk-react";
import HomePage from "./pages/HomePage";
import MyMovies from "./pages/MyMovies";
import MoviesPage from "./pages/MoviesPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { SonnerToaster } from "./components/ui/sonner-provider";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) return null;
  return isSignedIn ? <>{children}</> : <Navigate to="/" replace />;
}

function App() {
  return (
    <>
      <SonnerToaster />
      <Navbar />
      <ClerkLoading>
        <div className="text-center mt-16">Loading...</div>
      </ClerkLoading>
      <ClerkLoaded>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-movies"
            element={
              <ProtectedRoute>
                <MyMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <ProtectedRoute>
                <MovieDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClerkLoaded>
    </>
  );
}

export default App;
