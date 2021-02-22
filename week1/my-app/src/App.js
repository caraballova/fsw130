import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'
import Select from './components/Select'


function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <br />
      <br />
      <Button></Button>
      <br />
      <br />
      <Select></Select>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App; 
