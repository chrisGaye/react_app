import React, { Component } from 'react';

const Cars = ({children,color, year}) => {
    
    const colorInfo = color ? (<p>Couleur :{color}</p>) : (<p>Couleur :Néant</p>);

    return (
        <div style={{backgroundColor:'pink',width:'400px,padding-left:120px'}}>
             <p>Marque : {children} </p>
             {colorInfo}
        </div>
    )
}

export default Cars;