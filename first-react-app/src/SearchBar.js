import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: this.props.input,
            isChecked: this.props.isChecked
        }
    }

    render () {
        return (
            <form style={{display: "inline-grid"}}>
                <input type="text" placeholder="Search..." value={this.state.input}/>
                <label>
                    <input type="checkbox" checked={this.state.isChecked}/>
                    Only show products in stock
                </label>                
            </form>
        );
    }    
}