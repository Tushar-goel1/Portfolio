import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from '../Const/data'

const Projects = () => {
  return (
    <div className=''>
      <div className='pt-28 flex flex-col justify-center items-center text-xl'>
        <p className='text-4xl pb-4'>MY RECENT <span className='text-purple-600'> WORKS</span></p>
        <div className=''>Here are few projects I've worked recently</div>
      </div>
      <div className='flex justify-center flex-wrap px-24 py-16'>
      {
        ProjectData.map((items)=>{
          return <ProjectCard key={items.id} info={items}
          />
        })
      }
        
      </div>
    </div>
  )
}

export default Projects