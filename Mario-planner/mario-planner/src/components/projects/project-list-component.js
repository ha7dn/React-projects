import React from 'react';
import ProjectSummary from './project-summary-component';

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            {projects && projects.map(project => { // && comprobation whether there are projects
                return(
                    <ProjectSummary project={project} key={project.id}/>
                );
            })}
        </div>
    )
}

export default ProjectList;