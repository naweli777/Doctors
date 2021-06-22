import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import actionTypes from "../../context/actionType";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ni from "../../Asset/ni.png";
import GoogleLogin from "react-google-login";
const googleClientId =
  "1031020543503-5ob08b23nh431eocc0vsc3ood4lbk9oh.apps.googleusercontent.com";
const useStyles = makeStyles(() => ({
  image: {
    width: "50%",
    float: "right",
  },
  textDiv: {
    paddingLeft: "5rem",
  },
  text: {
    paddingTop: "150px",
    fontSize: "4rem",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "400",
    fontStyle: "bold",
  },
  google: {
    font: "blue",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch, isAuthenticated } = useContext(UserContext);
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    try {
      dispatch({ type: actionTypes.SET_AUTHENTICATION, payload: result });
      localStorage.setItem("user", result);
      return history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  return (
    <div>
      <div>
        <img src={ni} className={classes.image} alt="main" />
      </div>
      <div className={classes.textDiv}>
        <Typography className={classes.text}>
          {"We are here for you."}
        </Typography>

        {isAuthenticated ? (
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => history.push("/")}
          >
            {"Find Doctors"}
          </Button>
        ) : (
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Login with Google"
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy={"single_host_origin"}
            className={classes.google}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
