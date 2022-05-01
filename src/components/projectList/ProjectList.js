import React from 'react';
import Project from '../project/Project'
import './projectList.css'

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
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList
