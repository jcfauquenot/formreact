import React, { Component } from 'react';
import "./characters.css"
import DisplayCharacter from './DisplayCharacter';

class Characters extends Component {

state = {
    characters: [] 
}

getCharacters = () => {
    fetch("https://melroune.github.io/starwars-api/api/all.json")
    .then (res => res.json())
    .then (res => this.setState({characters: res }))
}

componentDidMount () {
    console.log("chicken master")
    this.getCharacters() 
} 
    render() {
        return (
            <div>
                characters chicken school
                <div >
                {this.state.characters.map(character =>   (
                    <DisplayCharacter key={character.id} character={character} />
                ))}
                </div>
            </div>
        );
    }
}

export default Characters;