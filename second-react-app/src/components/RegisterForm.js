import React, { Component } from 'react';
import FormInput from './FormInput';
import { SubmitButton } from './SubmitButton';

export default class RegisterForm extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            city: '',
            email: '',
            cpf: '',
            phone: ''
        }
    }

    render () {
        return(
            <form>
                <FormInput {...this.state}/>
                {SubmitButton}
            </form>
        );
    }
}