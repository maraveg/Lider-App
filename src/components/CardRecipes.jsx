import React, {  Fragment } from 'react';
import {Link} from "react-router-dom";
import meat from '../img/carne-horno.jpg';
import './css/cardRecipes.css'
import arrow from '../img/arrow-left.png';




const CardRecipes = () => {

  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    getData();

    window.scrollTo(0, 0)
  }, []);

  const getData = async () => {
    const data = await fetch("https://luzciel.github.io/Lider-App/src/data/recipe.json");
    const allIngredients = await data.json();
    setIngredients(allIngredients.recipe);
  };


  return (
    <Fragment>
      <div className="container-title-recipe">
      <Link to="/madeForYou"><img src={arrow} alt="" /></Link>
      <h3>Carne al horno con cilantro</h3>
      </div>
      <section className="container-recipe">
        <div className="container-img-recipe">
          <img src={meat} alt="cart-recipe-img" className='cart-recipe-img' />
        </div>
        <h4>Ingredientes</h4>
        <div className="seccion-products">
          {ingredients.map((item, index) => (
            <div key={index + "product"} className="each-product">
              <img src={item.img} className='img-product' alt="imgProduct" />
              <h3 className="product-price">{item.Precio}</h3>
              <h3 className="product-name">{item.Descripcion}</h3>
              <h3 className="product-amount">{item.Cantidad}</h3>
            </div>
          ))}
        </div>
        <div className="steps-recipe">
          
          <p>
          <strong> Para la carne </strong><br />
            1 kilo de posta paleta el Buen Corte LIDER <br />
          2 tazas de cilantro <br />
          4 cucharadas de soya LIDER<br />
          </p>
          <p>
            <strong> Para Las Papas </strong><br />
          12 papas medianas<br />
          1 cucharadita de merkén<br />
          1 taza de crema Lider<br />
          100 grs de tocino<br />
          Sal y pimienta LIDER<br />
          </p>
        </div>
        <div className="steps-recipe">
          <h4 className="steps-title">Pasos</h4>
          <p>
            <strong>Paso 1</strong><br />
          En el vaso de la procesadora, agregar el cilantro previamente lavado junto con media taza de agua, moler. <br />
            <br />
            <strong>Paso 2</strong><br />
          En una fuente para horno poner la carne agregar a soya y el cilantro, dejar macerar por 2 horas. <br />
            <br />
            <strong>Paso 3</strong><br />
          Precalentar el horno a 180ºC.<br />
            <br />
            <strong>Paso 4</strong> <br />
          Salpimentar la carne y llevarla al horno por 30 minutos por lado, el gusto de la coccio
              n dependerá del consumidor.<br />
            <br />
            <strong>Para Las Papas</strong><br />
            <br />
            <strong>Paso 5</strong><br />
          Cortar el tocino en cuadrados pequeños y cocinar en un sartén por 5 minutos, luego pasar a un papel absorvente.<br />
            <br />
            <strong>Paso 6</strong><br />
          Hervir las papas por 5 minutos con cáscara, luego secar y cortar en 4, aceitar una fuente para horno y cocinar por 35 minutos. Agregar a las papas sal junto con la mezcla de crema, merkén y tocino<br />
          </p>
        </div>

      </section>


    </Fragment>


  )
}

export default CardRecipes;