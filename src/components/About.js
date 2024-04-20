import React from 'react'
import { SymbolData } from '../Const/data'
import SkillSetCards from './SkillSetCards'

const About = () => {
  return (
    <div className=''>
      <div className='sm:pt-8 sm:text-xl  sm:flex sm:flex-wrap sm:flex-col sm:items-center 
                      md:pt-24 md:text-2xl  md:flex md:flex-wrap md:flex-row md:justify-center '>
        <div className='sm:px-2  md:w-[50vw] '>
          <p className='sm:text-center md:text-4xl'>KNOW WHO I'M</p>
          <p className='sm:py-4'>Hii Everyone,I am <span className='text-purple-600'>TUSHAR GOEL</span> from <span className='text-purple-600'>Ghaziabad, India</span>.</p>
          <p className='sm:py-4'>I am pursuing <span className='text-purple-600'>B.Tech</span> from <span className='text-purple-600'>MIET, Meerut</span>.</p>
          <p className=''>Apart from coding, some other activities that i love to do!</p>
          <ul className=''>
            <li>👉🏻 Playing Games</li>
            <li>👉🏻 Watching Animes</li>
            <li>👉🏻 Watching Cricket</li>
          </ul>
        </div>
        <div className='sm:pb-12 sm:pt-8 md:w-[35vw] '>
          <img alt='Home pic'  className='md:h-[400px] sm:h-80 md:w-[38vw]'
            src={require('../Assets/images/About.webp')}
          />
        </div>
      </div>

      <div className='md:pt-20'>
        <div className='sm:text-2xl sm:text-center md:text-4xl'>Professional <span className='text-purple-600'> Skillset</span> </div>
        <div className='sm:px-2 sm:flex sm:flex-wrap sm:py-4 sm:justify-center 
                       md:py-20  md:px-24 md:flex md:flex-wrap md:justify-center md:items-center'> 
        {
          SymbolData.map((SD)=>(  
            <SkillSetCards key={SD.name} info={SD}/>  
          ))
        }
        </div>
      </div>

      <div className=''>
        <div className='sm:text-2xl sm:text-center md:text-4xl'>Days I <span className='text-purple-600'>Code</span> ..</div>
        <div >
          <img alt='Days streak' className='sm:py-4 sm:px-2 sm:h-48 md:w-screen md:h-72 md:px-2'
            src={require('../Assets/images/CodeStreak.png')}
          />
        </div>
      </div>

    </div>
  )
}

export default About