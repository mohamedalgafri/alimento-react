import React from 'react'

import pp1 from '../assets/image/pp1.png'
import pp2 from '../../src/assets/image/pp2.png'
import pp3 from '../../src/assets/image/pp3.png'
import pp4 from '../../src/assets/image/pp4.png'
import pp5 from '../../src/assets/image/pp5.png'
import pp6 from '../../src/assets/image/pp6.png'
import pp7 from '../../src/assets/image/pp7.png'
import pp8 from '../../src/assets/image/pp8.png'
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

        <CardProdact imgpro={pp1}/>
        <CardProdact imgpro={pp2}/>
        <CardProdact imgpro={pp3}/>
        <CardProdact imgpro={pp4}/>
        <CardProdact imgpro={pp5}/>
        <CardProdact imgpro={pp6}/>
        <CardProdact imgpro={pp7}/>
        <CardProdact imgpro={pp8}/>

    </div>

</section>
  )
}

export default NewProdact
