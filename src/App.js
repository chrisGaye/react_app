import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycars from './components/Mycars';
import Test from './components/Test';

class App extends Component {

  state = {
    titre: 'Mes voitures',
  }
  
  changeTitle = (e) => {
    this.setState({
      titre: 'Nouveau titre'
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

   render(){
    return (
      <div className="App">
          <Mycars title ={this.state.titre}/>
          <input type="text" value={this.state.titre} onChange={this.changeViaInput} />
          <button onClick={this.changeTitle}>Changer titre</button>
          {/* <p>------------------------------</p>
          <Test></Test> */}
      </div>
    );
   }
   
}

export default App;
