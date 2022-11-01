import React from 'react'

const CardBlog = (props) => {
  return (
    <div className="cardblog">
    <div className="imgcardblog">
    <img src={props.imgblog} alt=""/>
    </div>
    <div className="buttoncardb">
        <p className="tipblog greentip">الكيتو</p>
        <a href="blogDetails.html">
    
            <h5>أفضل مطاعم كيتو في فلسطين</h5>
            <p> إذا كنت تسكن في مدينة غزة  وتتبع حمية الكيتو دايت أو تفكر في البدء في هذا الرجيم، فمن المؤكد...  </p>

        </a>
        <a className="comread" href="">أكمل القراءة</a>

    </div>
</div>
  )
}

export default CardBlog
