function ListOfMovies({ movies }: any) {
  return (
    <ul className="movies">
      {movies.map((movie: any) => (
        <li className="movie" key={movie.imdID}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

export function Movies({ movies }: any) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
