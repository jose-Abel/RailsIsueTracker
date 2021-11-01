import React from 'react';

const ProjectDetail = ({project}) => {

  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
    </div>
  )
}

export default ProjectDetail;