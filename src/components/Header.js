import { useEffect, useState } from 'react';
import '../css/Header.css'
import axios from 'axios';

export const Header = (props) => {
    //console.log(props.numOfMovies)
    

    const [numberOfCharacters, setNumberOfCharacters] = useState(0)

    const baseURL = 'https://ih-crud-api.herokuapp.com';


    useEffect(() => {
      axios
        .get(baseURL + "/characters")
        .then((response) => {
          //const numberOfCharacters = response.data.length //NEVER MODIFY STATE DIRECTLY
          //console.log(response.data.length);

          setNumberOfCharacters(response.data.length);

          //console.log(response.data.length)
        })
        .catch((e) => console.log(e));
    }, []); //use effect with an empty array === run the function only once.

    


    let message = '';
    if(props.numOfMovies > 0){
        message = <h3>Number of Movies: {props.numOfMovies}</h3>
       
    }
    else{
        message = <h1>Sorry, no movies to display</h1>
    };
    
    return( 
    <div className="Header">
        <h1>Popcorn Time</h1>

         { message }

        <h3> Number of Character on the API: {numberOfCharacters}</h3>
      
    </div>
    )
}