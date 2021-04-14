import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';
import chicken from '../img/pollo-mostaza.jpg';
import meat from '../img/escalopa-papas-duquesa.jpg'; 
import PieLimon from '../img/pie-limon.jpg';



const Recipes = () => {



  return (
    <Fragment>
      <h3>Recetas</h3>
      <h5>Ver más</h5>
      <div className="seccion-products">
        <div className="each-recipe">
          <img src={chicken} alt="" className="recipe-img" />
          <p>Pollo a la mostaza</p>
        </div>
        <div className="each-recipe">
          <img src={PieLimon} alt="" className="recipe-img" />
          <p>Pie de Limon</p>
        </div>
        <div className="each-recipe">
          <img src={meat} alt="" className="recipe-img" />
          <p>Escalopa Con papas duquesas</p>
        </div>

      </div>
    </Fragment>


  )
}

export default Recipes;