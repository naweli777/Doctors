import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Login from "./screens/Login/Login";
import DoctorSearch from "./screens/DoctorSearch/DoctorSearch";
import PrivateRoute from "./common/PrivateRoute";
import PublicRoute from "./common/PublicRoute";
import UserContextProvider from "./context/UserContext";
import Header from "./components/Header";
const App = () => {
  return (
    <UserContextProvider>
      <Header />
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={DoctorSearch} />
          <PublicRoute exact path="/auth" component={Login} />
          <Redirect from="*" to="/splash" />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
