import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }: any) {
  const [movies, setMovies] = useState([] as any[]);
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
    } catch (event: unknown) {
      setError(event.message);
    } finally {
      setLoading(false);
    }
  };
  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;

  return { movies: sortedMovies, getMovies, loading };
}
