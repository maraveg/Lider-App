import React, { Fragment } from 'react';
import love2 from '../img/corazonBlanco.png'


const Offers = ({ offer, setOffer }) => {



    return (
        <Fragment>
            <h3>Ofertas para Ti</h3>
            <h5>Ver más</h5>
            <div className="seccion-products">
                {offer.map((item, index) => (
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

export default Offers;