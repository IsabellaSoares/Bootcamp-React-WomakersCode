import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFormUseFormik from './MyFormUseFormik';
import MyFormHooks from './MyFormHooks';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
	<Fragment>
		<Grid container item direction="row" justify="space-evenly" style={{padding: '30px 0'}}>
			<MyFormUseFormik />
			<MyFormUseFormik />
		</Grid>
	</Fragment>,
	document.getElementById('root')
);
