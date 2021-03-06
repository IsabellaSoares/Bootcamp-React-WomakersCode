import React, { useState, Fragment } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import './index.css';
import { initialValues } from './initialValues';
import { inputText as InputText } from './inputText';
import SubmitSnackbar from './SubmitSnackbar';

const MyForm = () => {
	const [ open, setOpen ] = useState(false);
	
	const formik = useFormik({
		initialValues,
		onSubmit: values => {			
			setOpen(true);		
			setTimeout(() => formik.resetForm(), 6000);
		}
	});

	return (
		<Fragment>
			<Card className="my-form">
				<CardHeader title="Form with Formik Hooks" />
				<CardContent>
					<FormikProvider value={formik} >
						<form onSubmit={formik.handleSubmit}>
							<InputText label="Name" {...formik.getFieldProps('name')} />
							<InputText label="Email" {...formik.getFieldProps('email')} />
							<InputText label="Password" {...formik.getFieldProps('password')} />
							<InputText label="Confirm password" {...formik.getFieldProps('confirmPassword')} />
							<InputText label="Address" {...formik.getFieldProps('address')} />
							<InputText label="City" {...formik.getFieldProps('city')} />
							<Button variant="outlined" color="secondary" type="submit" style={{ marginTop: '20px' }}>
								Submit!
							</Button>
						</form>
					</FormikProvider>
				</CardContent>
			</Card>
			<SubmitSnackbar open={open} setOpen={setOpen} formik={formik} />
		</Fragment>
	);
};

export default MyForm;
