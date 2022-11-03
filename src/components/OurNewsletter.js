import React from 'react'
import send from '../assets/image/vuesax-broken-send.svg'

const OurNewsletter = () => {
  return (
    <section className="ourNewsletter">
    <div className="container allourNewsletter">
        <h5>اشترك في نشرتنا الإخبارية ليصلك كل ما هو جديد من عروض نصائح وتخفيضات حصرية لعملائنا المميزين</h5>
        <form className="inputOurNewsletter">
            <input type="text" placeholder="ادخل البريد اللإلكترونى"/>
            <button><img src={send} alt=""/></button>
        </form>
    </div>
</section>
  )
}

export default OurNewsletter
