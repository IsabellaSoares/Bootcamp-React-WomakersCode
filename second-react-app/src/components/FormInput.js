import React, { Component } from 'react';
import { LabelInput } from './LabelInput';
import './formInput.css';

export default class FormInput extends Component {
	render() {
		return (
			<div className="inputs-container">
                <LabelInput label="Nome completo" type="text" />
                <LabelInput label="Cidade" type="text" />
                <LabelInput label="Email" type="text" placeholder="email@email.com" />
                <LabelInput label="CPF" type="text" placeholder="000.000.000-00" />
                <LabelInput label="Telefone" type="text" placeholder="(xx) xxxxx-xxxx" />
			</div>
		);
	}
}
