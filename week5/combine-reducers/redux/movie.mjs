export function addNewMovie (movie) {
    return {
        type: "ADD_NEW_MOVIE",
        payload: movie
    }
}

export function deleteMovie (movie) {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}

export function getAllMovies(){
    return {
        type: "GET_ALL_MOVIES"
    }
}

export default function movieReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_NEW_MOVIE":
            return[...movies, action.payload]
        case "DELETE_MOVIE": {
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_ALL_MOVIES": 
            return movies
        default:
            return movies
    }
}