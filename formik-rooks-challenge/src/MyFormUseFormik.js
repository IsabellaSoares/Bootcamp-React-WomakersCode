import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Card, CardHeader, CardContent, TextField, Button, Snackbar } from '@material-ui/core';
import './index.css';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialValues = {
	name: '',
	email: '',
	address: '',
	password: '',
	confirmPassword: ''
};

const MyFormUseFormik = () => {
	const [ open, setOpen ] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		formik.resetForm();
		setOpen(false);
	};

	const onSubmit = (values) => {
		setOpen(true);		
		setTimeout(() => formik.resetForm(), 6000);
	};

	const formik = useFormik({
		initialValues,
		onSubmit
	});

	return (
		<div>
			<Card className="my-form">
				<CardHeader title="Form with useFormik()" />
				<CardContent>
					<form onSubmit={formik.handleSubmit}>
						<TextField 
							label="Name" 
							{...formik.getFieldProps('name')} 
							style={{ marginBottom: '10px' }} 
						/>
						<br />
						<TextField 
							label="Email" 
							{...formik.getFieldProps('email')} 
							style={{ marginBottom: '10px' }} 
						/>
						<br />
						<TextField 
							label="Password" 
							{...formik.getFieldProps('password')} 
							style={{ marginBottom: '10px' }} 
						/>
						<br />
						<TextField
							label="Confirm password"
							{...formik.getFieldProps('confirmPassword')}
							style={{ marginBottom: '10px' }}
						/>
						<br />
						<TextField 
							label="Address" 
							{...formik.getFieldProps('address')} 
							style={{ marginBottom: '10px' }} 
						/>
						<br />
						<TextField 
							label="City" 
							{...formik.getFieldProps('city')} 
							style={{ marginBottom: '10px' }} 
						/>
						<br />
						<Button variant="outlined" color="primary" type="submit" style={{ marginTop: '20px' }}>
							Submit!
						</Button>
					</form>
				</CardContent>
			</Card>
			<div>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						Your submit using "useFormik()" is complete!
						<br />
						{JSON.stringify(formik.values, null, 2)}
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
};

export default MyFormUseFormik;
