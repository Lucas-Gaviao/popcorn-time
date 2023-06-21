export function Movie(props) {
    console.log(props.movie)

   return(
        <>
        
                 <div className="card">   
                <p>{props.movie.title}</p>
                <p>  {props.movie.rating > 8 ? <p> Recommended</p> : props.movie.rating} </p>
                <>
                { props.movie.imgURL 
                              ? <img src={props.movie.imgURL} alt="movieImg" /> 
                              : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="noImage"/>
                          }
                </>
                <p>
                    <button onClick={()=>{props.callbackToDelete(props.movie.id)}}>Delete</button> 
                    {/* we are able to send the function deleteMovie as a props from the main.js */}
                </p>
                </div>
                
        </>
   )}
