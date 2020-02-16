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
			phone: '',
			validCPF: '',
			invalidCPF: '',
			validPhone: '',
			invalidPhone: '',
			validEmail: '',
			invalidEmail: ''
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

		if (name === 'cpf') {
			if (value.length < 11) {
				this.setState({
					invalidCPF: true,
					validCPF: false
				});
			} else {
				this.setState({
					invalidCPF: false,
					validCPF: true
				});
			}
		} 
		
		if (name === 'phone') {
			if (value.replace(/\D+/g, '').length < 11) {
				this.setState({
					invalidPhone: true,
					validPhone: false
				});
			} else {
				this.setState({
					invalidPhone: false,
					validPhone: true
				});
			}
		}

		if (name === 'email') {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if (!re.test(value)) {
				this.setState({
					invalidEmail: true,
					validEmail: false
				});
			} else {
				this.setState({
					invalidEmail: false,
					validEmail: true
				});
			}
		}
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
