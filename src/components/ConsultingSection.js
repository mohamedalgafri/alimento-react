import React from 'react'

import smilingDoc from '../assets/image/smiling-doctor.png'
import treeshap from '../assets/image/treeshap.png'

const ConsultingSection = () => {
  return (
    <section className="consultingSection container">
    <div className="rightConsulting">
        <h1>استشارات وخدمات صحية</h1>
        <p>خدمات مميزة و أطباء خبراء في المجال التغذية الصحية , قم بحجز اجتماع
            مع اخصائي التغذية وتمتع بأفضل الامتيازات التالية</p>

            <ul className="listConsulting">
                <li>تقديم خطة تغذية صحية لك</li>
                <li>الإجابة على كافة أسئلتك</li>
                <li>مدة حجز استشارة 45 دقيقة</li>
                <li>احصل على خصومات عند إتمام عملية حجز</li>
            </ul>

            <a href=""><div className="btnn"> <p> اطلب الان</p></div></a> 


    </div>
    <div className="leftConsulting">

        <img className="smilingDoc" src={smilingDoc} alt=""/>
        <img className="treeshap" src={treeshap} alt=""/>

    </div>
</section>
  )
}

export default ConsultingSection
