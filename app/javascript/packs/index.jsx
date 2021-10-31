import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
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
      <h1>Hello from React!</h1>
      { projects.map((project)=> {
          return(
            <div key={project.id}>
              <div>{project.title}</div>
              <div>{project.description}</div>
              <div>{project.createdAt}</div>
            </div>
          )
      })}
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('div')),
  )
})
