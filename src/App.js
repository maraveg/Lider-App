import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Header from './components/home/Header.jsx';
import Home from './components/Home.jsx';


function App() {
  return (
    <Router>
    <div>
     <div>
      <Header />
     </div>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/carausel">

        </Route>
        <Route path="/orders/:numTable"
        component={OrdersViews} />
        <Route path="/cocina">

        </Route>
        <Route path="/servir">

        </Route>
        <Route path="/boletas">

        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
