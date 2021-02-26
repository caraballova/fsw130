import React from "react";
import {MovieContextConsumer} from "../provider/movieContext";

const MovieList = () => {
    
    return(
        <MovieContextConsumer>
        {movie => (
            <div>
                {movie.movies.map((allMovies, id) => {
                    return (
                        <div key={id} >
                            <h1 className="title">{allMovies.title}</h1>
                            <h3 className="rated">{allMovies.rated}</h3>
                        </div>
                    )
                })}
            </div>
        )}
        </MovieContextConsumer>
    )

}

export default MovieList;