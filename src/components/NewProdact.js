import React from 'react'

import {imgcardpro} from '../model/imgprodact'

import CardProdact from './CardProdact'

const NewProdact = () => {
  return (
    <section className="newProdact container">

    <div className="titleprod">
        <div>
            <h1>منتجات جديدة</h1>
            <p>المنتجات المعروضة حديثاً , تسوق واستمتع</p>
        </div>

        <a href=""><div className="btnn"> <p>عرض المزيد</p></div></a> 
     
    </div>


    <div className="allcardProdact row">


        <CardProdact id='1' imgpro={imgcardpro.imgpro1}/>
        <CardProdact id='2' imgpro={imgcardpro.imgpro2}/>
        <CardProdact id='3' imgpro={imgcardpro.imgpro3}/>
        <CardProdact id='4' imgpro={imgcardpro.imgpro4}/>
        <CardProdact id='5' imgpro={imgcardpro.imgpro5}/>
        <CardProdact id='6' imgpro={imgcardpro.imgpro6}/>
        <CardProdact id='7' imgpro={imgcardpro.imgpro7}/>
        <CardProdact id='8' imgpro={imgcardpro.imgpro8}/>

    </div>

</section>
  )
}

export default NewProdact
