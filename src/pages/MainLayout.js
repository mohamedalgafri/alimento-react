import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import TopNavbar from '../components/navbar/TopNavbar'
import OurNewsletter from '../components/OurNewsletter'
import HomePage from './HomePage'
import { BrowserRouter, Routes , Route} from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>


        <TopNavbar/>
        <Navbar/>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
      

          
        <OurNewsletter/>
        <Footer/>
      
    </div>
  )
}

export default MainLayout
