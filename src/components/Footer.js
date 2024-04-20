import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='sm:flex sm:flex-wrap sm:justify-between sm:mt-4 sm:pb-4 md:bg-gray-400 sm:bg-gray-400 sm:bg-opacity-15 sm:items-center md:px-2 md:items-center md:bg-opacity-15 md:h-[8vh] md:pt-2 sm:pt-2 sm:px-2'>
      <div>Designed and Developed by Tushar Goel</div>
      <div>Copyright @2024 TG</div>
      <div className='flex'>
          <Link target='_blank' to={'https://github.com/Tushar-goel1'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='github icon' className='w-6 h-6'
                src={require('../Assets/images/github.png')}/>
            </div>
          </Link>
          <Link target='_blank' to={'https://www.linkedin.com/in/tushar-goel-88094b226'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='linkedin icon' className='w-6 h-6 rounded-3xl'
                src={require('../Assets/images/linkedin.webp')}/>  
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Footer