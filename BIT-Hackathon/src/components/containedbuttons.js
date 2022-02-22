import google from "../assets/images/google.svg";
import { Button }from '@material-ui/core'
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
         root: {
                display: "flex",
                flexDirection: "column",
                margin: theme.spacing(1),
                },
          button: {
               margin: "0.5rem",
                  },
          googleStyle: {
                fillColor: theme.palette.primary.main,
                    },
              }));

export default function ContainedButtons() {
  const classes = useStyles();
   return (
  <div>
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    startIcon={<img src={google} alt="google"></img>}
  >
    Login With Google
  </Button>
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    startIcon={<GitHubIcon />}
  >
    Login with GitHub
  </Button>
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    startIcon={<TwitterIcon />}
  >
    Login with 
  </Button>
</div>
);
}