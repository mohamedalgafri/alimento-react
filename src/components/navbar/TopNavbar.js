import React from 'react'
import imghead1 from '../../assets/image/svgexport-7 (5).svg'
import logo from '../../assets/image/Artboard 1.svg'
import imghead3 from '../../assets/image/svgexport-7 (4).svg'
import BasketIcon from '../../assets/image/Basket Icon.svg'
import search_favorite from '../../assets/image/vuesax-broken-search-favorite.svg'


const TopNavbar = () => {
  return (
    <nav class=" navbartop ">
    <div class="navtop container">
        <div class="rightNavTap">
            <div class="socialMediaIcon">
                <a href=""><i class='bx bxl-facebook'></i></a>
                <a href=""><i class='bx bxl-youtube'></i></a>
                <a href=""><i class='bx bxl-instagram'></i></a>
            </div>
            <div class="linenav"></div>
            <div class="phoneSideNav">
                <div>
                    <p>Phone</p>
                    <p>00970-8-2824445</p>
                </div>
                <img src={imghead1} alt=""/>
            </div>

        </div>
        <div class="imgLogo">
           <a href="index.html"> <img src={logo} alt=""/></a>
        </div>
        <div class="rightNavTap">


            <div class="phoneSideNav">
                <div>
                    <p>Email</p>
                    <p>Alimento.Gaza@gmail.com</p>
                </div>
                <img src={imghead3} alt="" />
            </div>

            <div class="linenav"></div>

            <div class="lefticonNav">

                <i class='bx bx-menu' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
               <img src={BasketIcon} alt=""/>
               <img src={search_favorite} alt="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" />
               
            </div>



        </div>
        
    </div>

</nav>

  )
}

export default TopNavbar
