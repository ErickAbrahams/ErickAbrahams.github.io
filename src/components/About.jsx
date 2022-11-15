import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#FF1E56]'>About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Erick, nice to meet you. please take a look around.</p>
                    </div>

                    <div>
                        <p>this website is not more than my playground to test something new and some cool features please dont expect too muchn :D
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About