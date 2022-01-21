import { useNavigate } from 'react-router-dom';

import NewMovieForm from "../components/movies/NewMovieForm";

function NewMoviePage(){
    const navigate = useNavigate();

    function addMovieHandler(movie){
        fetch('https://localhost:44310/api/movie',{
            method: 'POST',
            body: JSON.stringify(movie),
            headers : {
                'Content-Type':'application/json'
            }
        }).then(() =>{
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Movie</h1>
            <NewMovieForm onAddMovie={addMovieHandler}/>
        </section>
    );
}

export default NewMoviePage;