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
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + project.imgUrl} alt="not displayed" />
                                <h5>{project.title}</h5>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


export default Projects;