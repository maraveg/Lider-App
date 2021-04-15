import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import Favorites from './Favorites';
import LastBuys from './LastBuys';
import './madeForYou.css'
import Offers from './Offers';
import Recipes from './Recipes';
import arrow from '../img/arrow-left.png';




const MadeForYou = ({ favorites, setfavorites, offer, setOffer, lastBuy, setLastBuy }) => {



  return (
    <Fragment>
      <div className="container-title-recipe">
      <Link to="/"><img src={arrow} alt="" /></Link>
      <h3 className="name-user">Andrea, hecho para ti</h3>
      </div>
      <div>
        <Favorites
          favorites={favorites}
          setfavorites={setfavorites}
        />
      </div>

      <div>
        <Offers
          offer={offer}
          setOffer={setOffer} />
      </div>
      <div>
        <Recipes />
      </div>

      <div>
        <LastBuys
          lastBuy={lastBuy}
          setLastBuy={setLastBuy}
        />
      </div>

    </Fragment>


  )
}

export default MadeForYou;