import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-fixed h-max   text-white' style={{backgroundImage:"url("+ `https://cdn.pixabay.com/photo/2018/10/16/07/07/stars-3750824_960_720.png` +")"}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body