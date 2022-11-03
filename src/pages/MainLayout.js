import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import TopNavbar from '../components/navbar/TopNavbar'
import OurNewsletter from '../components/OurNewsletter'
// import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {

  const clickHandler = () => toast("Wow so easy!");

  return (
    <div>


        <TopNavbar/>
        <Navbar/>

        <ToastContainer />
          <Outlet/>

       
        <OurNewsletter/>
        <Footer/>
      
    </div>
  )
}

export default MainLayout
