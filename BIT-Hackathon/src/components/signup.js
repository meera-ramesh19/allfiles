import React, { useState } from 'react'
import { Grid, Chip, Paper, Link, Box, Typography, TextField, Button, Divider, InputAdornment, SvgIcon} from '@material-ui/core'
// import Icon from '@mui/material/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
 import Visibility from "@material-ui/icons/Visibility";
 import VisibilityOff from "@material-ui/icons/VisibilityOff";
 import GitHubIcon from "@material-ui/icons/GitHub";
 import GTranslateICon from "@material-ui/icons/GTranslate";
import TwitterIcon from "@material-ui/icons/Twitter";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
//import rtlPlugin from "stylis-plugin-rtl";
import { blue, grey} from '@mui/material/colors';
import ContainedButtons from './containedbuttons';

 const theme = createTheme({
//     direction: 'rtl', // Both here and at <body dir="rtl">
   });

const Signup = () => {

    const [values, setValues] = React.useState({
        
        email: '',
        password: '',
    });
    const [error, setError] = React.useState({
        emailError: '',
        passwordError: ''
        
    });
    const [showPassword, setShowPassword] = React.useState(false);
    // const styles = useStyles();
    const [disabled, setDisabled] = React.useState(true);
    const [checked, setChecked] = React.useState(true);

    const handleCheckedChange = (event) => {
        setChecked(event.target.checked);
      };


    const validateEmail = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(values.email)){
            setError(prevState => ({ ...prevState, emailError: 'Email is invalid'}))
        }else {
            setError(prevState => ({ ...prevState, emailError: false }));
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        if(!values.email || !values.password ){
            setDisabled(true);
        }else if(error.emailError || error.passwordError ){
            setDisabled(true);
        }
        if(name === 'email') {
            validateEmail();
        };
        setDisabled(false);
        setValues(prevState => ({ ...prevState, [name]: val }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       
        
        if(!values.email){
            setError(prevState => ({ ...prevState, emailError: 'Email is required'}));
           
        }if(!values.password){
             setError(prevState => ({ ...prevState, passwordError: 'Password is required'}));
          
        }
        else {
            alert(JSON.stringify({
              
                email: values.email + '/n',
                password: values.password,
            }));
            
        }
    };

    const handlePassChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const paperStyle = { padding: '30px 20px', width: 600, height:'70vh', margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const twitterStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    return (
        <Grid>
            <Paper elevation={6} style={paperStyle}>
                <Grid align='center'>
                 
                    <h2 style={headerStyle} variant="subtitle1">Create an Account</h2>
                    <Typography variant='caption' gutterBottom>Already a member?<Link href="#">Login</Link></Typography>
                </Grid>
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
                  
                    onChange={(e) => handleChange(e)}
                />
                    
                    <Typography variant='caption' gutterBottom >Password</Typography>
                   
                   <br/>
                   
                   {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          {/* <OutlinedInput
             id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handlePassChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
           
          />
             </FormControl> 
          */}

                    <TextField fullWidth variant="outlined"  
                     color="primary"
                     name="password"
                     id="passwordl"
                     size="small"
                     error={error.emailError}
                     fullWidth
                     value={values.password}
                     
                     onChange={(e) => handleChange(e)}
                              InputProps={{
                                  startAdornment:( <InputAdornment position="end">
                                      
                                      <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                           edge="end" >
                                {showPassword ? <Visibility  style={{ color: '#272727', fontSize: 20 }} /> : <VisibilityOff  style={{ color: '#272727', fontSize: 20 }} />}
                            </IconButton>
                                  </InputAdornment>
                                  ),
                              }}
                              />
                    </Grid>
             
    
                 
                    <Box sx={{ mt:-2, ml:-40}}>  
                     <div style ={{height:20}}/>
                    <FormControl> 
                    <FormControlLabel
                        control={<Checkbox name="checkedA" 
                        checked={checked} 
                        onChange={handleCheckedChange} required/>}
                        label= {<div>
                            <span>I agree to the  </span>
                            <Link to={'/terms'}>Terms of Service.</Link>
                         </div>
                         }
                     />
                     </FormControl>
                     </Box>

                     <Box sx={{ p:3 }}>
                    <Button fullWidth type='submit' variant='contained' color='primary'>Sign up</Button>
                    </Box>
                   </FormGroup>
                </form>
                <div style={{height:20}}/>
                <Typography variant='caption' align="center" gutterBottom >or login with</Typography>
                   
                <div style={{height:10}}/>
                     <Grid container direction="row" justify="center" alignItems="center" spacing={2} sx={{ color: 'text.ssecondary' }}>
                           {/* <ContainedButtons/> */}
                           
                            <Grid item >
                                 {/* <Chip icon={<GTranslateIcon />}  component="a" href="www.google.com" /> */} 
                              
                               <GitHubIcon onClick={event => window.location.href='www.google.com'} />

                           </Grid> 
                        
                         <Grid item> 

                                {/* <Chip icon={<GitHubIcon />}  component="a" href="www.github.com" /> */}
                          <GitHubIcon onClick={event =>  window.location.href='www.github.com'} />
                          </Grid>
                          <Grid item >
                                   {/* <Chip icon={<TwitterIcon />}  component="a" href="www.twitter.com" /> */}
                         <TwitterIcon style={{twitterStyle}} onClick={event =>  window.location.href='www.twitter.com'} /> 
                       
                           </Grid> 
                         
                     </Grid>
            
            </Paper>
        </Grid>
    )
}

export default Signup;

