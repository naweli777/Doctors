import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';
import ni from '../Asset/ni.png';
import GoogleLogin from 'react-google-login';
const useStyles = makeStyles((theme) => ({

  image: {
    width: '50%',
    float: 'right',
  },
  textdiv:{
    paddingLeft: '5rem',
  },
  text:{
   
    paddingTop:'150px',  
    fontSize: '4rem',
    fontFamily:'Work Sans, sans-serif', 
    fontWeight: '400',
    fontStyle: 'bold'
  },
  google: {
    font:'blue'
  },
}));

function Login() {
  const classes = useStyles();
 

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    console.log({ result });
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");
  // const onSubmit = async (value, { resetForm }) => {
  //   try {
  //     console.log({ value });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
    <div>
      <img src={ni} className={classes.image} alt ='main'/>
      </div>
       <div className={classes.textdiv}>
        <Typography className={classes.text}>We are here for you.</Typography>
      
      <GoogleLogin
      clientId ="1031020543503-5ob08b23nh431eocc0vsc3ood4lbk9oh.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy={'single_host_origin'} 
      className ={classes.google}/>
      </div>

    </div>
  );
}

export default Login;
