import React from 'react'
import { Grid, Paper,  Link, Box, Typography, TextField, Button, } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormGroup from '@material-ui/core/FormGroup';

const Forgotpassword = () =>{

  const [values, setValues] = React.useState({
    // username: '',
    email: '',
    // password: '',
});

const [error, setError] = React.useState({
    emailError: '',
    // passwordError: '',
    // usernameError: ''
});


const validateEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(values.email)){
        setError(prevState => ({ ...prevState, emailError: 'Email is invalid'}))
    }else {
        setError(prevState => ({ ...prevState, emailError: false }));
    }
};


const handleSubmit = (e) => {
    e.preventDefault();
   
    // if(!values.username){
    //     setError(prevState => ({ ...prevState, usernameError: 'Username is required'}));
        
    // }
    if(!values.email){
        setError(prevState => ({ ...prevState, emailError: 'Email is required'}));
       
     }
    //  if(!values.password){
    //      setError(prevState => ({ ...prevState, passwordError: 'Password is required'}));
      
    // }
    else {
        alert(JSON.stringify({
            username: values.username + '/n',
            email: values.email + '/n',
            password: values.password,
        }));
        
    }
};



const paperStyle = { padding: '30px 20px', width: 600, height:'70vh', margin: "20px auto" }
const headerStyle = { margin: 1}

return (
    <Grid>
        <Paper elevation={6} style={paperStyle}>
        <Grid container direction="row" align="left" style={headerStyle}>
          <ArrowBackIcon/><Link variant="subtitle2" href="./components/login">Back to login</Link>
         
          </Grid>
        <div style ={{height:30}}/>
            <Grid align='center'>
             
                <h2 style={headerStyle} variant="subtitle1">Forgot Password</h2>
                <div style ={{height:5}}/>
                <Typography variant='caption' display='block' align='center' gutterBottom>Please enter your registered email address</Typography>
                 <Box sx={{m:-1}}></Box>
                <Typography variant='caption' display='block' align='center' gutterBottom> We'll send instructions to help reset your password</Typography>
            </Grid>
            <div style ={{height:30}}/>
            <form>
            <FormGroup>
                <Grid align="left">
              
                <Typography variant='caption' gutterBottom>Email</Typography>
             
                <br/>
                <TextField 
                    variant="outlined"
                    color="primary"
                    name="email"
                    id="email"
                    size="small"
                    onBlur={() => validateEmail()}
                     error={error.emailError}
                    fullWidth
                    value={values.email}
                    onChange={(e) => handleSubmit(e)}
                />
                <br/>
                </Grid>
        

                 <Box sx={{ p:3 }}>
                <Button fullWidth type='submit' variant='contained' color='primary'>Send Reset Instructions</Button>
                </Box>
               
                  
               </FormGroup>
            </form>
            

        </Paper>
    </Grid>
    )
}

export default Forgotpassword;