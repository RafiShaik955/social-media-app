import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css'

export default function SignUp() {
return (
    <>
        <div className='createAccountCenter'>
            <h1 className='createAccountHeading'>CREATE ACCOUNT</h1>
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
