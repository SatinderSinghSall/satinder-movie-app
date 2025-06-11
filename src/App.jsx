import { useState, useEffect } from "react";
import "./App.css";

//! Components:
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import DeveloperCredit from "./components/DeveloperCredit";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies.");
      }
      const data = await response.json();
      // console.log(data);
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies.");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.log(`⚠️ Error Fetching Movies Data: ${error}`);
      setErrorMessage("Error Fetching Movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header className="text-center py-12 px-4">
          <img
            src="/images/hero.png"
            alt="Movie Images"
            className="mx-auto mb-6 w-full max-w-lg rounded-xl shadow-lg"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Find <span className="text-gradient">Movies</span> You’ll Love{" "}
            <br />
            Without the Hassle
          </h1>

          <div className="mt-6">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessages}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
      <DeveloperCredit />
    </main>
  );
}

export default App;
