import React, { useState } from 'react';
import axios from 'axios';

import { useInput } from './useInput';

const AddMovie = props => {
    const [title, setTitle, handleTitle] = useInput('');
    const [director, setDirector, handleDirector] = useInput('');
    const [metascore, setMetascore, handleMetascore] = useInput('');
    const [stars, setStars, handleStars] = useInput('')


    const handleSubmit = e => {
        e.preventDefault();
        const starsArr = stars.split(',');
        const movie = {title: title, director: director, metascore: metascore, stars: starsArr};

        axios
            .post('http://localhost:5000/api/movies', movie)
            .then(res => {
                setTitle('');
                setDirector('');
                setMetascore('');
                setStars('');
                props.history.push('/');
            })
            .catch(err => console.log('error adding movie', err)
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Title'
                value={title}
                onChange={e => handleTitle(e.target.value)}
            />
            <input
                type='text'
                name='director'
                placeholder='Director'
                value={director}
                onChange={e => handleDirector(e.target.value)}
            />
            <input
                type='text'
                name='metascore'
                placeholder='Metascore'
                value={metascore}
                onChange={e => handleMetascore(e.target.value)}
            />
            <input
                type='text'
                name='stars'
                placeholder='Stars'
                value={stars}
                onChange={e => handleStars(e.target.value)}
            />
            <button type='submit'>Add Movie</button>
        </form>
    );
}

export default AddMovie;