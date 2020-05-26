import React, { Component } from 'react';

const Cars = ({children, color , year}) => {
    
    const colorInfo = color ? (<p>Couleur :{color}</p>) : (<p>Couleur :Néant</p>);
  
    if(children){
        return (
            <div style={{backgroundColor:'pink',width:'400px,padding-left:120px'}}>
                 <p>Marque : {children} </p>
                 <p>Année : {year} </p>
                 {colorInfo}
            </div>
        )
    }else{
        return null;
    }   
}

export default Cars;