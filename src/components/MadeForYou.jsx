import React, { Fragment, useState } from 'react';
import chocolate from '../chocolate.png';
import './madeForYou.css'




const MadeForYou = ({ product, setProduct }) => {



    return (
        <Fragment>
            <div className="">
                {product.map((item, index) => (
                    <div key={index + "product"} className="">
                        <img src={chocolate} className='img-product' alt="imgProduct"/>
                        <h3 className="product-name">{item.Descripcion}</h3>
                        <h3 className="product-price">{item.Precio}</h3>
                    </div>
            ))}
                    </div>
        </Fragment>


    )
}

export default MadeForYou;