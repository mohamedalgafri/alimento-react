import React from "react";
import LinkTitle from "../components/LinkTitle";

const Account = () => {
  return (
    <>
      <LinkTitle linkpage1=" حسابي" />

      <section class=" accountBody container">
        <h1 class="titleaccount mt-3">حسابي</h1>

        <div class="bodyaccount d-flex align-items-start">
          <div
            class="rightAccount nav flex-column nav-pills "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <p>تحرير معلومات الحساب</p>
              <i class="bx bx-arrow-back"></i>
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <p>تغيير كلمة المرور</p>
              <i class="bx bx-arrow-back"></i>
            </button>
            <button
              class="nav-link"
              id="v-pills-disabled-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-disabled"
              type="button"
              role="tab"
              aria-controls="v-pills-disabled"
              aria-selected="false"
            >
              <p>العناوين</p> <i class="bx bx-arrow-back"></i>
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <p>النشرة الإخبارية</p> <i class="bx bx-arrow-back"></i>
            </button>
          </div>

          <div class="leftAccount tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <h4 class="font-600 mb-4">تحرير معلومات الحساب</h4>
              <div class="inputname ">
                <input type="text" value="عبدالله" />
                <input type="text" value="الاستاذ" />
              </div>
              <div class="inputname">
                <input type="email" value="aalustath01@gmail.com" />
                <input type="number" value="0595461973" />
              </div>

              <button class="restFillter">حفظ التغييرات</button>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <h4 class="font-600 mb-4">تغيير كلمة المرور</h4>
              <div class="inputname ">
                <input type="text" placeholder="كلمة المرور الحالية" />
                <input type="text" placeholder="كلمة المرور الجديدة" />
              </div>
              <div class="inputname">
                <input type="email" placeholder="تأكيد كلمة المرور الجديدة" />
              </div>

              <button class="restFillter">حفظ التغييرات</button>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabindex="0"
            >
              <div class="titletable">
                <h4 class="font-600 mb-4">العناوين</h4>
                <button data-bs-toggle="modal" data-bs-target="#addNew">
                  {" "}
                  إضافة موقع جديد
                </button>
              </div>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">الحي</th>
                      <th scope="col">الشارع</th>
                      <th scope="col">المدينة</th>
                      <th scope="col">المدينة / المحافظة</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">حي النصر </td>
                      <td>شارع أحمد الشقيري</td>
                      <td>مدينة غزة</td>
                      <td>غرب غزة</td>
                      <td
                        class="editSiteTable"
                        data-bs-toggle="modal"
                        data-bs-target="#editSite"
                      >
                        تعديل
                      </td>
                    </tr>
                    <tr>
                      <td>حي النصر </td>
                      <td>شارع أحمد الشقيري</td>
                      <td>مدينة غزة</td>
                      <td>غرب غزة</td>
                      <td
                        class="editSiteTable"
                        data-bs-toggle="modal"
                        data-bs-target="#editSite"
                      >
                        تعديل
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">حي النصر </td>
                      <td>شارع أحمد الشقيري</td>
                      <td>مدينة غزة</td>
                      <td>غرب غزة</td>
                      <td
                        class="editSiteTable"
                        data-bs-toggle="modal"
                        data-bs-target="#editSite"
                      >
                        تعديل
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- ///////////////////////////model Add a new title//////////////////////////////// --> */}

              <div
                class="modal addNew fade"
                id="addNew"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h2 class="mb-4">إضافة عنوان جديد</h2>

                      <div class="inputname ">
                        <input type="text" placeholder="الاسم الأول" />
                        <input type="text" placeholder="اسم العائلة" />
                      </div>
                      <div class="inputname ">
                        <input
                          type="text"
                          placeholder="رقم المنزل ـ معلم قريب"
                        />
                        <input type="text" placeholder="المدينة" />
                      </div>
                      <div class="inputname ">
                        <input type="text" placeholder="الحي - الشارع" />
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>البلد</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="inputname ">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>المدينة / المحافظة</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer addNewFooter ">
                      <div class=" inputff form-check me-4 ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="CheckedAddnew"
                        />
                        <label class="form-check-label" for="CheckedAddnew">
                          جعل الموقع هذا افتراضي
                        </label>
                      </div>

                      <div class="btnmodel">
                        <button type="button" class="saveinput">
                          حفظ
                        </button>
                        <button
                          type="button"
                          class="closemodel"
                          data-bs-dismiss="modal"
                        >
                          إلغاء
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- /////////////////////////// End model Add a new title//////////////////////////////// --> */}

              {/* <!-- /////////////////////////// model Edit site//////////////////////////////// --> */}

              <div
                class="modal addNew fade"
                id="editSite"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h2>تعديل الموقع</h2>

                      <div class="inputname ">
                        <input
                          type="text"
                          placeholder="رقم المنزل ـ معلم قريب"
                        />
                        <input type="text" placeholder="الحي - الشارع" />
                      </div>
                      <div class="inputname ">
                        <input type="text" placeholder="المدينة" />
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>البلد</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="inputname ">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>المدينة / المحافظة</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer addNewFooter ">
                      <div class=" inputff form-check me-4 ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="CheckedAddnew"
                        />
                        <label class="form-check-label" for="CheckedAddnew">
                          جعل الموقع هذا افتراضي
                        </label>
                      </div>

                      <div class="btnmodel">
                        <button type="button" class="saveinput">
                          حفظ
                        </button>
                        <button
                          type="button"
                          class="closemodel"
                          data-bs-dismiss="modal"
                        >
                          إلغاء
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- /////////////////////////// End model Edit site//////////////////////////////// --> */}
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              <h4 class="font-600 mb-3">النشرة الاخبارية</h4>
              <p>
                اشترك في نشرتنا الإخبارية ليصلك كل ما هو جديد من عروض نصائح
                وتخفيضات حصرية لعملائنا المميزين
              </p>
              <hr />
              <h5 class="mb-3">هل تريد الاشتراك في القائمة البريدية ؟</h5>

              <div class=" inputff form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  نعم اريد الاشتراك
                </label>
              </div>
              <div class=" inputff form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  لا اريد الاشتراك
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
