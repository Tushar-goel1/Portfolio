import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({info}) => {
    const {url,name,description,github,demo}=info;
  return (
    <span className='md:w-[410px] md:h-[530px] mx-4 my-4 md:text-lg sm:w-96 '>
      <div className='sm:w-80  px-4 md:w-96 flex flex-col items-center md:h-[500px] border border-purple-600  border-opacity-20 shadow-lg shadow-purple-800 pt-2'>
        <img alt='project-image' src={url}/>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className='flex  w-2/3 justify-evenly md:pt-7 sm:pt-2'>
          <Link to={github?github:''} target='_blank'>
            <button className='border bg-purple-400 rounded-lg w-20'>github</button>
          </Link>
          <Link to={demo?demo:''} target='_blank'>
            <button className='border bg-purple-400 rounded-lg w-20'>demo</button>
          </Link>
        </div>
      </div>
    </span>
  )
}

export default ProjectCard