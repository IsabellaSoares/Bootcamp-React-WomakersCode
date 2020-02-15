import React, { Component } from 'react';

export default class FormInput extends Component {
	render() {
		return (
			<div>
				<label>
					Nome completo
					<input type="text" />
				</label>
                <label>
					Cidade
					<input type="text" />
				</label>
                <label>
					Email
					<input type="text" placeholder="email@email.com" />
				</label>
                <label>
					CPF
					<input type="text" placeholder="000.000.000-00" />
				</label>
                <label>
					Telefone
					<input type="text" placeholder="(xx) xxxxx-xxxx" />
				</label>
			</div>
		);
	}
}
