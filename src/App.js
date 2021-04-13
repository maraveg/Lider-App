import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/Home.jsx';
import MadeForYou from './components/MadeForYou.jsx';


function App() {

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://luzciel.github.io/Lider-App/src/data/product.json"
    );
    const allProduct = await data.json();
    setProduct(allProduct.favorito);
  };


  return (
    <Router>
    <div>
     <div>
     </div>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/madeForYou">
          <MadeForYou
          product={product}
          setProduct={setProduct}
          />
        </Route>
       
        <Route path="/boletas">

        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
