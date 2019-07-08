import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';

import Home from './Home/Home';
import prueba from './prueba';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/prueba" component={prueba} />
      </Switch>
    </Router>
  );
}

export default App;
