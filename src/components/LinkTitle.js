import React from 'react'
import { Link } from 'react-router-dom'

import imghome from '../assets/image/home-hashtag.svg'

const LinkTitle = (props) => {
  return (
    <section class="linktitle container">
        <div class="linkshed">
            <Link to="/almento"><img src={imghome} alt=""/></Link>
            <Link to="/almento/Products"> {props.linkpage2}</Link>
            <p> / {props.linkpage1}</p>
        </div>
    </section>
  )
}

export default LinkTitle
