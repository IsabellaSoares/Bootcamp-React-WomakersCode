import React, { Component } from 'react';
import { LabelInput } from './LabelInput';
import './formInput.css';

export default class FormInput extends Component {
    render() {
		return (
			<div className="inputs-container">
                <LabelInput label="Nome completo" type="text" value={this.props.name} />
                <LabelInput label="Cidade" type="text" value={this.props.city} />
                <LabelInput label="Email" type="text" placeholder="email@email.com" value={this.props.email} />
                <LabelInput label="CPF" type="text" placeholder="000.000.000-00" value={this.props.cpf} />
                <LabelInput label="Telefone" type="text" placeholder="(xx) xxxxx-xxxx" value={this.props.phone} />
			</div>
		);
	}
}
