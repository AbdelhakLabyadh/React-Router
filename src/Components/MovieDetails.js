import React, { useState, useEffect } from "react";
import {Card, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';

import ReactPlayer from 'react-player'
const MovieDetails = ({ match, movies }) => {
    const movieId = match.params.id
    const [fetchMovie, setFetchMovie] = useState({})
    useEffect(() => {
        setFetchMovie(() => movies.find((movie) => movie.id === movieId))
    }, [movieId, movies])
    return (
        <div className="movie">
              <Card style={{width:'600px', height:'600px', margin:'auto'}}>
              <Card.Body >
                <Card.Title>Description</Card.Title>
                <Card.Text>{fetchMovie.description}
                <ReactPlayer width='520px' style={{margin:'20px'}} url={fetchMovie.trailer}
                />
                <Link to={{pathname:'/'}} style={{display:'flex', justifyContent:'center',marginTop:'-10px'}}>
                <Button  style={{backgroundColor:'black'}}>Home</Button>    
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieDetails;