import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import actionTypes from "../context/actionType";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import GoogleLogin from "react-google-login";
const googleClientId =
  "1031020543503-5ob08b23nh431eocc0vsc3ood4lbk9oh.apps.googleusercontent.com";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    backgroundColor: "red",
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, dispatch } = useContext(UserContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.clear();
    return;
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    try {
      dispatch({ type: actionTypes.SET_AUTHENTICATION, payload: result });
      localStorage.setItem("user", result);
      history.push("/");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocalHospitalIcon className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            {"Dr. Find"}
          </Typography>
          {isAuthenticated ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appBar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appBar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{"Profile"}</MenuItem>
                <MenuItem onClick={handleClose}>{"My account"}</MenuItem>
                <MenuItem onClick={handleLogout}>{"Logout"}</MenuItem>
              </Menu>
            </div>
          ) : (
            <GoogleLogin
              clientId={googleClientId}
              render={(renderProps) => (
                <Button
                  color={"secondary"}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {"Sign In"}
                </Button>
              )}
              buttonText="Sign In"
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
