import Response from "../mocks/with-results.json";
import noResponse from "../mocks/no-results.json";

export function useMovies() {
  const movies = Response.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return { movies: mappedMovies };
}