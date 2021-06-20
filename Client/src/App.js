import './App.css';
import Login from './Login/Login';
import DoctorSearch from './DoctorSearch/DoctorSearch';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
    
    <Router> 
      <Switch>  
      <Route exact path="/splash" component={Login}/>
        <Route exact path="/find" component={DoctorSearch}/>
        <Redirect from="*" to="/splash" />
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
