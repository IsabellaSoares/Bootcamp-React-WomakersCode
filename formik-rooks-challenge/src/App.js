import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  address: {
    street: '',
    number: '',
    city: ''
  },
  password: '',
  confirmPassword: ''
};

const MyForm = () => {
  const onSubmit = values = {};

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <form>
      <input placeholder='Name'/>
      <br />
      <input placeholder='Email'/>
      <br />
      <input placeholder='Password'/>
      <br />
      <input placeholder='Confirm password'/>
      <br />
      <input placeholder='Address'/>
      <br />
      <input placeholder='City'/>
    </form>
  );
}

export default MyForm;
