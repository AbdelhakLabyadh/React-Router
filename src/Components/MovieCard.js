import StarRatingComponent from 'react-rating-stars-component';
const MovieCard = ({movie}) => {
    return (
    <div className='card'>
        <div className='poster'>
        <img style={{ width: 300, height: 350, marginTop: 20, marginLeft:150}} src={movie.posterURL} alt="movie"/>
        </div>
        <div  className='movieContent'>
            <h1 className='title' style={{ color: 'red', fontSize: 35}}>{movie.title}</h1>
            <StarRatingComponent
                starCount={7}
                value={movie.rate}
                edit={false}
                size={30}
            />

    </div>
            
            <p className='descrition' style={{ margin: 100, marginTop: 20, marginBottom: 20, maxWidth: 350, paddingLeft: '7.5rem', fontSize: 15 }}>{movie.description}</p>
            
    </div>
    )
}

export default MovieCard;