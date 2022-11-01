import React from 'react'

import awesome_eye from '../assets/image/Icon awesome-eye.svg'
import material_favorite from '../assets/image/Icon material-favorite.svg'
import Basket_Iconn from '../assets/image/Basket Iconn.svg'


const CardProdact = (props) => {
  return (
    <div  className="cardProdact col-xxl-3">

    <a href="productDetails.html">
        <img src={props.imgpro} alt=""/>

        <p className="popcard">جديد</p>

        <div className="textcardProdact">
            <p>خليط كيك كيتو بالفانيلا</p>
            <div className="pricePro">
                <p> ₪ 46.00  </p>
                <span>63.25شيكل</span>
            </div>

        </div>
    </a>

    <div className="hpopcardpros">
        <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
            <img src={awesome_eye} alt=""/>
        </div>
        <div className="popcardpro">
            <img src={material_favorite} alt=""/>
        </div>
        <div className="popcardpro">
            <img src={Basket_Iconn} alt=""/>
        </div>

    </div>
</div>
  )
}

export default CardProdact
