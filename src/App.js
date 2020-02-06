import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect, Switch } from 'react-router-dom'
import Login from './login';
import Protected from './Protected';
import './gsass.sass';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Protected" component={Protected} />
      <Redirect to="/Login"/>
        </Switch>

      </Router>
     

    </div>
  );
}

export default App;
