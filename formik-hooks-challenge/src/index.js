import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './MyForm';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
		<Grid container item direction="row" justify="space-evenly" style={{padding: '30px 0'}}>
			<MyForm />
		</Grid>,
	document.getElementById('root')
);
