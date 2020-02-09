import React, { Component } from 'react';
import { PRODUCTS } from './mock';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            isChecked: false
        }
    }
    
    render () {
        return (
            <div>
                <SearchBar input={this.state.input} isChecked={this.state.isChecked} />
                <ProductTable products={PRODUCTS} isChecked={this.state.isChecked} />
            </div>            
        );
    }
}