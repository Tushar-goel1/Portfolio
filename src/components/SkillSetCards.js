import React from 'react'

const SkillSetCards = ({info}) => {
  return (
    <span className='sm:mx-2 sm:h-24 sm:w-32 md:mx-4 md:h-40 md:w-48 md:mb-12'>
        <img alt={info.name} className='sm:w-28 sm:h-20 md:w-44 md:h-36 border md:p-5 md:py-2 border-purple-400 rounded-md shadow-md shadow-purple-400 md:hover:w-[180px] md:hover:h-[148px] sm:hover:w-[116px] sm:hover:h-[84px]  hover:transition-all hover:ease-in'
            src={info.url}
        />
    </span>
  )
}

export default SkillSetCards