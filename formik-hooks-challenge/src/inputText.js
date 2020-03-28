import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';

export const inputText = ({ label, ...props }) => {
  return (
    <Fragment>
      <TextField 
        label={label} 
        {...props} 
        style={{ marginBottom: '10px' }} 
        color="secondary"
      />
      <br />
    </Fragment>
  );
}
