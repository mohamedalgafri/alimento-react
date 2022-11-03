import React from 'react'
import LinkTitle from '../components/LinkTitle'
import d1 from '../assets/image/team-6.png'
import d3 from '../assets/image/imgdoc2.png'
import CardDoctor from '../components/CardDoctor'
import searchfav from '../image/vuesax-broken-search-favoritew.svg'




const Services = () => {
  return (
    <div>

    <LinkTitle linkpage1="الخدمات" />
    
    <section class="productss container">
        <div class="allproducts">
            <div class="rightProducts">
                <div class="inputsearch">
                    <input type="text" placeholder="عن ماذا تريد أن تبحث؟"/>
                    <div class="imgsearchinput">
                        <img src={searchfav} alt=""/>
                    </div>
                 
                </div>
    

    
                <div class="categoriesProducts">
                    <p>التصنيفات</p>
                    
                    <div class="categorie">
                        <p>التغذية والصحة العامة</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>
    
                    <div class="categorie">
                        <p>تغذية الرياضيين</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>
    
                    <div class="categorie">
                        <p>علم وتكنولوجيا الغذاء</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>
    
                    <div class="categorie">
                        <p>التغذية والطبّ البديل</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>
    
                    <div class="categorie">
                        <p>تغذية الإنسان والحميات</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>

                    <div class="categorie">
                        <p>التغذية الإكلينيكية</p>
                        <i class='bx bx-arrow-back'></i>
                    </div>
                </div>
    
                <button class="restFillter">إعادة التعيين</button>
    
    
            </div>
            <div class="liftProducts">
    
                <div class="titleliftProducts">
                    <div class="numproducts">
                        <p > إخصائي تغذية متاحين <span> (1) </span></p>
                    </div>
                    <div class="sortproducts">
                        <p>  الترتيب حسب: </p>
                        <select>
                            <option>الأحدث</option>
                            <option>الأحدث</option>
                            <option>الأحدث</option>
                        </select>
                    </div>
    
                </div>
    
    
    
                <div class="bodyProducts row ">
    
                    <CardDoctor imgdoc={d1}/>
                    <CardDoctor imgdoc={d3}/>
                    <CardDoctor imgdoc={d1}/>
                    <CardDoctor imgdoc={d3}/>
                    <CardDoctor imgdoc={d1}/>
                    <CardDoctor imgdoc={d1}/>
    
                </div>



                <nav aria-label="..." class="pag">
                    <ul class="pagination pagination">
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
         
                    </ul>
                </nav>
        
    
    
    
            </div>
    
        </div>



    </section>


      
    </div>
  )
}

export default Services
