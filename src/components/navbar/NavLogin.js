import React from 'react'

import phonimg from '../../assets/image/svgexport-7 (5).svg'
import logo from '../../assets/image/Artboard 1.svg'
import emailimg from '../../assets/image/svgexport-7 (4).svg'

const NavLogin = () => {
  return (
    <nav className=" navbartop navlogtop ">
    <div className="navtop container">
     <div className="rightNavTap">
        <div className="phoneSideNav me-auto">
            <div>
                <p>Phone</p>
                <p>00970-8-2824445</p>
            </div>
            <img src={phonimg} alt=""/>
        </div>

     </div>
     <div className="imgLogo">
       <a href="index.html"> <img src={logo} alt=""/></a>
     </div>
     <div className="rightNavTap">


        <div className="phoneSideNav">
            <div>
                <p>Email</p>
                <p>Alimento.Gaza@gmail.com</p>
            </div>
            <img src={emailimg} alt=""/>
        </div>




        </div>
    
    </div>

</nav>
  )
}

export default NavLogin
