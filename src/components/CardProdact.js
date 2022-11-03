import React from 'react'

import awesome_eye from '../assets/image/Icon awesome-eye.svg'
import Basket_Iconn from '../assets/image/Basket Iconn.svg'
import { Link} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CardProdact = (props) => {




  return (
    <div  className="cardProdact col-xxl-3">

    <Link to={`/almento/productDetails/${props.id}`}>
        <img src={props.imgpro} alt=""/>

        <p className="popcard">جديد</p>

        <div className="textcardProdact">
            <p>خليط كيك كيتو بالفانيلا </p>
            <div className="pricePro">
                <p> ₪ 46.00  </p>
                <span>63.25شيكل</span>
            </div>

        </div>

    </Link>

    <div className="hpopcardpros">
        <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
            <img src={awesome_eye} alt=""/>
       
        </div>
        <div className="popcardpro">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} style={{fill: '#fff'}} />
   
        </div>
        <div className="popcardpro">
            <img src={Basket_Iconn} alt=""/>
        </div>

    </div>

</div>
  )
}

export default CardProdact
