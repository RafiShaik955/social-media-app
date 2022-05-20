import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Login.css'


export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    validateForm(e){
        if(this.state.email==='' || this.state.password ==='')
        alert("Please Fill Both the Fields");
        if (!(this.state.email==='')) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                
                alert("Please enter valid email address.");
            }
        }
    }
    
    render(){
        return (
            <>
                <div className='LoginCenter' >
                    <h1 className='LoginCenterHeading'>LOG IN</h1>
                    <table className='tableLogin'>
                        <tr>
                            <td><strong>First Name :</strong></td>
                            <TextField id="outlined-basic" name='email' label="Email"  variant="outlined" value={this.state.email} onChange={this.handleChange}/>
                        </tr>
                        <tr>
                            <td><strong>Last Name :</strong></td>
                            <TextField id="outlined-basic" name='password' label="Password" variant="outlined" value={this.state.password} onChange={this.handleChange}/>
                        </tr>
                    </table>
                    <Button variant="contained"    onClick={this.validateForm}>Login</Button>
                </div>
            </>
        )
    }
    
}
