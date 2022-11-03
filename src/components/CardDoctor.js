import React from 'react'
import { Link } from 'react-router-dom'
import d2 from '../assets/image/Group 116.svg'

const CardDoctor = (props) => {
  return (
    <div class="cardDoctor cardpro">
     <img src={props.imgdoc} alt=""/>

         <div class="textCardDoctor">
          <div class="nameDoctor">
            <h5>الدكتور : عبدالله الاستاذ</h5>
            <img src={d2} alt=""/>
         </div>
      
         <p>التغذية والصحة العامة</p>

         <Link class="restFillter" to={`/almento/ServiceBooking/${props.id}`}>حجز موعد</Link>
     </div>


    </div>
  )
}

export default CardDoctor
