import { Header } from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

import { useState } from "react";
import movies from "./data/movies.json";

import './App.css';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
       
    const newList = moviesToDisplay.filter((element)=> {
        return element.id !== movieId;
    })
    setMoviesToDisplay(newList);
}



  return (
    <div className="App">

    <Header numOfMovies={moviesToDisplay.length}/>

    <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie}/>

    <Footer />

    </div>
  );
}

export default App;
