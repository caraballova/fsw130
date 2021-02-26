import React from "react";
import {MovieContextConsumer} from "../provider/movieContext";


class MovieForm extends React.Component {
    
    state = {
        title: "",
        rated: ""
    }


handleChange = (e) => { 
    const { name, value } = e.target
    this.setState({ [name] : value})
}
// clear content
clearField = (e) => {
    this.setState({
        title: "",
        rated: ""
    })
}
    

    render() {    
 // form used for inputs    
        return (
            <MovieContextConsumer> 
                    {({addMovies}) => (
                    <div className="form">  
                        <form>
                            <input
                                type="text"
                                name="title"
                                placeholder="Movie Title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <br/>
                            <br/>

                            <input
                                type="text"
                                name="rated"
                                placeholder="Release Date / Rated"
                                value={this.state.rated}
                                onChange={this.handleChange}
                            />
                            <br/>
                            <br/>

                            <button className="button"
                            onClick={(e) => {addMovies(e, this.state); this.clearField()}}
                            type="submit"
                            >Click Me to Add</button>
                        </form>
                    </div> 
                )}
            </MovieContextConsumer>
        )
    }
}

export default MovieForm;