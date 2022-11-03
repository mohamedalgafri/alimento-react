import React from 'react'
import CardBlog from '../components/CardBlog'
import LinkTitle from '../components/LinkTitle'
import {imgBlog} from '../model/imgprodact'

const Blog = () => {
  return (
    <div>

    <LinkTitle linkpage1="المدونة" />
      


    <section class="blogbage container">
            <div class="titleBlog">
                <h1>Alimento مرحباً بكم في مدونة</h1>
                <p>دليلك الكامل للأكل الصحي أو الكيتو أو الدايت أو الميكس</p>
            </div>

            <div class="categoriesBlog">
                <div class="categoryBlog active">
                    <p>الكل</p>
                </div>
                <div class="categoryBlog">
                    <p>أكل صحي</p>
                </div>
                <div class="categoryBlog">
                    <p>الكيتو</p>
                </div>
                <div class="categoryBlog">
                    <p>دايت</p>
                </div>
                <div class="categoryBlog">
                    <p>فاست فود</p>
                </div>
                <div class="categoryBlog">
                    <p>ألمينتو</p>
                </div>
            </div>

    </section>


    <section class="cardsblogs ">
        
        
        <div class="cardsBlog container">

        <CardBlog imgblog={imgBlog.imgblog1}/>
        <CardBlog imgblog={imgBlog.imgblog2}/>
        <CardBlog imgblog={imgBlog.imgblog3}/>
        <CardBlog imgblog={imgBlog.imgblog2}/>

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



    </section>




    </div>
  )
}

export default Blog
