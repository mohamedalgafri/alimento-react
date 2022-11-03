import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavLogin from '../components/navbar/NavLogin';

import imglefttree from '../assets/image/imglefttree.png'
import imgrighttree from '../assets/image/imgrighttree.png'

const SignIn = () => {

    let navigator = useNavigate();

    let formHandlerSignin=(event)=>{
        event.preventDefault();
        navigator("/almento" , {replace: true});
    }

  return (
    <div>

    <NavLogin/>

    <section className="bodylogin ">

        <div className="imgtreelog">
            <img className="imglefttree" src={imglefttree} alt=""/>
            <img className="imgrighttree" src={imgrighttree} alt=""/>
         </div>

        <div className="allbodylogin bodylo">
            <h1 className="mb-4"> تسجيل الدخول</h1>
            <form className="formlogin" onSubmit={formHandlerSignin}  action="">
                     
    
                <div className="inputname inputlogin">
                    <input type="email" placeholder="البريد الالكتروني"/>
                </div> 
                <div className="inputname inputlogin">
                    <input type="password" placeholder="كلمة المرور"/>
                </div> 
    
                <button type='submit' className="btndon">تسجيل دخول</button>
    
            </form>
    
            <p className="haco">لست عضواً؟<Link to="/CreateAccount"> انشاء حساب</Link></p>
    
        </div>

    

    

    </section>
      
    </div>
  )
}

export default SignIn
