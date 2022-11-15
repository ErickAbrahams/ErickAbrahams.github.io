import React from 'react'
import Logo from '../assets/Logo.svg'

const Home = () => {
    return (
        <div name='home' className='flex-col justify-center items-center w-full h-screen bg-[#000000]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#FF1E56] hover:scale-110 duration-300'>Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#EAEAEA] hover:scale-110 duration-300'>Erick Sanggor</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#9ca0ad] hover:scale-110 duration-300'>I'm a Front-end Dev Enthusiast and welcome to my humble website.</h2>
                <p className='text-[#9ca0ad] py-4 max-w-[700px] hover:scale-110 duration-300'>I'm still learning about everything so don't judge me please.
                </p>
            </div>
        </div>
    )
}

export default Home