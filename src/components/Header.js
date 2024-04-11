import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScroll,setIsScroll]=useState(false);

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
    <ul className={`${isScroll?'bg-gray-50 bg-opacity-5 backdrop-blur':'bg-transparent'} fixed top-0 w-screen font-mono flex flex-wrap h-[10vh] items-center justify-end  text-2xl pr-12 gap-12 `}>
      <Link to="/" onClick={()=>scrollTop()}>
        <li className='hover:underline decoration-purple-500 decoration-4 '>Home</li>
      </Link>
      <Link to="/About" onClick={()=>scrollTop()}>
        <li className='hover:underline decoration-purple-500 decoration-4 '>About</li>
      </Link>
      <Link to="/Projects" onClick={()=>scrollTop()}>
        <li className='hover:underline decoration-purple-500 decoration-4 '>Projects</li>
      </Link>
      <Link to="/Resume" onClick={()=>scrollTop()}>
        <li className='hover:underline decoration-purple-500 decoration-4 '>Resume</li>
      </Link>
    </ul>
  )
}

export default Header