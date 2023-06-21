import movies from "../data/movies.json";
import { useState } from "react";
import "../css/Main.css";

function Main() {


    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    
    const deleteMovie = (movieId) => {
        
        
        const newList = moviesToDisplay.filter((element)=> {
            return element.id !== movieId;
        }
        )
        setMoviesToDisplay(newList);
    }
    

    let message = '';
    if(moviesToDisplay.length > 0){
        message = <h1>Number of Movies: {moviesToDisplay.length}</h1>
    }
    else{
        message = <h1>Sorry, no movies to display</h1>
    };
    
 return (
    <div className="Main">

        <h2>{message}</h2>

        {moviesToDisplay.map((movieObj) => {
            return(
                <div key={movieObj.id} className="card">
                    <p>{movieObj.title}</p>
                  <p>  {movieObj.rating > 8 ? <p> Recommended</p> : movieObj.rating} </p>
                  <div>
                  { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} alt="movieImg" /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="noImage"/>
                        }
                  </div>
                    <button onClick={ () => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                </div>
            )
        })}
    </div>
);
}

export default Main;