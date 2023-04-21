import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useEffect, useRef, useState } from "react";
function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState<any>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();
  const [query, setQuery] = useState("");
  const isFirstInput = useRef(true);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ search });
  };
  const handleChange = (event: any) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1> Movie Mania</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            value={search}
            onChange={handleChange}
            placeholder="Avengers, Stars Wars, Lilo & Stich..."
          />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
