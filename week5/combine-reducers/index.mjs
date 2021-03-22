import store from "./redux/store.mjs"
import { addNewMovie, deleteMovie, getAllMovies } from "./redux/movie.mjs"
import { addNewTvShow, deleteTvShow, getAllTvShows } from "./redux/tvShows.mjs"

// Add Movie

store.dispatch(addNewMovie("Despicable Me"));
store.dispatch(addNewMovie("Pets 2"));
store.dispatch(addNewMovie("How To Train Your Dragon"));
store.dispatch(addNewMovie("Surf's Up"));

// Delete Movie

store.dispatch(deleteMovie("Surf's Up"));
store.dispatch(deleteMovie("Pets 2"));

// Get All Movies

store.dispatch(getAllMovies());

// Add TvShow

store.dispatch(addNewTvShow("Rocket Power"));
store.dispatch(addNewTvShow("Anamaniacs"));
store.dispatch(addNewTvShow("Ren & Stimpy"));

// Delete TvShow

store.dispatch(deleteTvShow("Ren & Stimpy"));


// Get All TvShows

store.dispatch(getAllTvShows());
