import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';



const Favorites = ({ favorites, setfavorites }) => {



    return (
        <Fragment>
            <h3>Favoritos</h3>
            <div className="seccion-products">
                {favorites.map((item, index) => (
                    <div key={index + "product"} className="each-product">
                        <img src={chocolate} className='img-product' alt="imgProduct"/>
                        <h3 className="product-price">{item.Precio}</h3>
                        <h3 className="product-name">{item.Descripcion}</h3>
                        <h3 className="product-amount">{item.Cantidad}</h3>
                    </div>
            ))}
                    </div>
        </Fragment>


    )
}

export default Favorites;