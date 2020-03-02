import React, { Component } from 'react';
import logo from './images/Hlogo.png';
import google from './images/google.png';
import './App.css';

//Componentes
import Inicio from './components/Inicio/Inicio';


class App extends Component {
  render(){
  return (
    <div className="App">

      <Inicio />

    </div>
  );

}

}

export default App;
