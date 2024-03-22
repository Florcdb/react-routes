
import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projects';
import { studies, experiences } from './resume';

function Home(){
  return (
    <>
    <h1>¡Bienvenido!</h1>
    <h2>Projects: </h2>
     {projects.map((project)=>(
      <ul>
    <li>
      <Link to ={`/project/${project.id}`}>
        <p>{project.name}</p> <br></br>
        <p>{project.description}</p><br></br>
        <img src={project.image} style={{maxWidth:100}}/> <br></br>
        <p>{project.url}</p></Link>
    </li>
    </ul>
     ) 
    )}
    <h2> Resumes: </h2> 
    <h3>Studies:</h3>
      {studies.map((study)=>(
        <ul>
          <li>
      <Link to={`/resume/${study.id}`}>
        {study.title} <br></br>
        {study.institution}<br></br>
        {study.date}<br></br>
      </Link>
      </li>
       </ul>
      ))}
        <h3>Experiences:</h3>
        {experiences.map((experience)=>(
          <ul>
            <li>
        <Link to={`/resume/${experience.id}`}>
          {experience.title} <br></br>
          {experience.company}<br></br>
          {experience.date}<br></br>
        </Link>
        </li>
         </ul>
      ))}
    </>
  )
}

export default Home;