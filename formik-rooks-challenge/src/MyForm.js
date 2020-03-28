import React, { useState, Fragment } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import './index.css';
import { initialValues } from './initialValues';
import { inputText as InputText } from './inputText';
import SubmitSnackbar from './SubmitSnackbar';
import * as Yup from 'yup'

const MyForm = () => {
	const [ open, setOpen ] = useState(false);
	
	const formik = useFormik({
		initialValues,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('field name is required'),
      number: Yup.number().required('field number is required'),
      cvc: Yup.string().required('field cvc is required'),
      expiry: Yup.string().required('field expiry is required')
    }),
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
