import React from "react";
import CardProdact from "../components/CardProdact";
import LinkTitle from "../components/LinkTitle";

import { imgcardpro } from "../model/imgprodact";
import searchfav from "../image/vuesax-broken-search-favoritew.svg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Products = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <LinkTitle linkpage1="المنتجات" />

      <section class="productss container">
        <div class="allproducts">
          <div class="rightProducts">
            <div class="inputsearch">
              <input type="text" placeholder="عن ماذا تريد أن تبحث؟" />
              <div class="imgsearchinput">
                <img src={searchfav} alt="" />
              </div>
            </div>

            <div class="priceFilter" dir="ltr">
              <div id="slider-non-linear-step"></div>

              <div id="slider-non-linear-step-value"></div>
            </div>

            <div class="categoriesProducts">
              <p>التصنيفات</p>

              <div class="categorie">
                <p>محاصيل طازجة</p>
                <i class="bx bx-arrow-back"></i>
              </div>

              <div class="categorie">
                <p>مخبوزات</p>
                <i class="bx bx-arrow-back"></i>
              </div>

              <div class="categorie">
                <p>مجمدات</p>
                <i class="bx bx-arrow-back"></i>
              </div>

              <div class="categorie">
                <p>جاهز للأكل</p>
                <i class="bx bx-arrow-back"></i>
              </div>

              <div class="categorie">
                <p>أغذية مغلفة</p>
                <i class="bx bx-arrow-back"></i>
              </div>
            </div>

            <button class="restFillter">إعادة التعيين</button>
          </div>
          <div class="liftProducts">
            <div class="titleliftProducts">
              <div class="numproducts">
                <p>
                  {" "}
                  سلعة متوفر <span>(2232)</span>
                </p>
              </div>
              <div class="sortproducts">
                <p> الترتيب حسب: </p>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>الاحدث</em>
                    </MenuItem>
                    <MenuItem value={20}>الاكثر مبيعا</MenuItem>
                    <MenuItem value={30}>الاقل سعر</MenuItem>
                    <MenuItem value={30}>الاعلى سعر </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div class="bodyProducts row ">
              <CardProdact imgpro={imgcardpro.imgpro1} />
              <CardProdact imgpro={imgcardpro.imgpro2} />
              <CardProdact imgpro={imgcardpro.imgpro3} />
              <CardProdact imgpro={imgcardpro.imgpro4} />
              <CardProdact imgpro={imgcardpro.imgpro5} />
              <CardProdact imgpro={imgcardpro.imgpro6} />
              <CardProdact imgpro={imgcardpro.imgpro7} />
              <CardProdact imgpro={imgcardpro.imgpro8} />
              <CardProdact imgpro={imgcardpro.imgpro2} />
            </div>

            <nav aria-label="..." class="pag">
              <ul class="pagination pagination">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
