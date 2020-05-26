import React, { Component } from 'react';
import Toto from './Toto';

class Maman extends Component{

    state = {
       messageMaman: null,
       messageToto : null
    }

    ordreMaman = () => {
        this.setState({
            messageMaman: 'Va ranger ta chambre'
        })
    }

    reponseToto = () => {
        this.setState({
            messageMaman: "D'accord Maman"
        })
    }


   render(){
       return(
          <div className="">
              <h2>Maman</h2>
              <button onClick={this.ordreMaman}>Ordre de Maman</button>
              <hr/>        
              <p>{this.state.messageMaman}</p>
              <Toto name="Toto" reponseToto={this.reponseToto} leState={this.state}/>

          </div>
       )
   }
}

export default Maman;