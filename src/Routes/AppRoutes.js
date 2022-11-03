import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import ContactUs from '../pages/ContactUs'
import CreateAccount from '../pages/CreateAccount'
import Favorite from '../pages/Favorite'
import HomePage from '../pages/HomePage'
import MainLayout from '../pages/MainLayout'
import Orders from '../pages/Orders'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import ServiceBooking from '../pages/ServiceBooking'
import Services from '../pages/Services'
import SignIn from '../pages/SignIn'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/almento' element={<MainLayout/>} >
            <Route path='/almento' element={<HomePage/>} />
            <Route path='/almento/Products' element={<Products/>}/>
            <Route path='/almento/Services' element={<Services/>}/>
            <Route path='/almento/Blog' element={<Blog/>}/>
            <Route path='/almento/ContactUs' element={<ContactUs/>}/>

            <Route path='/almento/favorite' element={<Favorite/>}/>
            <Route path='/almento/orders' element={<Orders/>}/>
            <Route path='/almento/account' element={<Account/>}/>

            <Route path='/almento/productDetails/:id' element={<ProductDetails/>}/>
            <Route path='/almento/BlogDetails/:id' element={<BlogDetails/>}/>
            <Route path='/almento/ServiceBooking/:id' element={<ServiceBooking/>}/>
        </Route>
        <Route path='/CreateAccount' element={<CreateAccount/>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
