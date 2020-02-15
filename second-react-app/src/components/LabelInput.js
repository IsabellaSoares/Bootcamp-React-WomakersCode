import React, { Component } from 'react';
import './formInput.css';

export function LabelInput (props) {
    return (
        <label>
            {props.label}
            <input type={props.type} placeholder={props.placeholder} value={props.value} />
        </label>
    );
}