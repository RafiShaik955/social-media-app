import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css'


export default class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            Age :'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    validateForm(e){
        // console.log('validate');
        if(this.state.firstName==='' || this.state.lastName ==='' || this.state.Age===''||this.state.email===''||this.state.password===''||this.state.confirmPassword=='')
        alert("Please Fill All  the Fields");
        if (!(this.state.email==='')) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                
                alert("Please enter valid email address.");
            }
        }
        if(!(this.state.password.length>=6 && this.state.password.length<=14))
        {
            console.log(this.state.password.length);
            alert("password range between 6 characters to 14 characters");
        }
        if(!(this.state.password===this.state.confirmPassword))
        {
            console.log("not matched");
        }
        else
        console.log("matched");
    }
    
    render(){
        return (
            <>
                <div className='createAccountCenter'>
                    <h1 className='createAccountHeading'>CREATE ACCOUNT</h1>
                    <table className='tableSignUp'>
                        <tr>
                            <td><strong>First Name :</strong></td>
                            <TextField id="outlined-basic"  name='firstName'  variant="outlined" value={this.state.firstName} onChange={this.handleChange} />
                        </tr>
                        <tr>
                            <td><strong>Last Name :</strong></td>
                            <TextField id="outlined-basic"  name='lastName' variant="outlined" value={this.state.lastName} onChange={this.handleChange}/>
        
                        </tr>
                        <tr>
                            <td><strong>Age  :</strong></td>
                            <TextField id="outlined-basic"  name='Age' variant="outlined" value={this.state.Age} onChange={this.handleChange}/>        
                        </tr>
                        <tr>
                            <td><strong>Email :</strong></td>
                            <TextField id="outlined-basic"  name='email' variant="outlined" value={this.state.email} onChange={this.handleChange}/>
        
                        </tr>
                        <tr>
                            <td><strong>Password :</strong></td>
                            <TextField id="outlined-basic"  name='password' variant="outlined" value={this.state.password} onChange={this.handleChange}/>
        
                        </tr>
                        <tr>
                            <td><strong>Confirm Password:</strong></td>
                            <TextField id="outlined-basic"  name='confirmPassword' variant="outlined" value={this.state.confirmPassword} onChange={this.handleChange}/>
        
                        </tr>
                    </table>
                    <Button variant="contained" onClick={this.validateForm}>SignUp</Button>
                </div>
                
                
            </>
        );
    }
    
}
