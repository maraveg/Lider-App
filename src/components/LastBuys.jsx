import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';



const LastBuys = ({ lastBuy, setLastBuy }) => {


console.log(22, lastBuy )
    return (
        <Fragment>
            <h3>Ultima compra</h3>
            <div className="seccion-products">
                {lastBuy.map((item, index) => (
                    <div key={index + "product"} className="each-product">
                        <img src={item.img} className='img-product' alt="imgProduct"/>
                        <h3 className="product-price">{item.Precio}</h3>
                        <h3 className="product-name">{item.Descripcion}</h3>
                        <h3 className="product-amount">{item.Cantidad}</h3>
                    </div>
            ))}
                    </div>
        </Fragment>


    )
}

export default LastBuys;