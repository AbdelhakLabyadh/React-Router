import React from 'react';
import MovieCard from './MovieCard.js';
const MovieList =(props)=>{
    return (
		<>
			{props.movies.map((movie) =>(
				<MovieCard movie={movie} />
			))}
		</>
	);
};


export default MovieList;