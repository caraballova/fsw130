import React from 'react'
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import Form from "./components/Form"
import Footer from "./components/Footer"

function App () {
   return (
      <div>
        <Header />
        <Form/>
        <Card/>
        <Footer />
      </div>
    );
}

export default App;
