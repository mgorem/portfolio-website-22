import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Orem, nice to meet you. Take a look at my portfolio.</p>
                </div>
                <div>
                    <p>
                        I am passionate about building software that creates solutions
                        and improves the lives of those around me. I specialize in 
                        building
                        software for clients ranging from individuals and
                        small businesses all the way to large enterprise corporations.
                        What would you do if you had a passionate software expert
                        available at your fingertips?
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
