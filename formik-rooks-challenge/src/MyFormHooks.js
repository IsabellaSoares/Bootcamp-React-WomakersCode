import React from 'react';
import './index.css';
import { Field } from 'formik';
import { useInput } from './customHooks/useInput';
// import { useInput } from './customHooks/useInput';
// import { useInput } from './customHooks/useInput';

const MyFormHooks = () => {

	const name = useInput('');
	const email = useInput('');
	const street = useInput('');
	const	number = useInput('');
	const	city = useInput('');
	const password = useInput('');
	const confirmPassword = useInput('');

	return (
		<div className="my-form">
			<form>
				<input placeholder="Name" {...name} />
				<br />
				<input placeholder="Email" {...email} />
				<br />
				<input placeholder="Password" {...password} />
				<br />
				<input placeholder="Confirm password" {...confirmPassword} />
				<br />
				<input placeholder="Street" {...street} />
				<br />
				<input placeholder="Number" {...number} />
				<br />
				<input placeholder="City" {...city} />
			</form>
		</div>
	);
};

export default MyFormHooks;
