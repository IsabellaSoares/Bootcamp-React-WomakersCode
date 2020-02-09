import React, { Component } from 'react';
import { PRODUCTS } from '../../mock';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import './style.css';

export default class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(filterText) {
		this.setState({ filterText: filterText });
	}

	handleInStockChange(inStockOnly) {
		this.setState({ inStockOnly: inStockOnly });
	}

	render() {
		return (
			<div className="container">
				<div className="box">
					<SearchBar
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
						onFilterTextChange={this.handleFilterTextChange}
						onInStockChange={this.handleInStockChange}					
					/>
					<ProductTable
						products={PRODUCTS}
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
					/>
				</div>				
			</div>
		);
	}
}
