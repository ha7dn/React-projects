import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex reprehenderit totam praesentium deserunt aliquid enim repellat nostrum doloribus quas!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by Samuel Haydn</div>
                    <div>August 28th 2020, 8 p.m.</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
