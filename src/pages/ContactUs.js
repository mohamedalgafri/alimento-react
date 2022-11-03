import React from 'react'
import LinkTitle from '../components/LinkTitle'
import imgmap from '../assets/image/Rectangle 157.png'

const ContactUs = () => {
  return (
    <>
      
      <LinkTitle linkpage1="تواصل معنا" />


      <section class="contactBody container">
        <div class="titleContact">
            <h1>تواصل معنا</h1>
            <p>فريق خدمة عملاء Alimento  في خدمتكم نستقبل أراء واقتراحات واستفسارات عملائنا 24/7</p>
        </div>

        <div class="contantContact">
            <div class="rightContantContact">
                <input type="text" placeholder="الاسم"/>
                <input type="number" placeholder="رقم الهاتف"/>
                <input type="text" placeholder="عنوان الرسالة"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="الاستفسار"></textarea>
                <button class="btnsend">ارســـــال</button>
            </div>
            <div class="leftContantContact">
                <img src={imgmap} alt=""/>
            </div>

        </div>
   
    </section>




    </>
  )
}

export default ContactUs
