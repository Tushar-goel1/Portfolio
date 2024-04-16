import React from 'react'
import TypingAnimation from './TypingAnimation'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='sm:pt-8 
                    md:pt-24 '>
      <div className='sm:flex sm:flex-col sm:py-8  sm:items-center
                      md:flex md:flex-row md:items-center md:justify-center '>
        <div className='sm:text-4xl sm:py-8  sm:w-[330px]
                        md:text-6xl md:w-1/2'>
          <div className='md:py-2'>Hi There!</div>
          <div className='md:py-2'>I'M <span className='text-purple-600'>TUSHAR GOEL</span></div>
          <div className='text-purple-600'>
             <TypingAnimation/> 
          </div>
        </div>
        <div className='sm:pb-8 md:h-[400px] md:w-96'>
          <img alt='Home pic' className='sm:w-72 sm:h-72 md:h-96 md:w-96'
            src='https://www.smacware.com/wp-content/uploads/2021/02/php-web-developer.png'
          />
        </div>
      </div>
      <div className='sm:flex sm:flex-col sm:items-center sm:text-xl sm:px-2 sm:flex-wrap
                      md:text-2xl md:pt-28 md:flex md:flex-row md:flex-wrap md:justify-center'>
        <div className='md:w-[70%] '>
          <div className='sm:text-center md:text-3xl'>LET ME <span className='text-purple-600 '>INTRODUCE</span> MYSELF</div>
          <div className='sm:pb-4 md:py-2'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</div>
          <div className='sm:pb-4 md:py-2'>I have knowledge of
            <span className='text-purple-600 italic s'> C++ and React.js</span></div>
          <div className=' sm:pb-8 md:py-2'>My field of interest's are building new 
            <span className='text-purple-600 italic '> Web Pages </span>
              and solving 
            <span className='text-purple-600 italic '> DSA problems</span></div>
        </div>
        <div className='sm:pb-8'>
          <img alt='svg.icon' className='h-64 w-56'
           src='https://raw.githubusercontent.com/tom555my/react-native-avataaars/HEAD/avataaars.png'/>
        </div>
      </div>

      <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-xl
                      md:flex md:flex-col md:justify-center md:items-center md:text-2xl md:pt-16 md:pb-12'>
        <div >FIND ME ON</div>
        <div className='sm:pb-4'>feel free to <span className='text-purple-600'>connect</span> with me</div>
        <div className='flex'>
          <Link target='_blank' to={'https://github.com/Tushar-goel1'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='github icon' className='w-10 h-10'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png'/>
            </div>
          </Link>
          <Link target='_blank' to={'https://www.linkedin.com/in/tushar-goel-88094b226'}>
            <div className='rounded-3xl hover:ring-2 ring-offset-4 hover:ring-purple-600 mr-8 transition duration-300'>
              <img alt='github icon' className='w-10 h-10 rounded-3xl'
                src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png'/>  
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home