import React, { useState } from 'react';
import axios from 'axios';



const MovieForm = props => {
    const [movie, setMovie] = useState({
        ...props.updateMovie
    });


    const handleChange = e => {
        e.persist();
        let value = e.target.value;
        setMovie({
            ...movie,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newMovie = {
            ...movie
        };

        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, newMovie)
            .then(res => {
                console.log(res.data);
                props.changeMovie(res.data);
                props.history.push('/');
            })
            .catch(err => console.log('error while putting: ', err));

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Title'
                value={movie.title}
                onChange={handleChange}
            />
            <input
                type='text'
                name='director'
                placeholder='Director'
                value={movie.director}
                onChange={handleChange}
            />
            <input
                type='text'
                name='metascore'
                placeholder='Metascore'
                value={movie.metascore}
                onChange={handleChange}
            />            
            <input
                type='text'
                name='stars'
                placeholder='Stars'
                value={movie.stars}
                onChange={handleChange}
            />  
            <button type='submit'>Update</button>
        </form>
    );
}

export default MovieForm;