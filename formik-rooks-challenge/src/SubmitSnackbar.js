import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SubmitSnackbar = ({ open, setOpen, formik }) => {
  const handleClose = () => {  
    formik.resetForm();
    setOpen(false);
  };

  return (
		<div>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Your submit using Formik Hooks is complete!
					<br />
					{JSON.stringify(formik.values, null, 2)}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default SubmitSnackbar;
