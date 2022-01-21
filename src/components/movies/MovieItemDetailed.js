import Card from "../ui/Card";

function MovieItemDetailed(props){
    return (
        <Card>
            <div>
                <img src={props.movie.Thumbnail} alt={props.movie.MovieName} />
            </div>
            <div>
                <p>
                    <strong>Director:</strong> {props.movie.Director}
                </p>
                <p>
                    <strong>Rating:</strong> {props.movie.Rating}
                </p>
                <p>
                    {props.movie.Description}
                </p>
            </div>
        </Card>
    );
}

export default MovieItemDetailed;