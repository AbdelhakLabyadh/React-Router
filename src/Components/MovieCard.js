import StarRatingComponent from 'react-rating-stars-component';
import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
    <div className='card'>
        <div className='poster'>
        <img style={{ width: 300, height: 350, marginTop: 20, marginLeft:150}} src={movie.posterURL} alt="movie"/>
        </div>
        <div  className='movieContent'>
            <h1 className='title' style={{ color: 'red', fontSize: 35}}>{movie.title}</h1>

            <Link to={`/Components/Details/${movie.title}`}> <Button variant="primary">Details</Button></Link>

            <StarRatingComponent
                starCount={7}
                value={movie.rate}
                edit={false}
                size={30}
            />

    </div>
            
            
            
    </div>
    )
}

export default MovieCard;