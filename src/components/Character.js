// Write your Character component here
import React from 'react';
import styled from "styled-components"
import axios from 'axios';
// import '../App.css'

const CharacterWrapper = styled.div`
    background-color: black;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */
    text-align: center;
`;

const CharacterName = styled.h2`
    color: Yellow;
`;

const CharacterBio = styled.h4`
    color: Yellow;
`;

// function getHomeworld(props) {
//     axios.get(`${props.homeworld}`)
//     .then(res => {
//         props.homeworld = res.data.name
//         console.log(props.homeworld)
//     })
//     .catch(err => {
//         console.log(err)})
// }

// function getStarships(props) {
//     let characterStarships = props.starships
//     for(let i = 0; i < characterStarships.length; i++) {
//     // props.starships.forEach(element => {
//         axios.get(props.starships[i])
//         .then(res => {
//             if(i === 0) {
//                 props.starships = `${res.data.name}`
//             } else {
//                 props.starships = props.starships + `, ${res.data.name}`
//             console.log(props.starships)
//             }
//         })
//         .catch(err => {
//             console.log(err)})
//     }

// }


function Character(props) {
    const { character} = props

    // getHomeworld(character)
    // getStarships(character)


    return (
        <CharacterWrapper key={`${character.name}-wrapper`} id={`${character.name}-wrapper`} className = 'character-wrapper'>

            {console.log(character)}

            <CharacterName key={`${character.name}-name`} id={`${character.name}-name`} className = 'character-name'>{character.name}</CharacterName>

            <CharacterBio key={`${character.name}-bio`} id={`${character.name}-bio`} className = 'character-bio'>

                <p>Films: {character.films}</p>

                <p>Homeworld: {character.homeworld}</p>

                <p>Birth Year: {character.birth_year}</p>

                <p>Starships: {character.starships}</p>

            </CharacterBio>

        </CharacterWrapper>
    )
}

export default Character