import React from 'react';

const Toto = props => {

   const btnReponseToto = props.leState.messageMaman != null ? (<button onClick={props.reponseToto}>Réponse</button>) : (<button disabled>Réponse</button>)

    return (
        <div>
            <h2>{props.name}</h2>
            {btnReponseToto}
        </div>
    )
}

export default Toto;