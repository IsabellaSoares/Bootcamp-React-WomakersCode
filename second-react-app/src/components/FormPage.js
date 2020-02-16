import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import './style.css';

export default class FormPage extends Component {
    render () {
        return (
            <div className="form-container">
                <h1>Cadastro de Alunas</h1>
                <RegisterForm/>
            </div>
        );
    }
}