import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => (
        <MovieItem 
        key={movie.MovieID} 
        movie={movie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
