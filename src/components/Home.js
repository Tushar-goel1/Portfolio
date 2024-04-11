import React from 'react'
import TypingAnimation from './TypingAnimation'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div >
      <div className=' flex mx-8 box-border flex-wrap h-[100vh]'>
        <div className='w-[50vw] flex justify-center pl-28 flex-col text-6xl'>
          <div>Hi There!</div>
          <div className='py-8'>I'M <span className='text-purple-600'>TUSHAR GOEL</span></div>
          <div className='text-purple-600'>
             <TypingAnimation/>
          </div>
        </div>
        <div className='w-[40vw] flex justify-center items-center pl-10'>
          <img alt='Home pic' className='w-96 h-96'
            src='https://www.smacware.com/wp-content/uploads/2021/02/php-web-developer.png'
          />
        </div>
      </div>
      <div className='h-[60vh] flex flex-wrap'>
        <div className='w-[70vw] flex-col pl-24 flex-wrap'>
          <div className='text-4xl pl-32 py-12'>LET ME <span className='text-purple-600 '>INTRODUCE</span> MYSELF</div>
          <div className='text-2xl pb-8'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</div>
          <div className='text-2xl pb-8'>I have knowledge of
            <span className='text-purple-600 italic '> C++ and React.js</span></div>
          <div className='text-2xl pb-8'>My field of interest's are building new 
            <span className='text-purple-600 italic '> Web Pages </span>
              and solving 
            <span className='text-purple-600 italic '> DSA problems</span></div>
        </div>
        <div>
          <img alt='svg.icon' className='h-64 w-56'
           src='https://raw.githubusercontent.com/tom555my/react-native-avataaars/HEAD/avataaars.png'/>
        </div>
      </div>

      <div className='flex flex-col items-center h-[30vh]'>
        <div className='text-4xl pb-4'>FIND ME ON</div>
        <div className='text-xl pb-4'>feel free to <span className='text-purple-600'>connect</span> with me</div>
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