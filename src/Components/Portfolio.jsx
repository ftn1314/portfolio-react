import React, { useState } from 'react'
import project1 from '../assets/P1.png'
import project2 from '../assets/P2.png'
import project3 from '../assets/P3.png'
import project4 from '../assets/P4.png'
import project5 from '../assets/P5.png'
import project6 from '../assets/P6.png'
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffext from './ShinyEffext'

const projects = [
    {
        img: project1,
        title: "Project 1",
        description: "A modern, responsive e-commerce platform for fashion, featuring seamless product browsing, detailed pages, and a user-friendly shopping experience built with React.",
        links: {
            site: "https://e-commerece-ftn.netlify.app",
            gitHub: "https://github.com/ftn1314/E-commerce-fashion"
        }
    },
    {
        img: project2,
        title: "Project 2",
        description: "An AI-powered tool that generates images from text descriptions, offering creative and precise visuals for various applications.",
        links: {
            site: "https://ai-image-generator-ftn.netlify.app",
            gitHub: "https://github.com/ftn1314/Ai-image-generator"
        }
    },
    {
        img: project3,
        title: "Project 3",
        description: "A dynamic web application that allows users to add and delete author and book names, providing a simple interface for managing book collections.",
        links: {
            site: "https://ftn1314.github.io/weather-app/",
            gitHub: "https://github.com/ftn1314/weather-app"
        }
    },
    {
        img: project4,
        title: "Project 4",
        description: "A real-time weather app that delivers accurate forecasts and weather conditions based on user location, with a clean, responsive design.",
        links: {
            site: "https://ftn1314.github.io/Mybooks/",
            gitHub: "https://github.com/ftn1314/Mybooks"
        }
    },
    {
        img: project5,
        title: "Project 5",
        description: "A sleek and modern product landing page designed to showcase features, benefits, and calls-to-action for driving conversions.",
        links: {
            site: "https://ftn1314.github.io/product-landing/",
            gitHub: "https://github.com/ftn1314/product-landing"
        }
    },
    {
        img: project6,
        title: "Project 6",
        description: "A sleek and modern product landing page designed to showcase features, benefits, and calls-to-action for driving conversions.",
        links: {
            site: "https://ftn1314.github.io/homecare-website/",
            gitHub: "https://github.com/ftn1314/homecare-website"
        }
    },
]

const ProjectCard = ({ project }) => (
    <div className='glass p-6 border-2 rounded-lg   '>
        <div className='w-full h-64'>
            <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg mb-4' />
        </div>
        <h3 className='text-lg font-semibold text-gray-200'>{project.title}</h3>
        <p className='text-gray-200 my-4'>{project.description}</p>
        <div className='flex space-x-4'>
            <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                View Site
            </a>
            <a href={project.links.gitHub} className='px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300'>
                <AiFillGithub />
            </a>
        </div>
    </div>
);

const Portfolio = () => (
    <div className='relative max-w-[1200px] mx-auto p-6 md:my-20 grid gap-8 grid-cols-1 md:grid-cols-2' id='portfolio'>
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>
);


export default Portfolio