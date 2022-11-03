import React from "react";
import CardBlog from "../components/CardBlog";

import {imgBlog} from '../model/imgprodact'
import imgblogdet from '../assets/image/imgBlogDetailes.png'

const BlogDetails = () => {
  return (
    <div>
      <section class="blogDetailaSec container">
        <div class="titleBlogDetails">
          <div>
            <h1>أفضل مطاعم كيتو في فلسطين</h1>
            <p>نشر بواسطة فريق المينتو</p>
          </div>

          <p class="tipblog greentip">الكيتو</p>
        </div>

        <div class="imgBlogDetails">
          <img src={imgblogdet} alt="" />
        </div>

        <div class="detalesBlog">
          <h4>أهم مطاعم كيتو في الدمام</h4>

          <p class="titledet ">1- مطعم تو بوب تيك</p>
          <p>
            يقدم مطعم سكيل وجبات صحية بنظامين مختلفين، وهما الحمية قليلة الدهون،
            وحمية الكيتو دايت. يحرص مطعم سكيل على تحضير وجبات مشهورة ومحببة
            للجميع ولكن بطريقة مختلفة لكي تتناسب مع الكيتو. ومن بين هذه الوجبات؛
            وجبة لازانيا الباذنجان باللحم، ووجبة سباقيتي الكوسة باللحم، كاسرول
            الدجاج والقرنبيط. أما عن محبي التاكو، فيمكنهم الاستمتاع بـ “سلطة
            تاكو” اللذيذة وقليلة الكربوهيدرات.
          </p>
          <p class="titledet">2- مطعم ابز كيتشن</p>
          <p>
            إذا كنت تبحث عن مطاعم كيتو ذات جودة عالية ونكهات مفعمة، فلا يوجد
            أفضل من مطعم جرينز. هذا المطعم أحدث ثورة في مجال الأكل الصحي في
            السعودية. وله أكثر من فرع داخل المملكة. يقدم مطعم جرينز قائمة طعام
            متعددة الثقافات تضم وجبات عالمية مثل الدجاج بالزبدة مع أرز الزهرة و
            السبانخ بالكريمة مع السلمون وكرات اللحم مع الزهرة وغيرها الكثير
          </p>

          <p>
            يقدم مطعم سكيل وجبات صحية بنظامين مختلفين، وهما الحمية قليلة الدهون،
            وحمية الكيتو دايت. يحرص مطعم سكيل على تحضير وجبات مشهورة ومحببة
            للجميع ولكن بطريقة مختلفة لكي تتناسب مع الكيتو. ومن بين هذه الوجبات؛
            وجبة لازانيا الباذنجان باللحم، ووجبة سباقيتي الكوسة باللحم، كاسرول
            الدجاج والقرنبيط. أما عن محبي التاكو، فيمكنهم الاستمتاع بـ “سلطة
            تاكو” اللذيذة وقليلة الكربوهيدرات.
          </p>
        </div>
      </section>

      <section class="blogSection container">
        <div class="titleprod">
          <div>
            <h1>قد يعجبك أيضاً</h1>
          </div>

          <a href="">
            <div class="btnn">
              {" "}
              <p>عرض المزيد</p>
            </div>
          </a>
        </div>

        <div class="cardsBlog">

            <CardBlog imgblog={imgBlog.imgblog1}/>
            <CardBlog imgblog={imgBlog.imgblog2}/>
            <CardBlog imgblog={imgBlog.imgblog3}/>


        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
