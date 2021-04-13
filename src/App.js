import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  //NavLink
} from "react-router-dom";
import CardFavorites from './components/CardFavorites.jsx';
import Home from './components/Home.jsx';
import MadeForYou from './components/MadeForYou.jsx';


function App() {

  const [favorites, setfavorites] = React.useState([]);
  const [offer, setOffer] = React.useState([]);
  const [lastBuy, setLastBuy] = React.useState([]);
  const [basket, setBasket] = React.useState([]);


  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://luzciel.github.io/Lider-App/src/data/product.json");
    const allProduct = await data.json();
    setfavorites(allProduct.favorito);
    setOffer(allProduct.ultimaOportunidad);
    setLastBuy(allProduct.ultimaCompra);
    setBasket(allProduct.canasta);
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
          favorites={favorites}
          setfavorites={setfavorites}
          offer={offer}
          setOffer={setOffer}
          lastBuy={lastBuy}
          setLastBuy={setLastBuy}
          basket={basket}
          setBasket={setBasket}
          />
        </Route>
       
        <Route path="/cardFavorites">
          <CardFavorites
          favorites={favorites}
          setfavorites={setfavorites}/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
