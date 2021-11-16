import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import '../App.css';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
        <TextField id="standard-basic" label="Username*" variant="standard" />
        <TextField id="standard-basic" label="Password*" variant="standard" />
        <Button variant="contained">LOGIN</Button>
    </Stack>
  );
}