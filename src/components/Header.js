import '../css/Header.css'

export const Header = (props) => {
    console.log(props.numOfMovies)
    let message = '';
    if(props.numOfMovies > 0){
        message = <h2>Number of Movies: {props.numOfMovies}</h2>
    }
    else{
        message = <h1>Sorry, no movies to display</h1>
    };
    
    return( 
    <div className="Header">
    <h1>List of Movies</h1>

    <h3> {message} </h3>
    </div>
    )
}