import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{

   noCopy = () => {
       alert('Merci de ne pas copier le texte');
   }

    render(){
        return(
            <div>
                <h1 id="titre">{this.props.title}</h1>
                <p onCopy={this.noCopy}>Ceci est un est texte pour tester la fonctionnalité</p> 
                <Car>Ford</Car>
                <Car color="yellow">Mercedes</Car>
                <Car color="green">Peugeot</Car>
            </div>
            
        )
    }
}

export default Mycars;