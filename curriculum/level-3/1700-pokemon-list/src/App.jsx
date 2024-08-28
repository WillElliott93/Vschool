import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    axios.get('https://api.vschool.io/pokemon')
      .then(response => {
        setPokemonList(Object.values(response.data.objects[0].pokemon));
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []);

  console.log(pokemonList)

  useEffect(() => {
    axios.get('https://random-color.onrender.com/colors/random')
      .then(response => {
        setBackgroundColor(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching random color:', error);
      });
  }, []);

  const changeBackgroundColor = () => {
    axios.get('https://random-color.onrender.com/colors/random')
      .then(response => {
        setBackgroundColor(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching new random color:', error);
      });
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <h1 style={{fontSize: '60px'}}>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li style={{fontSize: '35px'}} key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
