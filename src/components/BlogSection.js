import React from 'react'

import imgblog1 from '../assets/image/مطاعم-كيتو-الدمام-1024x400.png'
import imgblog2 from '../assets/image/نظام-رجيم-صحي-وسهل-وفعال-1024x400.png'
import imgblog3 from '../assets/image/نظام-الكيتو-دايت-كم-ينزل-في-الأسبوع-1024x400.png'
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

        <CardBlog imgblog={imgblog1}/>
        <CardBlog imgblog={imgblog2}/>
        <CardBlog imgblog={imgblog3}/>


    </div>

</section>
  )
}

export default BlogSection
