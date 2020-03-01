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
			validName: '',
			validCity: '',
			validCPF: '',
			validPhone: '',
			validEmail: ''
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
					validCPF: false
				});
			} else {
				this.setState({
					validCPF: true
				});
			}
		} 
		
		if (name === 'phone') {
			if (value.replace(/\D+/g, '').length < 11) {
				this.setState({
					validPhone: false
				});
			} else {
				this.setState({
					validPhone: true
				});
			}
		}

		if (name === 'email') {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if (!re.test(value)) {
				this.setState({
					validEmail: false
				});
			} else {
				this.setState({
					validEmail: true
				});
			}
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		var submit = true;
        
        if (this.state.name === '') {
            this.setState({
				validName: false
			});

			submit = false;
        }

        if (this.state.city === '') {
            this.setState({
				validCity: false
			});

			submit = false;
        }

        if (this.state.email === '') {
            this.setState({
				validEmail: false
			});

			submit = false;
        }

        if (this.state.cpf === '') {
			this.setState({
				validCPF: false
			});

			submit = false;
        }

        if (this.state.phone === '') {
            this.setState({
				validPhone: false
			});

			submit = false;
		}
		
		if (!submit) return;
	}

	render() {
		return <FormInput {...this.state} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />;
	}
}
