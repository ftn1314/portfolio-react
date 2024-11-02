import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
    return (
        <div className='glass p-6 w-full border-2 max-w-[600px]'>
            <div className='w-full h-80'>
                <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg mb-4' />
            </div>

            <p className='text-gray-200 my-4'>
                {project.description}
            </p>
            <div className='flex space-x-4'>
                <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'> View Site</a>
                <a href={project.links.gitHub} className='px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300'> <AiFillGithub /></a>
            </div>
        </div>
    );
};

export default ProjectCard;
