import React, { useState, useEffect } from 'react';
import ProjectDetail from "./ProjectDetail";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("api/v1/projects/index");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      setProjects(responseData);
    }

    fetchProjects();

  }, []);

  return (
    <div>
      <h1>Hello from Projects</h1>
        {projects.map((project)=> (
          <ProjectDetail key="project.id" project={project}/>
        ))}
    </div>
  )
}

export default Projects;