import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './Home/Home'
  import Dashboard from './Dashboard/Dashboard'
  function App() { 
      return(
        <Router>
            <Switch>
            <Route path="/">
            <Home/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
            </Switch>
        </Router>
  )}
 
  export default App;