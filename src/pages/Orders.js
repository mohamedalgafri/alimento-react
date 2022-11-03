import React from "react";
import LinkTitle from "../components/LinkTitle";

import { imgcardpro } from "../model/imgprodact";

const Orders = () => {



  return (
    <div>
      <LinkTitle linkpage1=" الطلبات" />

      <section class="bodyfavorite container">
        <div class="titletable">
          <h2 class="font-600 mb-4">الطلبات</h2>
        </div>

        <div class="table-responsive">
          <table class="table align-middle ">
            <thead>
              <tr>
                <th scope="col">صورة</th>
                <th scope="col">اسم المنتج</th>
                <th scope="col">الحالة</th>
                <th scope="col">الإجمالي</th>
                <th scope="col">التاريخ</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro5} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="grrencolor ">تم التسليم </td>
                <td class="">₪ 46.00 </td>
                <td>29/6/2022</td>
                <td>
                  {" "}
                  <button
                    class="btndetailstable"
                    data-bs-toggle="modal"
                    data-bs-target="#productDetails"
                  >
                    عرض التفاصيل
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro8} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="">قيد التحضير </td>
                <td class="">₪ 46.00 </td>
                <td>29/6/2022</td>
                <td>
                  {" "}
                  <button
                    class="btndetailstable"
                    data-bs-toggle="modal"
                    data-bs-target="#productDetails"
                  >
                    عرض التفاصيل
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="imgetable">
                    <img src={imgcardpro.imgpro2} alt="" />
                  </div>
                </td>
                <td>خليط كيك كيتو بالفانيلا</td>
                <td class="grrencolor ">تم التسليم </td>
                <td class="">₪ 46.00 </td>
                <td>29/6/2022</td>
                <td>
                  {" "}
                  <button
                    class="btndetailstable"
                    data-bs-toggle="modal"
                    data-bs-target="#productDetails"
                  >
                    عرض التفاصيل
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Orders;
