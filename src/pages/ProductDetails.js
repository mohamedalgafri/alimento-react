import React from "react";
import LinkTitle from "../components/LinkTitle";
import SwiperPro from "../components/swiper/SwiperPro";

import { imgcardpro } from "../model/imgprodact";
import CART from "../image/CART.svg";
import IconMat from "../image/Icon mat.svg";
import { useParams } from "react-router-dom";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const ProductDetails = () => {
  let params = useParams();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <LinkTitle linkpage1=" تفاصيل المنتج" linkpage2=" / المنتجات" />

      <section class="productDetails container">
        <div class="rightProductDetails">
          <img src={imgcardpro.imgpro1} alt="" />
        </div>
        <div class="leftProductDetails">
          <h3>خليط كيك كيتو بالفانيلا {params.id} </h3>
          <hr />
          <h4>
            الماركة : <span>Alimento</span>{" "}
          </h4>
          <hr />
          <p>
            خليط كيك كيتو بالفانيلا محلاة ومنكهة لإعداد الدونات الفورية يعتبر
            مثالي لاعداد الدونات، الفطائر والحلويات المخبوزة
          </p>
          <div class="availableInStore">
            <img src="image/Group 124.svg" alt="" />
            <p>متوفر في المتجر</p>
          </div>
          <hr />

          <div class="numProduc">
            <div class="numProdDetels">
              <input type="number" value="888" />
              <div>
                <label>+</label>
                <label>-</label>
              </div>
            </div>

            <div class="textNumProduc">
              <p>46.00شيكل</p>
              <p>63.25شيكل</p>
            </div>
          </div>

          <hr />

          <p class="categoryProduct">
            {" "}
            التصنيف <span>محاصيل طازجة</span>
          </p>

          <div class="tags">
            <p>العلامات</p>
            <p class="tag">الخضار</p>
            <p class="tag">الفواكه</p>
            <p class="tag">الخضار </p>
            <p class="tag">الفواكه</p>
          </div>

          <hr />

          <div class="buyNow">
            <button class="btnBuyNow">شـــراء الان</button>
            <button class="btniconn">
              <img src={CART} alt="" />
            </button>
            <button class="btniconn">
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} style={{fill: '#fff'}} />
            </button>
          </div>
        </div>
      </section>

      <section class="discraptionProductDetails container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              عن المنتج
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              المعلومات الغذائية
            </button>
          </li>
        </ul>
        <div class="tab-content desProd" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <p>خليط كيك كيتو بالفانيلا- كيتو اند كو</p>
            <p>مزيج الكيك سهل التحضير يحتوي على محلي طبيعي</p>

            <p>يمكن إعداد 9 قطع</p>
            <p>خالي من الجلوتين</p>
            <p>غير معدلة وراثيًّا</p>
            <p>بدون سكر مضاف</p>

            <p class="font-600">المكونات </p>
            <p>
              بديل السكر وندروز (الإريثريتول ، ألياف الذرة غير المعدلة وراثيًا ،
              الإينولين ، فاكهة الراهب ، النكهات الطبيعية) ، دقيق جوز الهند ،
              النكهات الطبيعية ، مسحوق الخبز ، صودا الخبز ، الملح ، صمغ الزانثان
            </p>

            <p>يحتوي على: جوز الشجر (جوز الهند)</p>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <p class="endDate">تاريخ إنتهاء الصلاحية: 23-11-2022</p>

            <div class="nutritionalInformation">
              <div class="rightInformation">
                <div class="nutritional">
                  <p>الحجم </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>حجم الحصة </p>
                  <p>5</p>
                </div>
                <div class="nutritional">
                  <p>عدد الحصص </p>
                  <p>35</p>
                </div>
                <div class="nutritional">
                  <p>السعرات الحرارية </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>الدهون </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>الدهون المشبعة </p>
                  <p>G 249</p>
                </div>
              </div>
              <div class="leftInformation">
                <div class="nutritional">
                  <p>البروتين </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>الكربوهيدرات </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>الألياف </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>السكر </p>
                  <p>G 249</p>
                </div>
                <div class="nutritional">
                  <p>الصوديوم </p>
                  <p>G 249</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bestSales container">
        <div class="titleprod ">
          <div>
            <h1>منتجات مشابهة</h1>
          </div>

          {/* <!-- <a href=""><div class="btnn"> <p>عرض المزيد</p></div></a>  --> */}
        </div>

        <div class="mySwiperPro">
          <SwiperPro />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
