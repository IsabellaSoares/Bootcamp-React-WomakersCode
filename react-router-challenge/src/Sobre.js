import React from 'react';
import logo from './logo.svg';
import './App.css';

function Sobre() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Página de Sobre</h1>
      </header>
      <p className="App-intro">
          Exemplo de página Sobre :D
      </p>
    </div>
  );
}

export default Sobre;
