import React from 'react'
import LinkTitle from '../components/LinkTitle'
import grenstar from '../assets/image/Group 124.svg'
import imgdoctor from '../assets/image/doc.png'

const ServiceBooking = () => {
  return (
    <div>

<LinkTitle linkpage1="  الخدمات" linkpage2=" / حجز خدمة" />


<section class="serviceBookingSection container">
        <div class="rightServiceBooking">
            <div class="imgdoc">
                <img src={imgdoctor} alt=""/>
            </div>
            <div class="textdoc">
                <div class="availableInStore ">
                    <img src={grenstar} alt=""/>
                    <h4 class="font-600">الدكتور : إبراهيم الفيومي</h4>
                </div>
                <p class="grrencolor">التغذية الإكلينيكية</p>
                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد </p>

            </div>
        </div>
        <div class="leftServiceBooking">
            <h4 class="font-600">موعد الحجز</h4>
            <p>من الإثنين إلى الجمعة: 09:00 صباحًا - 05:00 مساءً</p>
            <hr/>
            <form action="">
                <div class="inputdate">
                    <input type="date" name="" id=""/>
                    <input type="time" name="" id=""/>
                </div>
                <button class="btnBooking">حجز موعد</button>
                
            </form>

        </div>
    </section>



    <section class="discraptionProductDetails discraptionServiceBooking container">

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">نظرة عامة</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">الخبرة</button>
            </li>
          </ul>
          <div class="tab-content desProd" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                <p class="font-600">عن الدكتور : إبراهيم الفيومي</p>
                <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع
                </p>

                <p class="font-600">التخصصات</p>
                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>

                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>التغذية والصحة العامة</p>
                </div>
                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>تغذية الرياضيين</p>
                </div>
                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>علم وتكنولوجيا الغذاء</p>
                </div>
                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>التغذية والطبّ البديل</p>
                </div>
                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>تغذية الإنسان والحميات</p>
                </div>
                <div class="specialtiesServiceBooking">
                    <img src="image/Group 99.svg" alt=""/>
                    <p>التغذية الإكلينيكية</p>
                </div>

            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                <p class="endDate">تاريخ إنتهاء الصلاحية: 23-11-2022</p>


                <div class="nutritionalInformation">

                    <div class="rightInformation">
                        <div class="nutritional">
                            <p>الحجم </p>
                            <p>G 249</p>
                        </div>
                        <div class="nutritional">
                            <p>حجم الحصة </p>
                            <p>5</p>
                        </div>
                        <div class="nutritional">
                            <p>عدد الحصص </p>
                            <p>35</p>
                        </div>
                        <div class="nutritional">
                            <p>السعرات الحرارية </p>
                            <p>G 249</p>
                        </div>
                        <div class="nutritional">
                            <p>الدهون </p>
                            <p>G 249</p>
                        </div>
                        <div class="nutritional">
                            <p>الدهون المشبعة </p>
                            <p>G 249</p>
                        </div>

                    </div>
                </div>


            </div>
          </div>

    </section>

        
      
    </div>
  )
}

export default ServiceBooking
