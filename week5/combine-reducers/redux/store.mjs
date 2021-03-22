import { createRequire } from "module"
const require = createRequire(import.meta.url)
const redux = require("redux")
const {combineReducers, createStore} = redux
import movieReducer from "./movie.mjs"
import tvShowReducer from "./tvShows.mjs"

const rootReducer = combineReducers({
    movies: movieReducer,
    tvShows: tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store