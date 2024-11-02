import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/ftnskill (1).png'
import project7 from '../assets/project7.png'
import {
    DiJavascript,
    DiReact,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiGithubBadge
} from 'react-icons/di'

const About = () => {
    return (
        <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center ' id="about">
            <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
                    <DiHtml5 className='text-orange-600' />
                    <DiCss3 className='text-blue-600' />
                    <DiJavascript className='text-yellow-600' />
                    <DiReact className='text-blue-500' />
            </div>
            <div className='relative group'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300' ></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={project7} alt="project1" className='rounded-lg md:max-w-[500px]' />
                </div>
            </div>

            <div className='p-6'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
                <p className='text-gray-300 mb-4'>
                As a passionate web front-end developer, I am dedicated to creating visually stunning and responsive websites that provide an engaging user experience. I focus on modern design principles and clean code to deliver seamless and interactive web applications.
                </p>
                <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                    <DiHtml5 className='text-orange-600' />
                    <DiCss3 className='text-blue-600' />
                    <DiJavascript className='text-yellow-600' />
                    <DiReact className='text-blue-500' />
                </div>
            </div>


            <div className='p-6'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
                <p className='text-gray-300 mb-4'>
                   Skilled in creating modern, responsive web applications with the latest front-end technologies, I focus on building user-friendly interfaces that look and work great across all devices. My approach emphasizes clean, efficient code and visually appealing design to deliver engaging user experiences.
                </p>
                <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                    <DiHtml5 className='text-orange-600' />
                    <DiCss3 className='text-blue-600' />
                    <DiJavascript className='text-yellow-600' />
                    <DiReact className='text-blue-500' />
                </div>
            </div>

            <div className='relative group'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300' ></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={project2} alt="project2" className='rounded-lg md:max-w-[500px]' />
                </div>
            </div>



            {/* <div className='relative group'>
                <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300' ></div>
                <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={project7} alt="project7" className='rounded-lg md:max-w-[500px]' />
                </div>
            </div>

            <div className='p-6'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Fullstack Experiance</h2>
                <p className='text-gray-300 mb-4'>
                    Skilled in developing end-to-end solution using Fullstacktechnologes.
                </p>
                <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                    <DiHtml5 className='text-orange-600' />
                    <DiCss3 className='text-blue-600' />
                    <DiJavascript className='text-yellow-600' />
                    <DiReact className='text-blue-500' />
                </div>
            </div> */}
            
        </div>
    )
}

export default About