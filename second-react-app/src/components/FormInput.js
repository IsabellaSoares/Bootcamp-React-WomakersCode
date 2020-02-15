import React, { Component } from 'react';
import './formInput.css';

export default class FormInput extends Component {
	render() {
		return (
			<div className="inputs-container">
				<label>
					Nome completo
					<input type="text" name="name" value={this.props.name} onChange={this.props.onChange} />
				</label>
				<label>
					Cidade
					<input type="text" name="city" value={this.props.city} onChange={this.props.onChange} />
				</label>
				<label>
					Email
					<input type="text" name="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.onChange} />
				</label>
				<label>
					CPF
					<input type="text" name="cpf" placeholder="000.000.000-00" value={this.props.cpf} onChange={this.props.onChange} />
				</label>
				<label>
					Telefone
					<input type="text" name="phone" placeholder="(xx) xxxxx-xxxx" value={this.props.phone} onChange={this.props.onChange} />
				</label>
			</div>
		);
	}
}
