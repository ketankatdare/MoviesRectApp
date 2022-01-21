import { useNavigate } from 'react-router-dom';

import classes from "./MovieItem.module.css";
import Card from "../ui/Card";

function MovieItem(props) {
  const navigate = useNavigate();

  function onItemClickHandler() {
    navigate(`/movie/${props.movie.MovieID}`,{state:{ movie: props.movie}});
  }

  return (
    <Card>
    <li className={classes.item} onClick={onItemClickHandler}>
      <div className={classes.image}>
        <img src={props.movie.Thumbnail} alt={props.movie.MovieName} />
      </div>
      <div className={classes.content}>
        <h3>{props.movie.MovieName}</h3>
        <span>{props.movie.Rating}</span>
      </div>
    </li>
    </Card>
  );
}

export default MovieItem;
