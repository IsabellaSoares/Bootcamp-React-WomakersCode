import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import InputMask from 'react-input-mask';

export default class FormInput extends Component {
	render() {
		return (
			<Form className="inputs-container" onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label for="name">Nome completo</Label>
					<Input type="text"
						id="name"
						name="name"
                        value={this.props.name}
						onChange={this.props.onChange} />					
				</FormGroup>
				<FormGroup>
					<Label for="city">Cidade</Label>
					<Input type="text"
						id="city"
                        name="city"
                        value={this.props.city}
                        onChange={this.props.onChange} />
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input type="email"
						id="email"
						name="email"
                        placeholder="email@email.com"
                        value={this.props.email}
						onChange={this.props.onChange}
						valid={this.props.validEmail}
						invalid={this.props.invalidEmail} />
					<FormFeedback invalid>Email deve conter '@' e '.com'</FormFeedback>
				</FormGroup>				
				<FormGroup>
					<Label for="cpf">CPF</Label>
					<Input type="text"
						id="cpf"
						name="cpf"
						placeholder="000.000.000-00"
						maxlength={11}
                        value={this.props.cpf}
						onChange={this.props.onChange}
						valid={this.props.validCPF}
						invalid={this.props.invalidCPF} />
					<FormFeedback invalid>CPF deve ter 11 dígitos</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="phone">Telefone celular</Label>
					<Input type="tel"
						id="phone"
						name="phone"
                        placeholder="(xx) xxxxx-xxxx"
                        value={this.props.phone}
                        onChange={this.props.onChange}
						mask="(99) 99999-9999"
						tag={InputMask}
						valid={this.props.validPhone}
						invalid={this.props.invalidPhone} />
					<FormFeedback invalid>Número de telefone deve ter 11 dígitos</FormFeedback>
				</FormGroup>
                <Button className="submit-button">Inscrever</Button>
			</Form>
		);
	}
}
