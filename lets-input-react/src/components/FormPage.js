import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import './style.css';

export default class FormPage extends Component {
    render () {
        return (
            <div className="form-container">
                <h4>Cadastro de Alunas</h4>
                <RegisterForm/>
            </div>
        );
    }
}