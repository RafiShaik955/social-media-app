import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './signup.css'

export default function BasicTextFields() {
return (
    <>
        {/* <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
        > 
        </Box> */}
        <div className='createAccountCenter'>
            <center className='createAccountHeading'><h1>CREATE ACCOUNT</h1></center>
            <table className='tableSignUp'>
                <tr>
                    <td><strong>First Name :</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Last Name :</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Age Name :</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Email :</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Password :</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Confirm Password:</strong></td>
                    <TextField id="outlined-basic"  variant="outlined" />
                </tr>
            </table>
            <Button variant="contained">SignUp</Button>
        </div>
        
        
    </>
);
}
