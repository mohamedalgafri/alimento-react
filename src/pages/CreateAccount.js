import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogin from "../components/navbar/NavLogin";

import imglefttree from '../assets/image/imglefttree.png'
import imgrighttree from '../assets/image/imgrighttree.png'

const CreateAccount = () => {
  let navigator = useNavigate();

  let formHandlerSignin = (event) => {
    event.preventDefault();
    navigator("/", { replace: true });
  };

  return (
    <div>
      <NavLogin />

      <section className="bodylogin">
        <div className="imgtreelog">
          <img className="imglefttree" src={imglefttree} alt="" />
          <img className="imgrighttree" src={imgrighttree} alt="" />
        </div>

        <div className="allbodylogin">
          <h1>
            {" "}
            مرحباَ بك في متجر <span>Alimento</span>{" "}
          </h1>
          <p className="mb-4">للتسجيل ، يرجى ملء النموذج الموجود </p>

          <form className="formlogin" onSubmit={formHandlerSignin} action="">
            <div className="inputname inputlogin">
              <input type="text" placeholder="الاسم الأول" />
              <input type="text" placeholder="اسم الاخير" />
            </div>
            <div className="inputname inputlogin">
              <input type="email" placeholder="البريد الالكتروني" />
            </div>
            <div className="inputname inputlogin">
              <input type="number" placeholder="رقم الجوال" />
            </div>
            <div className="inputname inputlogin">
              <input type="password" placeholder="كلمة المرور" />
            </div>

            <button type="submit" className="btndon">
              تسجيل دخول
            </button>
          </form>

          <p className="haco">
            هل لديك حساب؟<Link to="/"> تسجيل دخول</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
