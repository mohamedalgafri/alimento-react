import React from 'react'

import {imgBlog} from '../model/imgprodact'
import CardBlog from './CardBlog'

const BlogSection = () => {
  return (
    <section className="blogSection container">

    <div className="titleprod">
        <div>
            <h1>مدونة</h1>
            <p>دليلك الكامل للأكل الصحي أو الكيتو أو الدايت أو الميكس</p>
        </div>

        <a href=""><div className="btnn"> <p>عرض المزيد</p></div></a> 
     
    </div>


    <div className="cardsBlog">

        <CardBlog imgblog={imgBlog.imgblog1}/>
        <CardBlog imgblog={imgBlog.imgblog2}/>
        <CardBlog imgblog={imgBlog.imgblog3}/>


    </div>

</section>
  )
}

export default BlogSection
