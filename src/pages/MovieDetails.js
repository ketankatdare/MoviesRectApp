import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieItemDetailed from "../components/movies/MovieItemDetailed";

function MovieDetailsPage(props){
    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMovie, setLoadedMovie] = useState([]);

    useEffect(()=>{
        setIsLoading(true);

        fetch(`https://localhost:44310/api/movie/${params.movieId}`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setIsLoading(false);
            setLoadedMovie(data);
        });
    },[params]);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
           <MovieItemDetailed movie={loadedMovie}/>            
        </section>
    );
}

export default MovieDetailsPage;