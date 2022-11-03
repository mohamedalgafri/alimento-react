import React from 'react'

import imguser from '../../assets/image/Group 42.svg'
import imglang from '../../assets/image/Mask Group 3.svg'

import {Link, NavLink } from 'react-router-dom'

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
                
                <li ><NavLink to="/almento" end className={`navlink ${(datalink)=> datalink.isActive ? 'active' : '' }`} >الرئيسية</NavLink></li>
                <li><NavLink to="/almento/Products" className={`navlink ${(datalink)=> datalink.isActive ? 'active' : '' }`}>المنتجات</NavLink></li>
                <li><NavLink to="/almento/Services" className={`navlink ${(datalink)=> datalink.isActive ? 'active' : '' }`}>الخدمات</NavLink></li>
                <li><NavLink to="/almento/Blog" className={`navlink ${(datalink)=> datalink.isActive ? 'active' : '' }`} >المدونة</NavLink></li>
                <li><a href="">من نحن</a></li>
                <li><a href="">نقاط البيع</a></li>
                <li><NavLink to="/almento/ContactUs" className={`navlink ${(datalink)=> datalink.isActive ? 'active' : '' }`} >تواصل معنا</NavLink></li>
            </ul>
    
            <div className="loginnav">

                <div><Link to='/CreateAccount'>إنشاء  / </Link>  <Link to='/'>تسجيل</Link></div>

                <img src={imguser} alt=""/>


                <div className="poplogin">
                    <Link to="/almento/account">حسابي</Link> 
                    <Link to="/almento/favorite">المفضلة</Link> 
                    <Link to='/almento/orders'>الطلبات</Link> 
                    <Link to="/">تسجيل خروج</Link> 
                </div>

    
            </div>
        </div>

    </nav>
  )
}

export default Navbar
