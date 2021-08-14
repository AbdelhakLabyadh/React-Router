import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Filter from './Components/FilterRate'

import { v4 as uuidv4 } from 'uuid';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import MovieList from './Components/MovieList.js'
import AddMovie from './Components/AddMovie.js'
import MovieDetails from './Components/MovieDetails'

function App() {

  const MovieData = [
    
    {id: uuidv4(),
      title:"Chernobyl",
    description:"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes",
    posterURL:"https://m.media-amazon.com/images/I/711BIyFlWUL._SS500_.jpg",
    rate:4,
  trailer: "https://www.youtube.com/embed/s9APLXM9Ei8"},

    {
      id: uuidv4(),
      title:"Rick & Morty",
    description:"An animated series that follows the exploits of a super scientist and his not-so-bright grandson",
    posterURL:"https://fr.web.img6.acsta.net/pictures/18/10/31/17/34/2348073.jpg",
    rate:4,
  trailer: "https://www.youtube.com/embed/hl1U0bxTHbY"},
    {id: uuidv4(),
      title:"Game of Thrones",
    description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia ",
    posterURL:"https://celebrity.fm/wp-content/uploads/2020/08/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    rate:5,
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ"
    },
    {id: uuidv4(),
      title:"The Queens Gambit",
    description:"The Queen's Gambit is a 2020 American coming-of-age period drama miniseries based on Walter Tevis's 1983 novel of the same name.",
    posterURL:"https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png",
    rate:3,
    trailer: "https://www.youtube.com/embed/CDrieqwSdgI"
    },
    
    {id: uuidv4(),
      title:"Breaking Bad",
    description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rate:5,
  trailer: "https://www.youtube.com/embed/HhesaQXLuRY"},

    {id: uuidv4(),
      title:"Sherlock",
    description:"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    posterURL:"https://fr.web.img5.acsta.net/pictures/18/11/05/18/04/4981046.jpg",
    rate:2,
  trailer: "https://www.youtube.com/embed/IrBKwzL3K7s"},

    {id: uuidv4(),
      title:"Death Note",
    description:"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    posterURL:"https://fr.web.img5.acsta.net/pictures/18/01/18/14/35/2024405.jpg",
    rate:4,
    trailer: "https://www.youtube.com/embed/NlJZ-YgAt-c"},

    {id: uuidv4(),
      title: "Peaky Blinders",
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby",
      posterURL: "https://fr.web.img6.acsta.net/pictures/210/457/21045721_20131001172258551.jpg",
      rate:5,
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
    }

  ];
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);

  const searching = (s) => {
    setSearch(s)
  }
  const rating = (r) => {
    setRate(r)
  }

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <BrowserRouter>
    <Switch>
    <div >
      <h1 className='AppTitle'>Movie App</h1>
      <div className='nav'>
        
        <Filter
        
          title={searching} rate={rating}
        />
      </div>
      <div className='movie-list'> 
      <Route exact path='/' component={()=> <AddMovie handleAddMovie={handleAddMovie} />} />
        
      </div>
      <div class="movie-app">
        <Route exact path="/" component={()=> <MovieList
          movies={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))} />}/>
      </div>

      <Route exact path="/Components/Details/:title" render={(props) => <MovieDetails {...props} movies={movies} />}  />

    </div >
    </Switch>
    </BrowserRouter>
  );
}

export default App;