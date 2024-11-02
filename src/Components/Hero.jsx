import React from 'react'
import profilepic from '../assets/ftn1314.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffext from './ShinyEffext'
import resume from '../assets/ftn_new (1).pdf'
const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
            <div className='max-w[800px]'>
                <p className='text-gray-200 md:text-6xl text-3xl tracking-tighter'>
                    HEY,I AM <br />
                    <span>MOHAMED</span><br />
                    <span>MUNTASIR FATEEN</span><br />
                    <TypeAnimation
                        sequence={[
                            "Developer",
                            1000,
                            "Webdesigner",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold italic'

                    />
                </p>

                <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                    <button className='transform transition-transform hover:scale-105 hover:shadow-lg
                    z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2
                     bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'><a download href={resume}>Download CV</a></button>
                   
                </div>
            </div>

            <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
                <div className='hidden md:block'>
                    <ShinyEffext left={100} top={200} size={1400}/>
                </div>
                <ShinyEffext left={100} top={0} size={1200}/>
            </div>

            <img src={profilepic}className='w-[300px] md-w-[500px]'/>
        </div>
    )
}

export default Hero