import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Home</h1>
      </header>
      <p className="App-intro">
          Home :D
          <Link to="/sobre">Ir para a página de Sobre</Link>
      </p>
    </div>
  );
}

export default App;
