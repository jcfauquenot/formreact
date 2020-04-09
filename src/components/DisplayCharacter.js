import React from 'react';

const DisplayCharacter = ({character}) => {

    return (
        <div >
            <img className="imgCharacter" src={character.image} alt={character.name}/>
            <p key={character.id}>{character.name}</p> 
        </div>
    )
    
}
  
export default DisplayCharacter;