import React, { Component } from 'react';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

export default class RegisterForm extends Component {
    render () {
        return(
            <form>
                <FormInput/>
                <SubmitButton/>
            </form>
        );
    }
}