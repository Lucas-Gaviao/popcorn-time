import "../css/Main.css";
import { Movie } from "./Movie";

function Main(props) {

 return (
    <div className="Main">

        {props.listOfMovies.map((movieObj) => {
            return (<Movie key={movieObj.id} movie={movieObj} callbackToDelete={props.callbackToDelete} />) //we use the key when we use the map method in the parent component not in the child.
        })} 
    </div>
);
}

export default Main;