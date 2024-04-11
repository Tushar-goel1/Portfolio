import React from 'react'

const SkillSetCards = ({info}) => {
  return (
    <span className='mx-4 h-40 w-48 '>
        <img alt={info.name} className=' w-44 h-36 border p-5 py-2 border-purple-400 rounded-md shadow-md shadow-purple-400 hover:w-[180px] hover:h-[148px] hover:transition-all hover:ease-in'
            src={info.url}
        />
    </span>
  )
}

export default SkillSetCards