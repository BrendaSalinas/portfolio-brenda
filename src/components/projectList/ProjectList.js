import React from 'react';
import Project from '../project/Project'
import './projectList.css'
import {projects} from '../../data.js'

const ProjectList = () => {
    return (
        <div className='project'>
            <div className='project-texts'>
                <h1 className='project-title'>My Projects</h1>
                <p className='project-desc'>
                    Checkout my portfolio
                </p>
            </div>
            <div className='project-list'>
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList
