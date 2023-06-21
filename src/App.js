import { Header } from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';

import { useState } from "react";
import movies from "./data/movies.json";

import './App.css';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const createMovie = (newMovie) => {
    // new list = an array with the new movie + all the movies we had before
    const newList = [newMovie, ...moviesToDisplay];

    // update state
    setMoviesToDisplay(newList);
  }


  const deleteMovie = (movieTitle) => {
       
    const newList = moviesToDisplay.filter((element)=> {
        return element.title !== movieTitle;
    })
    setMoviesToDisplay(newList);
}




  return (
    <div className="App">

    <Header numOfMovies={moviesToDisplay.length}/>

    <AddMovie callbackToCreate={createMovie}/>

    <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie}/>

    <Footer />

    </div>
  );
}

export default App;
