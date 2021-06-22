import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/auth" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
