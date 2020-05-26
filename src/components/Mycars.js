import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{

   state  = {
       voitures: [
           {name: 'Ford', color: 'red', year: 2000},
           {name: 'Mercedes', color: 'black', year: 2010},
           {name: 'Peaugot', color: 'green', year: 2040}
       ]
   }

   addTenYears = () => {

    const updateState = this.state.voitures.map((param) => {
        return param.year -= 10;
    });
       
       this.setState({
          updateState
       })
   }

    render(){
       const year =  new Date().getFullYear(); //date actuelle
        return(
            <div>   
                <button onClick={this.addTenYears}>Add 10</button>
                <h1 id="titre">{this.props.title}</h1>
                {/* <p>Ceci est un est texte pour tester la fonctionnalité</p>  */}
                <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car>    
            </div>
            
        )
    }
}

export default Mycars;