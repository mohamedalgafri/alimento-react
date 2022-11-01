import React from 'react'

import threecard1 from '../../src/image/svgexport-7 (7).svg'
import threecard2 from '../../src/image/svgexport-7 (6).svg'
import threecard3 from '../../src/image/svgexport-7 (8).svg'

const Threecard = () => {
  return (
    <section class="threecard container">
    <div class="cardhed">
        <img src={threecard1} alt=""/>
        <p>توصيل لجميع مناطق القطاع</p>
        <p>مُبرد وسريع خلال يوم أو يومين عمل</p>
    </div>

    <div class="cardhed">
        <img src={threecard2} alt=""/>
        <p>توصيل وشحن مجاني محدود</p>
        <p>عند الشراء بـ ٤٩٩ شيكل</p>
    </div>

    <div class="cardhed">
        <img src={threecard3} alt=""/>
        <p>خيارات دفع متعددة</p>
        <p>فيزا - جوال بي - بال بي</p>
    </div>
</section>
  )
}

export default Threecard
