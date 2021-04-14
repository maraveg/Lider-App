import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';
import love2 from '../img/corazonBlanco.png'


const LastBuys = ({ lastBuy, setLastBuy }) => {


console.log(22, lastBuy )
    return (
        <Fragment>
            <h3>Ultima compra</h3>
            <h5>Ver más</h5>
            <div className="seccion-products">
                {lastBuy.map((item, index) => (
                    <div key={index + "product"} className="each-product">
                        <img src={item.img} className='img-product' alt="imgProduct"/>
                        <img src={love2} className='img-love' alt="imgHeart"/>
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

export default LastBuys;