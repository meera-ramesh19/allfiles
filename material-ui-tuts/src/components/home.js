import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core//Avatar';
import Button from '@material-ui/core//Button';
import CssBaseline from '@material-ui/core//CssBaseline';
import TextField from '@material-ui/core//TextField';
import FormControlLabel from '@material-ui/core//FormControlLabel';
import Checkbox from '@material-ui/core//Checkbox';
import Link from '@material-ui/core//Link';
import Paper from '@material-ui/core//Paper';
import Box from '@material-ui/core//Box';
import Grid from '@material-ui/core//Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from '@material-ui/core//Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, grey} from '@mui/material/colors';
import logo from "../logo.svg"


const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: grey[50],
    },
  },
 
});


const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(2),
      },
      featureList: {
        padding: theme.spacing(2),
      },
    }));

const paperStyle = { padding: '30px 20px', width: 600, height:'70vh', margin: "20px auto" }
const headerStyle = { margin: 1}
const centerStyle={margin:'100'}

const Home= ()  =>{

    const classes = useStyles();
     return (
      <Paper elevation={6} style={paperStyle}>
          <div>
           
             <Grid container  direction="row"
                 alignItems="center"
                 justifyContent="center"
                  style={{ minHeight: '60vh' }}spacing={0} columns={{ xs: 12,  md: 6 }} >
                 
                
               <Grid item xs={12} sm={6} style={{width:"50%"}} >
              
              <div >
                <Typography component="h1" variant="h4" className={classes.title}>
                 Roommate
                </Typography>
                <Box sx={{m:-4}}></Box>
                <Typography component="h4" variant="subtitle2" className={classes.featureList}>
                  An app for scheduling household chores for communal living
                 </Typography>
                 <br/>
               
                 <Button
                  type="submit"
                   fullWidth
                   variant="outlined"
                   sx={{ mt: 5, mb: 5 }} style={{theme}}
                 >
                   <Link to="/home">
                 Get started
                 </Link>
                 </Button>
                
               </div>
              
             </Grid>
             <Grid item xs={12} sm={6}  align="center" justify="center" style={{width:"50%"}}>
           
           <div>
           <img src={logo}
            style={{ width:"100%", height:"100%", objectFit:"cover"}} 
           alt="logo"
           />

           </div>
         </Grid>

       </Grid>
       
          </div>
          </Paper>
     );
};
export default Home;