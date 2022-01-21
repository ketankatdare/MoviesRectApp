import Card from "../ui/Card";
import classes from "./MovieItemDetailed.module.css";

function MovieItemDetailed(props) {
  return (
      <Card>
        <div className={classes.item}>
          <div className={classes.image}>
            <img src={props.movie.Thumbnail} alt={props.movie.MovieName} />
          </div>
          <div className={classes.content}>
            <h3>{props.movie.MovieName}</h3>
            <p>
              <strong>Director:</strong> {props.movie.Director}
            </p>
            <p>
              <strong>Rating:</strong> {props.movie.Rating} &#9733;
            </p>
            <p>{props.movie.Description}</p>
          </div>
        </div>
      </Card>
  );
}

export default MovieItemDetailed;
