import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                        onChange={this.props.onChange} />
				</FormGroup>				
				<FormGroup>
					<Label for="cpf">CPF</Label>
					<Input type="text"
						id="cpf"
						name="cpf"
						placeholder="000.000.000-00"
                        value={this.props.cpf}
                        onChange={this.props.onChange} />
				</FormGroup>
				<FormGroup>
					<Label for="phone">Telefone</Label>
					<Input type="tel"
						id="phone"
						name="phone"
                        placeholder="(xx) xxxxx-xxxx"
                        value={this.props.phone}
                        onChange={this.props.onChange} />
				</FormGroup>
                <Button className="submit-button">Inscrever</Button>
			</Form>
		);
	}
}
