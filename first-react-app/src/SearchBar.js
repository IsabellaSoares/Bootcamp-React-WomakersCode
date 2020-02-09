import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: this.props.input,
            isChecked: this.props.isChecked
        }
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    handleCheckbox = () => {
        this.setState({ isChecked: !this.state.isChecked });
    }

    render () {
        return (
            <form style={{display: "inline-grid"}}>
                <input type="text" placeholder="Search..." value={this.state.input} onChange={this.handleInput}/>
                <label>
                    <input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckbox}/>
                    Only show products in stock
                </label>                
            </form>
        );
    }    
}