import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // let url = 'https://swapi.dev/api/people/'

  const [characters, setCharacters] = useState({})
  // const [homeworlds, setHomeworlds] = useState({})

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // useEffect(() => {
    // axios.get('https://swapi.dev/api/planets/')
    // .then(res => {
    //   setHomeworlds(res.data)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  // }, [])

  // useEffect(() => {
  //   Array.from(characters).forEach(element => {
  //     axios.get(element.homeworld)
  //     .then(res => {
  //       setHomeworlds(res.data)  
  //       // console.log(res)
  //     })
  //   })
  // }, [characters])

  // console.log(homeworlds)

//   axios.get('https://swapi.dev/api/people/')
//   .then(res => {
//     setCharacters(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }, [])

  return (
    <div className="app">

      <div className="crawl">

        <h1 className="header">Characters</h1>

        {Array.from(characters).map((character) => (
          <Character character={character}/>
        ))}

        <p align-text="center">(this loops)</p>

      </div>
    </div>
  );
}

export default App;
