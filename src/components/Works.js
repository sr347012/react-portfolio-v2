import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Works() {

  const [clickedJS, setClickedJs] = useState(false);
  const [clickedReact, setClickedReact] = useState(false);
  const [clickedAngular, setClickedAngular] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);

  const [projects, setProjects] = useState([]);

  const [jsProjects, setJsProjects] = useState([
    {id:"01", name:"JS Project 01", description:"Test description 01", link: "https://"},
    {id:"02", name:"JS Project 02", description:"Test description 02", link: "https://"},
    {id:"03", name:"JS Project 03", description:"Test description 03", link: "https://"},
  ]);

  const [angProjects, setAngProjects] = useState([
    {id:"01", name:"Angular Project 01", description:"Test description 01", link: "https://"},
    {id:"02", name:"Angular Project 02", description:"Test description 02", link: "https://"},
    {id:"03", name:"Angular Project 03", description:"Test description 03", link: "https://"},
  ]);

  const [reactProjects, setReactProjects] = useState([
    {id:"01", name:"React Project 01", description:"Test description 01", link: "https://"},
    {id:"02", name:"React Project 02", description:"Test description 02", link: "https://"},
    {id:"03", name:"React Project 03", description:"Test description 03", link: "https://"},
  ]);

  const [mobProjects, setMobProjects] = useState([
    {id:"01", name:"Mobile Project 01", description:"Test description 01", link: "https://"},
    {id:"02", name:"Monile Project 02", description:"Test description 02", link: "https://"},
    {id:"03", name:"Mobile Project 03", description:"Test description 03", link: "https://"},
  ]);

  const updateClickedJS = () => {
    setClickedJs(!clickedJS);
    setClickedReact(false);
    setClickedAngular(false);
    setClickedOther(false);
    setProjects(jsProjects);
  }
  const updateClickedReact = () => {
    setClickedReact(!clickedReact);
    setClickedJs(false);
    setClickedAngular(false);
    setClickedOther(false);
    setProjects(reactProjects);
  }
  const updateClickedAngular = () => {
    setClickedAngular(!clickedAngular);
    setClickedJs(false);
    setClickedReact(false);
    setClickedOther(false);
    setProjects(angProjects);
  }
  const updateClickedOther = () => {
    setClickedOther(!clickedOther);
    setClickedJs(false);
    setClickedReact(false);
    setClickedAngular(false);
    setProjects(mobProjects);
  }


  return (
    <>
    <div>
      <h3 className='works-heading'>Works</h3>
    <Box
      sx={{
        // border: '1px dashed #EF9166',
        // borderRadius: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          p: 2,
          width: 200,
          height: 320,
          rotate: '20deg',
          borderRadius: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#EF9166',
          // color: '#f47b03',
          fontSize: '24px',
          // border: '1px solid #f47b03',
          boxShadow: '2px 2px 2px 2px #EF9166'
          
        },
      }}
    >
      <Paper onClick={updateClickedJS} >Javascript</Paper>
      <Paper onClick={updateClickedReact} >React</Paper>
      <Paper onClick={updateClickedAngular} >Angular</Paper>
      <Paper onClick={updateClickedOther} >React Native</Paper>
    </Box>
    </div>
    {(clickedJS || clickedAngular || clickedReact || clickedOther) &&
    projects.map((project) => 
    (<div className='open-js00' key={project.id}>
      <svg className='open-js' viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="0" y="0" width="300" height="200" fill="#000"></rect>
        <path  d="M281 0L340 0L340 40L459 40L459 80L334 80L334 120L329 120L329 160L393 160L393 200L286 200L286 240L450 240L450 280L451 280L451 320L354 320L354 360L448 360L448 400L464 400L464 440L324 440L324 480L301 480L301 520L439 520L439 560L232 560L232 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z" fill="#ef9166"></path>
        <path  d="M104 0L66 0L66 40L192 40L192 80L128 80L128 120L143 120L143 160L262 160L262 200L220 200L220 240L167 240L167 280L211 280L211 320L302 320L302 360L132 360L132 400L151 400L151 440L128 440L128 480L221 480L221 520L57 520L57 560L80 560L80 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z" fill="#f7caca"></path>
      </svg>
      <ul className='open-text'>
        <li>{project.name}</li>
        <li>{project.description}</li>
        <li>{project.link}</li>
      </ul>
      <svg className='open-js-rev' viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="0" y="0" width="300" height="200" fill="#000"></rect>
        <path  d="M281 0L340 0L340 40L459 40L459 80L334 80L334 120L329 120L329 160L393 160L393 200L286 200L286 240L450 240L450 280L451 280L451 320L354 320L354 360L448 360L448 400L464 400L464 440L324 440L324 480L301 480L301 520L439 520L439 560L232 560L232 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z" fill="#ef9166"></path>
        <path  d="M104 0L66 0L66 40L192 40L192 80L128 80L128 120L143 120L143 160L262 160L262 200L220 200L220 240L167 240L167 280L211 280L211 320L302 320L302 360L132 360L132 400L151 400L151 440L128 440L128 480L221 480L221 520L57 520L57 560L80 560L80 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z" fill="#f7caca"></path>
      </svg>
    </div>))}
    </>
  )
}

export default Works
