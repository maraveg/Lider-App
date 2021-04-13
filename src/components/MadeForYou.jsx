import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';
import Favorites from './Favorites';
import LastBuys from './LastBuys';
import './madeForYou.css'
import Offers from './Offers';
import Recipes from './Recipes';




const MadeForYou = ({ favorites, setfavorites, offer, setOffer, lastBuy, setLastBuy }) => {



  return (
    <Fragment>
      <h3 className="name-user">Andrea, hecho para ti</h3>
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
        <LastBuys
          lastBuy={lastBuy}
          setLastBuy={setLastBuy}
        />
      </div>

      <div>
        <Recipes />
      </div>
    </Fragment>


  )
}

export default MadeForYou;