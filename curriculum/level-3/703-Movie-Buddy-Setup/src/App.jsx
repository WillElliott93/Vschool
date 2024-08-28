import React from 'react'
import RandomMovie from './components/RandomMovie'
import { useState } from 'react'
import Navbar from './components/Navbar'
import FavoriteMovie from './components/FavoriteMovies'
import Form from './components/Form'

function App() {

  const [theme, setTheme] = useState('light')


  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const [favMovies, setFavMovies] = useState([])
  console.log(favMovies)
  function addMovie(newMovie) {
    setFavMovies(prevFavMovies => {
      return [...prevFavMovies, newMovie]
    })
  }

  return (
    <div className={`${theme} main`}>
      <Navbar toggleTheme={toggleTheme}/>
      <RandomMovie addMovie={addMovie}/>
      <Form addMovie = {addMovie}/>
      <FavoriteMovie favMovies={favMovies}/>
    </div>
  )
}

export default App
