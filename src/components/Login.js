import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Login.css'

export default function Login() {
return (
    <>
        <div className='LoginCenter'>
            <h1 className='LoginCenterHeading'>LOG IN</h1>
            <table className='tableLogin'>
                <tr>
                    <td><strong>First Name :</strong></td>
                    <TextField id="outlined-basic" label="Email"  variant="outlined" />
                </tr>
                <tr>
                    <td><strong>Last Name :</strong></td>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </tr>
            </table>
            <Button variant="contained">SignUp</Button>
        </div>
    </>
);
}
