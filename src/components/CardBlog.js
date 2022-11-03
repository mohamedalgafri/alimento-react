import React from 'react'
import { Link } from 'react-router-dom'

const CardBlog = (props) => {
  return (
    <div className="cardblog">
    <div className="imgcardblog">
    <img src={props.imgblog} alt=""/>
    </div>
    <div className="buttoncardb">
        <p className="tipblog greentip">الكيتو</p>
        <Link className="comread" to={`/almento/BlogDetails/${props.id}`}>
    
            <h5>أفضل مطاعم كيتو في فلسطين</h5>
            <p> إذا كنت تسكن في مدينة غزة  وتتبع حمية الكيتو دايت أو تفكر في البدء في هذا الرجيم، فمن المؤكد...  </p>

        </Link>
        <Link className="comread" to={`/almento/BlogDetails/${props.id}`}>أكمل القراءة</Link>

    </div>
</div>
  )
}

export default CardBlog
