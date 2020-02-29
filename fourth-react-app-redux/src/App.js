import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

class App extends Component {
  render () {
    return (
      <div className="App" style={{ padding: '10px' }}>
        <input type='text' />
        <button>Click me!</button>
        <h1>teste</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
