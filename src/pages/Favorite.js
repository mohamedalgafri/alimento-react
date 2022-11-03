import React from "react";

import Basket from "../assets/image/Basket Iconnn.svg";
import trash from "../assets/image/vuesax-broken-trash.svg";
import LinkTitle from "../components/LinkTitle";
import { imgcardpro } from "../model/imgprodact";

const Favorite = () => {
  return (

    <>


      <LinkTitle linkpage1=" المفضلة" />

      <section class="bodyfavorite container">
        <div class="titletable">
          <h2 class="font-600 mb-4">قائمة رغباتي</h2>
        </div>

        <div class="table-responsive">
          <table class="table align-middle ">
            <thead>
              <tr>
                <th scope="col">صورة</th>
                <th scope="col">اسم المنتج</th>
                <th scope="col">سعر الوحدة</th>
                <th scope="col">حالة التوفر</th>
                <th scope="col">تحرير</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro8} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="grrencolor font-600">₪ 46.00 </td>
                <td class="grrencolor">متوفر</td>
                <td>
                  <div class="editrowtable">
                    <div class="addcart">
                      <img src={Basket} alt="" />
                    </div>
                    <div class="deleterowtable">
                      <img src={trash} alt="" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro8} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="grrencolor font-600">₪ 46.00 </td>
                <td class="redcolor">غير متوفر</td>
                <td>
                  <div class="editrowtable">
                    <div class="addcart">
                      <img src={Basket} alt="" />
                    </div>
                    <div class="deleterowtable">
                      <img src={trash} alt="" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro8} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="grrencolor font-600">₪ 46.00 </td>
                <td class="grrencolor">متوفر</td>
                <td>
                  <div class="editrowtable">
                    <div class="addcart">
                      <img src={Basket} alt="" />
                    </div>
                    <div class="deleterowtable">
                      <img src={trash} alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Favorite;
