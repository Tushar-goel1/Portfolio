import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({info}) => {
    const {url,name,description,github,demo}=info;
  return (
    <span className='w-[410px] h-[530px] mx-4 my-4 text-lg'>
      <div className=' px-4 w-96 flex flex-col items-center h-[500px] border border-purple-600  border-opacity-20 shadow-lg shadow-purple-800 pt-2'>
        <img alt='project-image' src={url}/>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className='flex  w-2/3 justify-evenly pt-7'>
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