import React from 'react';

const Resume = () => {
    const imageUrl = require("../Assets/images/Resume.png");
    return ( 
        <div className='pt-16 h-fit flex flex-col justify-center items-center'>
            <a href={'https://drive.google.com/file/d/168t1tY-I8G40nTVclX8zjbrQjJ2WEq2L/view?usp=drive_link'}  target='_blank' >
              <button className='border bg-purple-500 font-sans border-purple-500 w-56 h-12 rounded-lg'>Download CV</button>
            </a>

            <img alt='resume png' className='h-1/2 w-3/5 py-8' src={imageUrl} />
            
            <a className='pb-8' 
                href={'https://drive.google.com/file/d/168t1tY-I8G40nTVclX8zjbrQjJ2WEq2L/view?usp=drive_link'}  
                target='_blank' >
                <button className='border bg-purple-500 font-sans border-purple-500 w-56 h-12 rounded-lg'>
                    Download CV
                </button>
            </a>
        </div> 
    );
}
export default Resume;



