
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

//     <link rel="stylesheet" href="css/bootstrap.min.css" />
//     <link rel="stylesheet" href="css/animate.min.css" />
//     <link rel="stylesheet" href="css/swiper.css" />
//     <link rel="stylesheet" href="css/style.css"/>

//     <link rel="stylesheet"
//     href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
// </head>


import React from 'react'
import BlogSection from '../components/BlogSection'
import ConsultingSection from '../components/ConsultingSection'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import TopNavbar from '../components/navbar/TopNavbar'
import NewProdact from '../components/NewProdact'
import OurNewsletter from '../components/OurNewsletter'
import SwiperHome from '../components/swiper/SwiperHome'
import SwiperPro from '../components/swiper/SwiperPro'
import Swiperslide2 from '../components/swiper/Swiperslide2'
import Threecard from '../components/Threecard'

const HomePage = () => {
  return (

    <>


    <section className="header">
    {/* <div className="swiper mySwiperheder">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slideheader">
                    <img src="../image/Rectangle 3491.png" alt=""/>
                    <img src="../image/pexels-ella-olsson-1640770.png" alt=""/>
        
                    <div className="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div className="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
            </div>

            <div className="swiper-slide">
                <div className="slideheader">
                    <img src="../image/Rectangle 3491.png" alt=""/>
                    <img src="../image/pexels-ella-olsson-1640770.png" alt=""/>
        
                    <div className="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div className="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
            </div>

            <div className="swiper-slide">
                <div className="slideheader">
                    <img src="../image/Rectangle 3491.png" alt=""/>
                    <img src="../image/pexels-ella-olsson-1640770.png" alt=""/>
        
                    <div className="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div className="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
            </div>

            <div className="swiper-slide">
                <div className="slideheader">
                    <img src="../image/Rectangle 3491.png" alt=""/>
                    <img src="../image/pexels-ella-olsson-1640770.png" alt=""/>
        
                    <div className="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div className="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
            </div>



        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"><img src="image/Group 45.svg" alt=""/></div>
        <div className="swiper-button-prev"><img src="image/Group 44.svg" alt=""/></div>
      </div> */}
      <div className='mySwiperheder'>
      <SwiperHome/>
      </div>


    </section>


    <Threecard/>




    <section className="categoriesSec container">

        <div className="titleCategoriesSec">
            <h1>التصنيفات</h1>
            <p>تسوق باختيار التصنيف المناسب لك</p>
        </div>


        
    {/* <div className="swiper mySwiper2">
        <div className="swiper-wrapper">

            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src="image/p1.png" alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
              </div>


          <div className="swiper-slide"> 
            <a className="cardCategories">
                <img src="image/p2.png" alt=""/>
                <div className="textCardCategories">
                    <p>مخبوزات</p>
                    <p>Bakery   </p>
                </div>
            </a>
          </div>

          <div className="swiper-slide"> 
            <a className="cardCategories">
                <img src="image/p3.png" alt=""/>
                <div className="textCardCategories">
                    <p>مجمدات</p>
                    <p>Frozen Products</p>
                </div>
            </a>
          </div>

          <div className="swiper-slide"> 
            <a className="cardCategories">
                <img src="image/p4.png" alt=""/>
                <div className="textCardCategories">
                    <p>جاهز للأكل</p>
                    <p>Ready to eat</p>
                </div>
            </a>
          </div>

          <div className="swiper-slide"> 
            <a className="cardCategories">
                <img src="image/p5.png" alt=""/>
                <div className="textCardCategories">
                    <p>أغذية مغلفة</p>
                    <p>Pantry</p>
                </div>
            </a>
          </div>


          <div className="swiper-slide"> 
            <a className="cardCategories">
                <img src="image/pexels-ella-olsson-1640770.png" alt=""/>
                <div className="textCardCategories">
                    <p>محاصيل طازجة</p>
                    <p>Fresh Produce</p>
                </div>
            </a>
          </div>


        </div>

      </div> */}

      <div className='mySwiper2'>
       <Swiperslide2/>
      </div>





    </section>

    <NewProdact/>





    <section className="bestSales container">


        <div className="titleprod ">
            <div>
                <h1>أفضل المبيعات</h1>
                <p className="texttitle"> المنتجات الأكثر طلبا من فروع Alimento من خلال الموقع</p>
            </div>


         
        </div>


     {/* <div className="swiper mySwiperPro">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp1.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp2.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp3.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp4.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp5.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp6.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div  className="cardProdact col-xxl-3">

                <a href="productDetails.html">
                    <img src="image/pp7.png" alt=""/>

                    <p className="popcard">جديد</p>
    
                    <div className="textcardProdact">
                        <p>خليط كيك كيتو بالفانيلا</p>
                        <div className="pricePro">
                            <p> ₪ 46.00  </p>
                            <span>63.25شيكل</span>
                        </div>
    
                    </div>
                </a>

                <div className="hpopcardpros">
                    <div className="popcardpro" data-bs-toggle="modal" data-bs-target="#proview">
                        <img src="image/Icon awesome-eye.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Icon material-favorite.svg" alt=""/>
                    </div>
                    <div className="popcardpro">
                        <img src="image/Basket Iconn.svg" alt=""/>
                    </div>

                </div>
            </div>
          </div>

        </div>
        

        <div className="swiper-button-next"><i className='bx bx-left-arrow-alt' ></i></div>
        <div className="swiper-button-prev"><i className='bx bx-right-arrow-alt' ></i></div>
      </div> */}

      <div className='mySwiperPro'>
        <SwiperPro/>
      </div>



    </section>




    <ConsultingSection/>



    <BlogSection/>




    {/* <!-- ///////////////////////////////////////modals////////////////////////////////////////// --> */}

    <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container">
      
          <div className="searchmodal ">
              <img src="image/vuesax-broken-search-favoritee.svg" alt=""/>
              <input type="text" placeholder="عن ماذا تريد البحث"/>
          </div>  
      
          <a href="searching.html" className="btnsearch">بحث</a>
          
        </div>
      </div>


{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////// --> */}


{/* <!-- ///////////////////////////////////////////////menu mob////////////////////////////////////////////////// --> */}
      
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header ">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <a href="index.html"> <img className="imgmodel" src="../image/Artboard 1.svg" alt=""/></a>
        </div>
        <div className="offcanvas-body">

            <ul className="listmenumob">
                <li className="active"> <a href="index.html">الرئيسية</a></li>
                <li><a href="products.html">المنتجات</a></li>
                <li><a href="services.html">الخدمات</a></li>
                <li><a href="blog.html">المدونة</a></li>
                <li><a href="">من نحن</a></li>
                <li><a href="account.html">نقاط البيع</a></li>
                <li><a href="contactUs.html">تواصل معنا</a></li>

                <div className="loginnav">

                    <div><a href="createAccount.html">إنشاء  / </a>  <a href="signIn.html">تسجيل</a></div>
    
                    <img src="image/Group 42.svg" alt=""/>
        
                </div>

            </ul>

            <div className="d-flex justify-content-between">
                <div className="emailnavm">
                    <img src="image/svgexport-7 (4).svg" alt=""/>
                    <p>Alimento.Gaza@gmail.com</p>
                </div>
                <div className="emailnavm">
                    <img src="image/svgexport-7 (5).svg" alt=""/>
                    <p>00970-8-2824445</p>
                </div>
            </div>



            <div className="logandlang">

                <div className="selectLang">

                    <select name="" id="">
                        <option value="english"> Arabic</option>
                        <option value="arabic">English</option>
                    </select>
    
    
                    <img src="image/Mask Group 3.svg" alt=""/>
    
                </div>

                <div className="socialMediaIcon">
                    <a href=""><i className='bx bxl-facebook'></i></a>
                    <a href=""><i className='bx bxl-youtube'></i></a>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                </div>


            </div>
            

        </div>
      </div>

{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////// --> */}




    {/* <!-- ///////////////////////////model Add a new title//////////////////////////////// --> */}

    <div className="modal addNew provieww  fade" id="proview" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">


                <section className="productDetails ">
                    <div className="rightProductDetails">
                        <img src="image/pp1.png" alt=""/>
                    </div>
                    <div className="leftProductDetails">
                        <h3>خليط كيك كيتو بالفانيلا</h3>
                        <hr/>
                        <h4>الماركة : <span>Alimento</span> </h4>
                        <hr/>
                        <p>خليط كيك كيتو بالفانيلا محلاة ومنكهة لإعداد الدونات الفورية
            
                            يعتبر مثالي لاعداد الدونات، الفطائر والحلويات المخبوزة</p>
                            <div className="availableInStore">
                                <img src="image/Group 124.svg" alt=""/>
                                <p>متوفر في المتجر</p>
                            </div>
                        <hr/>
            
                        <div className="numProduc">
                            <div className="numProdDetels">
                                <input type="number" value="888"/>
                                <div>
                                    <label >+</label>
                                    <label >-</label>
                                </div>
                                
                            </div>
            
                            <div className="textNumProduc">
                                <p>46.00شيكل</p>
                                <p>63.25شيكل</p>
                            </div>
            
                        </div>
            
                        <hr/>
            
                        <p className="categoryProduct"> التصنيف <span>محاصيل طازجة</span></p>
                        
                        <div className="tags">
                            <p>العلامات</p>
                            <p className="tag">الخضار</p>
                            <p className="tag">الفواكه</p>
                            <p className="tag">الخضار </p>
                            <p className="tag">الفواكه</p>
                        </div>
            
                        <hr/>
            
                        <div className="buyNow"> 
                            <button className="btnBuyNow">شـــراء الان</button>
                            <button className="btniconn"><img src="image/CART.svg" alt=""/></button>
                            <button className="btniconn"><img src="image/Icon mat.svg"/></button>
                        </div>
                        
                        
                    </div>
                </section>  

       
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- /////////////////////////// End model Add a new title//////////////////////////////// --> */}
  


<a href="#" className="scrollup" id="scroll-up">
    <i className='bx bx-chevron-up'></i>
</a>

    
</>
    
  )
}

export default HomePage




