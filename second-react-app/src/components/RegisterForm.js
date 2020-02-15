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
        if (this.state.name === '') {
            alert('O campo \'Nome completo\' não pode estar vazio!');
            event.preventDefault();
        }

        if (this.state.city === '') {
            alert('O campo \'Cidade\' não pode estar vazio!');
            event.preventDefault();
        }

        if (this.state.email === '') {
            alert('O campo \'Email\' não pode estar vazio!');
            event.preventDefault();
        }

        if (this.state.cpf === '') {
            alert('O campo \'CPF\' não pode estar vazio!');
            event.preventDefault();
        }

        if (this.state.phone === '') {
            alert('O campo \'Telefone\' não pode estar vazio!');
            event.preventDefault();
        }
	}

	render() {
		return <FormInput {...this.state} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />;
	}
}
