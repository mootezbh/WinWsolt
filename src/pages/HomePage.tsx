import { SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors">
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24">
        <div className="flex-1 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text animate-fade-in mx-auto">
            WinWsolt
          </h1>
          <p
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-100 text-right"
            dir="rtl"
          >
            تبّع أفلامك، وما عادش تضيّع شنوة تشوف ولا شنوة كمّلتو
            <br />
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              برّا شارك معانا في WinWsolt
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link to="/movies">
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                  Browse Movies
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center animate-fade-in delay-300">
          <img
            src="https://cdn.alza.cz/Foto/LegendFoto/photos/EPAY0006_1.jpg"
            alt="Movie List Panel Illustration"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 bg-white/70 dark:bg-gray-900/70"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
