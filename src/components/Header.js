import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
  const [isScroll,setIsScroll]=useState(false);
  const OpenMenu=useSelector((store)=>store.app.OpenMenu)
  const dispatch=useDispatch();

  const scrollTop=()=>{
    window.scroll({top: 0, behavior: "smooth"})
  }
  useEffect(()=>{
    const func=()=>{
      if(window.scrollY>0)setIsScroll(true)
      else setIsScroll(false)
    }
    window.addEventListener('scroll',func);
    return ()=>{
      window.removeEventListener('scroll',func);
    }
  },[]);
  return (
    <div className={`${isScroll?'md:bg-gray-50 md:bg-opacity-5 md:backdrop-blur':'md:bg-transparent'}
      ${OpenMenu?'sm:bg-cyan-400 ':''}
       sm:fixed
       md:fixed md:h-16 md:text-2xl`
      }>
      <div className=' sm:w-screen sm:flex sm:justify-end
        md:hidden '>

        <button onClick={()=>{
            dispatch(toggleMenu());
          }}
        >
        {
          OpenMenu?<img alt='cross sign' className='h-8 w-8 '
            src='https://cdn-icons-png.flaticon.com/512/25/25364.png'/>
          :<img alt='hamberger menu' className='h-8 w-8'
            src='https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png'/>
        }

        </button>
      </div>
      <ul className={`${OpenMenu?'sm:visible':'sm:hidden'}
        sm:w-screen sm:flex sm:flex-col sm:items-center
        md:w-screen md:flex md:flex-row md:justify-end md:items-center md:gap-8 md:h-16 md:pr-8 `
        }>
        <Link to="/" onClick={()=>scrollTop()}>
          <li className=' sm:py-2 sm:text-xl md:text-2xl sm:hover:underline sm:hover:decoration-purple-500 sm:hover:decoration-4
            md:hover:underline md:hover:decoration-purple-500 md:hover:decoration-4'>
            Home
          </li>
        </Link>
        <Link to="/About" onClick={()=>scrollTop()}>
          <li className='sm:py-2 sm:text-xl md:text-2xl sm:hover:underline sm:hover:decoration-purple-500 sm:hover:decoration-4
            md:hover:underline md:hover:decoration-purple-500 md:hover:decoration-4'>
            About
          </li>
        </Link>
        <Link to="/Projects" onClick={()=>scrollTop()}>
          <li className='sm:py-2 sm:text-xl md:text-2xl sm:hover:underline sm:hover:decoration-purple-500 sm:hover:decoration-4
            md:hover:underline md:hover:decoration-purple-500 md:hover:decoration-4'>
            Projects
          </li>
        </Link>
        <Link to="/Resume" onClick={()=>scrollTop()}>
          <li className='sm:py-2 sm:text-xl md:text-2xl sm:hover:underline sm:hover:decoration-purple-500 sm:hover:decoration-4
            md:hover:underline md:hover:decoration-purple-500 md:hover:decoration-4'>
            Resume
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Header