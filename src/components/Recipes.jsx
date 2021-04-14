import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import chocolate from '../chocolate.png';
import chicken from '../img/pollo-mostaza.jpg';
import meat from '../img/carne-horno.jpg'; 
import PieLimon from '../img/pie-limon.jpg';
import meats from '../img/carne-horno-alcaparras.jpg'; 



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
          <div>
        <Link to="/cardRecipes"><img src={meats} alt="" className="recipe-img" /></Link>

          </div>
          <p>Carne al horno</p>
        </div>
        <div className="each-recipe">
          <img src={PieLimon} alt="" className="recipe-img" />
          <p>Pie de Limon</p>
        </div>
      </div>
    </Fragment>


  )
}

export default Recipes;