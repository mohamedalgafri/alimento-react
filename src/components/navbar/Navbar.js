import React from 'react'

import imguser from '../../assets/image/Group 42.svg'
import imglang from '../../assets/image/Mask Group 3.svg'

import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
        <div className="allnavbar container">
            <div className="selectLang">

                <select name="" id="">
                    <option value="english"> Arabic</option>
                    <option value="arabic">English</option>
                </select>


                <img src={imglang} alt=""/>

            </div>
            <ul className="navlist">
                <li className="active"><Link to="/">الرئيسية</Link></li>
                <li><Link href="/products">المنتجات</Link></li>
                <li><Link href="services.html">الخدمات</Link></li>
                <li><Link href="blog.html">المدونة</Link></li>
                <li><Link href="">من نحن</Link></li>
                <li><Link href="">نقاط البيع</Link></li>
                <li><Link href="contactUs.html">تواصل معنا</Link></li>
            </ul>
    
            <div className="loginnav">

                <div><a href="createAccount.html">إنشاء  / </a>  <a href="signIn.html">تسجيل</a></div>

                <img src={imguser} alt=""/>


                <div className="poplogin">
                    <a href="account.html">حسابي</a> 
                    <a href="favorite.html">المفضلة</a> 
                    <a href="orders.html">الطلبات</a> 
                    <a href="signIn.html">تسجيل خروج</a> 
                </div>

    
            </div>
        </div>

    </nav>
  )
}

export default Navbar
