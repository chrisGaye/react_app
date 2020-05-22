import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre: 'Mes voitures',
  }
  
   render(){
    return (
      <div className="App">
          <Mycars title ={this.state.titre}/>
      </div>
    );
   }
  
}

export default App;
