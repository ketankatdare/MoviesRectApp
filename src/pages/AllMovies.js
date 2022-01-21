import { useState, useEffect } from 'react';

import MovieList from "../components/movies/MovieList";

function AllMoviesPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(()=>{
        setIsLoading(true);

        fetch('https://localhost:44310/api/movie')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setIsLoading(false);
            setLoadedMovies(data);
        });
    },[]);

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Movies</h1>
            <MovieList movies={loadedMovies} />
        </section>
    );
}

export default AllMoviesPage;