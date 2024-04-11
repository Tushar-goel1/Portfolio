import React from 'react'
import { SymbolData } from '../Const/data'
import SkillSetCards from './SkillSetCards'

const About = () => {
  return (
    <div>
      <div className=' flex mx-8 box-border flex-wrap h-[100vh]'>
        <div className='w-[50vw] flex mt-16 pl-28 flex-col'>
          <p className='text-4xl flex justify-center pt-24 pb-4'>KNOW WHO I'M</p>
          <p className='py-4 text-2xl'>Hii Everyone,I am <span className='text-purple-600'>TUSHAR GOEL</span> from <span className='text-purple-600'>Ghaziabad, India</span>.</p>
          <p className='text-2xl py-4'>I am pursuing <span className='text-purple-600'>B.Tech</span> from <span className='text-purple-600'>MIET, Meerut</span>.</p>
          <p className='text-2xl py-4'>Apart from coding, some other activities that i love to do!</p>
          <ul className='pl-6 text-2xl'>
            <li>👉🏻 Playing Games</li>
            <li>👉🏻 Watching Animes</li>
            <li>👉🏻 Watching Cricket</li>
          </ul>
        </div>
        <div className='w-[40vw] flex  items-center mt-16'>
          <img alt='Home pic' 
            src='https://cdni.iconscout.com/illustration/premium/thumb/man-coder-developed-code-in-computer-6818031-5625514.png?f=webp'
          />
        </div>
      </div>

      <div className='h-[100vh] flex flex-wrap w-fit'>
        <div className='w-full h-24 text-5xl flex flex-wrap justify-center  '>Professional <span className='text-purple-600 ml-2'> Skillset</span> </div>
        <div className='  h-[78vh] px-36 flex flex-wrap justify-center'> 
        {
          SymbolData.map((SD)=>(  
            <SkillSetCards key={SD.name} info={SD}/>  
          ))
        }
        </div>
      </div>

      <div className='flex flex-col items-center h-max mb-8'>
        <div className='text-4xl pb-4'>Days I <span className='text-purple-600'>Code</span> ..</div>
        <div >
          <img alt='Days streak'
            src={require('../Assets/images/CodeStreak.png')}
          />
        </div>
      </div>

    </div>
  )
}

export default About