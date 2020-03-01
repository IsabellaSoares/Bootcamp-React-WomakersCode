import React, { Component } from 'react';
import './style.css';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	handleInStockChange(e) {
		this.props.onInStockChange(e.target.checked);
	}

	render() {
		return (
			<form className="form">
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					onChange={this.handleFilterTextChange}
					className="search-input"
				/>
				<label>
					<input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange} />
					Only show products in stock
				</label>
			</form>
		);
	}
}
