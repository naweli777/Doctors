import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import ni from '../Asset/ni.png';

const useStyles = makeStyles((theme) => ({

  image: {
    width: '50%',
    float: 'right',
  },
  textdiv:{
    
    paddingLeft: '2rem'

  },
  text:{
    paddingTop:'150px',  
    fontSize: '4.2rem',
    fontFamily:'Work Sans, sans-serif', 
    fontWeight: '400'
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <div>
    <div>
      <img src={ni} className={classes.image} />
      </div>
      

      <div className={classes.textdiv}>
        <Typography className={classes.text}>We are here <br/> for you.</Typography>
        
        <Button variant="contained">
        Login with Google
      </Button>
      </div>

    </div>
  );
}

export default Login;
