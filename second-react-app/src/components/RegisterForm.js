import React, { Component } from 'react';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

export default class RegisterForm extends Component {
    render () {
        return(
            <div>
                <FormInput/>
                <SubmitButton/>
            </div>
        );
    }
}