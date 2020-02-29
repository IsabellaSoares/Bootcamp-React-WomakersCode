import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render () {
    const { clickButton, newValue } = this.props;

    return (
      <div className="App" style={{ padding: '10px' }}>
        <input type='text' value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={() => clickButton(this.state.inputValue)}>Click me!</button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
