import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

export default class FormPage extends Component {
    render () {
        return (
            <div>
                <h1>Cadastro de Alunas</h1>
                <RegisterForm/>
            </div>
        );
    }
}