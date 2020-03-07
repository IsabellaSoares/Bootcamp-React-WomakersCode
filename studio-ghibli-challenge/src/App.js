import React from 'react'
import './App.css'
import LogoGhibli from './logo.png';
import MoviesList from './MoviesList';

function App() {
  return (
    <div className="App">
      <img src={LogoGhibli} />
      <MoviesList />
    </div>
  )
}

export default App
