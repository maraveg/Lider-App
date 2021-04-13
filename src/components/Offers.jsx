import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';



const Offers = ({ offer, setOffer }) => {



    return (
        <Fragment>
            <h3>Ofertas para Ti</h3>
            <div className="seccion-products">
                {offer.map((item, index) => (
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

export default Offers;