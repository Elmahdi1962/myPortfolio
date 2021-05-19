import React from 'react'
import './styles/Projects.css'
import { projects } from './projectsData'

function Projects() {
   
    return (
        <section id="projects-section">
            <div id="projects-container">
                {projects.map(project=>{
                    return(
                        <div className="projects" key={project.title}>
                            <img src={project.imgUrl} alt="not displayed" />
                            <h5><a href={project.link} target="_blank">{project.title}</a></h5>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


export default Projects;