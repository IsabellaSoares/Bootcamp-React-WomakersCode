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
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.name === '') {
            return alert('O campo \'Nome completo\' não pode estar vazio!');
        }

        if (this.state.city === '') {
            return alert('O campo \'Cidade\' não pode estar vazio!');
        }

        if (this.state.email === '') {
            return alert('O campo \'Email\' não pode estar vazio!');
        }

        if (this.state.cpf === '') {
            return alert('O campo \'CPF\' não pode estar vazio!');
        }

        if (this.state.phone === '') {
            return alert('O campo \'Telefone\' não pode estar vazio!');
        }
	}

	render() {
		return <FormInput {...this.state} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />;
	}
}
