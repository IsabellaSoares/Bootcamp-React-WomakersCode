import React, { Component } from 'react';
import FormInput from './FormInput';

export default class RegisterForm extends Component {
	constructor() {
        super();
        
		this.state = {
			name: '',
			city: '',
			email: '',
			cpf: '',
			phone: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange (event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
            <FormInput {...this.state} onChange={this.handleInputChange} />
		);
	}
}
