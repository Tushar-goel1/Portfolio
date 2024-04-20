import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-fixed h-max text-white'  style={{backgroundImage:"url("+ require('../Assets/images/background.png') +")"}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body