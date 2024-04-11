import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between items-center px-12  bg-gray-400 bg-opacity-15 h-[10vh] '>
      <div>Designed and Developed by Tushar Goel</div>
      <div>Copyright @2024 TG</div>
      <div className='flex'>
          <Link target='_blank' to={'https://github.com/Tushar-goel1'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='github icon' className='w-6 h-6'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png'/>
            </div>
          </Link>
          <Link target='_blank' to={'https://www.linkedin.com/in/tushar-goel-88094b226'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='github icon' className='w-6 h-6 rounded-3xl'
                src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png'/>  
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Footer