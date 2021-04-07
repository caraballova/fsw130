import React from 'react'
import Header from './Header'
import { Link, Route, Switch } from 'react-router-dom'
import FormPage from './Pages/FormPage.js'
import HomePage from './Pages/HomePage'
import Footer from './Footer'



function App() {

    return (
        <div >
            <div className="nav">
                <Link to="/homePage">Home</Link>
                <br />
                <Link to="/formPage">Form</Link>  
            </div>
            <br />
            <Header />

            <Switch>
                <Route path="/formPage"><FormPage /></Route>
                <Route path="/homePage"><HomePage /></Route>

            </Switch>
            <Footer />
        </div>
    )
}

export default App
