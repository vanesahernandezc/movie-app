import "./App.css";
import { Movies } from "./components/Movies";
import noResponse from "./mocks/no-results.json";
import Response from "./mocks/with-results.json";

function App() {
  const movies = Response.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return (
    <div className="page">
      <header>
        <h1> Movie Mania</h1>
        <form action="form">
          <label>
            Type the movie name to search:
            <input
              type="text"
              placeholder="Avengers, Stars Wars, Lilo & Stich..."
            />
            <button type="submit">Search</button>
          </label>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
