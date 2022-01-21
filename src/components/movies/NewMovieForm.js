import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMovieForm.module.css";

function NewMovieForm(props) {
  const movieNameRef = useRef();
  const directorRef = useRef();
  const ratingRef = useRef();
  const thumbnailRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredMovieName = movieNameRef.current.value;
    const enteredDirector = directorRef.current.value;
    const enteredRating = ratingRef.current.value;
    const enteredThumbnail = thumbnailRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const movie = {
        MovieName : enteredMovieName,
        Director : enteredDirector,
        Thumbnail : enteredThumbnail,
        Rating : enteredRating,
        Description : enteredDescription 
    }

    props.onAddMovie(movie);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Movie Name</label>
          <input type="text" required id="name" ref={movieNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="director">Director</label>
          <input type="text" required id="director" ref={directorRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">Rating</label>
          <input type="text" required id="rating" ref={ratingRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="thumbnail">Thumbnail URL</label>
          <input type="text" required id="thumbnail" ref={thumbnailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" ref={descriptionRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Movie</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMovieForm;
