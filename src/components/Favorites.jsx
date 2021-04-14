import React, { Fragment} from 'react';
import love1 from '../img/corazonAzul.png';



const Favorites = ({ favorites, setfavorites }) => {



    return (
        <Fragment>
            <h3>Favoritos</h3>
            <h5>Ver más</h5>
            <div className="seccion-products">
                {favorites.map((item, index) => (
                    <div key={index + "product"} className="each-product">
                        <img src={item.img} className='img-product' alt="imgProduct"/>
                        <img src={love1} className='img-love' alt="imgHeart"/>
                        <h3 className="product-price">{item.Precio}</h3>
                        <h3 className="product-name">{item.Descripcion}</h3>
                        <h3 className="product-amount">{item.Cantidad}</h3>
                        <button className="btn-add">Agregar</button>
                    </div>
            ))}
                    </div>
        </Fragment>


    )
}

export default Favorites;