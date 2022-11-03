import React from 'react'

import phonimg from '../../assets/image/svgexport-7 (5).svg'
import logo from '../../assets/image/Artboard 1.svg'
import emailimg from '../../assets/image/svgexport-7 (4).svg'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="allfooter container">
        <div className="logofooter">
            <div className="linefoo"></div>
            <a href="index.html"> <img src={logo} alt=""/></a>
            <div className="linefoo"></div>
        </div>
        <div className="bodyfooter">

            <div className="aboutfoo">
                <h5>نبذة مختصرة</h5>
                <p>متجر الكتروني متخصص في تقديم المنتجات الغذائية، المشروبات، والبدائل الصحية المتنوعة التي 
                    .تناسب جميع الأنظمة الغذائية المختلفة </p>
                    <div className="sotialfooter">
                        <a href="" className="popfooterso">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="" className="popfooterso">
                            <i className='bx bxl-youtube'></i>
                        </a>
                        <a href="" className="popfooterso">
                            <i className='bx bxl-instagram'></i>
                        </a>
                    </div>
            </div>
            <div className="linksfoo">

                <div className="col-links">
                    <h5>روابط مهمة</h5>
                    <a href="">المنتجات</a>
                    <a href="">فروعنا</a>
                    <a href="">الخدمات</a>
                    <a href="">المدونة</a>
                </div>

                <div className="col-links">
                    <h5>التصنيفات</h5>
                    <a href="">محاصيل طازجة</a>
                    <a href="">أغذية مغلفة</a>
                    <a href="">مجمدات</a>
                    <a href="">مخبوزات</a>
                </div>

                <div className="col-links">
                    <h5>معلومات التواصل</h5>

                    <div className="phoneSideNav navphfoo">
                        <div>
                            <p>رقم الهاتف</p>
                            <p>00970-8-2824445</p>
                        </div>
                        <img src={phonimg} alt=""/>
                    </div>

                    <div className="phoneSideNav navphfoo">
                        <div>
                            <p>البريد الالكتروني</p>
                            <p>Alimento.Gaza@gmail.com</p>
                        </div>
                        <img src={emailimg} alt=""/>
                    </div>
                    
                    
                </div>

            </div>

        </div>
        <div className="copyright">
            <p> Copyright 2022 byToopoptech.com ©</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
