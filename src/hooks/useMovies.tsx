import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }: any) {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getMovies = async () => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e: unknown) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
