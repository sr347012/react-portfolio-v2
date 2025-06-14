import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import js01 from "./../Assets/js01.png";
import js02 from "./../Assets/js02.png";
import js03 from "./../Assets/js03.png";
import ang01 from "./../Assets/ang01.png";
import ang02 from "./../Assets/ang02.png";
import ang03 from "./../Assets/ang04.png";
import rct01 from "./../Assets/rct01.png";
import rct02 from "./../Assets/rct02.png";
import rct03 from "./../Assets/rct03.png";
import nxt01 from "./../Assets/nxt01.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";

function Works() {
  const [clickedJS, setClickedJs] = useState(false);
  const [clickedReact, setClickedReact] = useState(false);
  const [clickedAngular, setClickedAngular] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);

  const [projects, setProjects] = useState([]);

  const [jsProjects, setJsProjects] = useState([
    {
      id: "01",
      name: "Holiday Calendar",
      description: "Test description 01",
      link: "https://js-holiday-calendar.vercel.app/",
      imgLink: js01,
    },
    {
      id: "02",
      name: "Malik Interiors",
      description: "An interior designer company",
      link: "https://malik-interiors.vercel.app/",
      imgLink: js02,
    },
    {
      id: "03",
      name: "My first portfolio",
      description: "My first portfolio",
      link: "https://sr347012.github.io/portfolio-V1",
      imgLink: js03,
    },
  ]);

  const [angProjects, setAngProjects] = useState([
    {
      id: "01",
      name: "Ezy Money",
      description: "An application for faster loans",
      link: "https://ezy-money.vercel.app/",
      imgLink: ang01,
    },
    {
      id: "02",
      name: "Fashionista",
      description: "An application for fashion designers",
      link: "https://angular-fashion-poc.vercel.app/",
      imgLink: ang02,
    },
    {
      id: "03",
      name: "Food recipe",
      description: "Cooking application",
      link: "https://angular-food-recipe.vercel.app/",
      imgLink: ang03,
    },
  ]);

  const [reactProjects, setReactProjects] = useState([
    {
      id: "01",
      name: "Food recipes",
      description: "Cooking application",
      link: "https://sr347012.github.io/react-food-recipe/",
      imgLink: rct01,
    },
    {
      id: "02",
      name: "Trichakra",
      description: "App made for three wheelers",
      link: "https://trichakra-jeufgbaca-sr347012.vercel.app/",
      imgLink: rct02,
    },
    {
      id: "03",
      name: "Cricket",
      description: "SNCC Academy",
      link: "https://react-cricket.vercel.app/",
      imgLink: rct03,
    },
  ]);

  const [mobProjects, setMobProjects] = useState([
    {
      id: "01",
      name: "Pre-kart",
      description: "An e-commerce website based on Next JS",
      link: "https://next-prekart.vercel.app",
      imgLink: nxt01,
    },
  ]);

  const updateClickedJS = () => {
    setClickedJs(!clickedJS);
    setClickedReact(false);
    setClickedAngular(false);
    setClickedOther(false);
    setProjects(jsProjects);
  };
  const updateClickedReact = () => {
    setClickedReact(!clickedReact);
    setClickedJs(false);
    setClickedAngular(false);
    setClickedOther(false);
    setProjects(reactProjects);
  };
  const updateClickedAngular = () => {
    setClickedAngular(!clickedAngular);
    setClickedJs(false);
    setClickedReact(false);
    setClickedOther(false);
    setProjects(angProjects);
  };
  const updateClickedOther = () => {
    setClickedOther(!clickedOther);
    setClickedJs(false);
    setClickedReact(false);
    setClickedAngular(false);
    setProjects(mobProjects);
  };

  return (
    <>
      <div>
        <h3 className="works-heading">Works</h3>
        <Box
          sx={{
            // border: '1px dashed #EF9166',
            // borderRadius: '20px',
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 3,
              p: 2,
              mb: "10%",
              width: 200,
              height: 320,
              animation: "tabanime infinite 10s linear",
              // rotate: '20deg',
              borderRadius: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#EF9166",
              // color: '#f47b03',
              fontSize: "24px",
              // border: '5px solid white',
              boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
            },
          }}
        >
          <Paper className="cs-pointer" onClick={updateClickedOther}>
            Next
          </Paper>
          <Paper className="cs-pointer" onClick={updateClickedReact}>
            React
          </Paper>
          <Paper className="cs-pointer" onClick={updateClickedAngular}>
            Angular
          </Paper>
          <Paper className="cs-pointer" onClick={updateClickedJS}>
            Javascript
          </Paper>
        </Box>

        <Box
          // width={100}
          sx={{
            // bgcolor: "#EF9166",
            color: "#f47b03",
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
            fontSize: "50px",
          }}
        >
          <Tooltip title="Expand to see the projects" placement="top">
            <ExpandMoreIcon
              className="cs-pointer"
              onClick={updateClickedOther}
            />
          </Tooltip>
        </Box>
      </div>
      {(clickedJS || clickedAngular || clickedReact || clickedOther) &&
        projects.map((project) => (
          <div className="open-js00" key={project.id}>
            <svg
              className="open-js"
              viewBox="0 0 300 200"
              width="300"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <rect x="0" y="0" width="300" height="200" fill="#000"></rect>
              <path
                d="M281 0L340 0L340 40L459 40L459 80L334 80L334 120L329 120L329 160L393 160L393 200L286 200L286 240L450 240L450 280L451 280L451 320L354 320L354 360L448 360L448 400L464 400L464 440L324 440L324 480L301 480L301 520L439 520L439 560L232 560L232 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z"
                fill="#ef9166"
              ></path>
              <path
                d="M104 0L66 0L66 40L192 40L192 80L128 80L128 120L143 120L143 160L262 160L262 200L220 200L220 240L167 240L167 280L211 280L211 320L302 320L302 360L132 360L132 400L151 400L151 440L128 440L128 480L221 480L221 520L57 520L57 560L80 560L80 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z"
                fill="#f7caca"
              ></path>
            </svg>
            <ul className="open-text">
              <li>{project.name}</li>
              <a href={project.link}>
                <img src={project.imgLink} width={350} height={200}></img>
              </a>
            </ul>
            <svg
              className="open-js-rev"
              viewBox="0 0 300 200"
              width="300"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <rect x="0" y="0" width="300" height="200" fill="#000"></rect>
              <path
                d="M281 0L340 0L340 40L459 40L459 80L334 80L334 120L329 120L329 160L393 160L393 200L286 200L286 240L450 240L450 280L451 280L451 320L354 320L354 360L448 360L448 400L464 400L464 440L324 440L324 480L301 480L301 520L439 520L439 560L232 560L232 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z"
                fill="#ef9166"
              ></path>
              <path
                d="M104 0L66 0L66 40L192 40L192 80L128 80L128 120L143 120L143 160L262 160L262 200L220 200L220 240L167 240L167 280L211 280L211 320L302 320L302 360L132 360L132 400L151 400L151 440L128 440L128 480L221 480L221 520L57 520L57 560L80 560L80 600L0 600L0 560L0 560L0 520L0 520L0 480L0 480L0 440L0 440L0 400L0 400L0 360L0 360L0 320L0 320L0 280L0 280L0 240L0 240L0 200L0 200L0 160L0 160L0 120L0 120L0 80L0 80L0 40L0 40L0 0L0 0Z"
                fill="#f7caca"
              ></path>
            </svg>
          </div>
        ))}
    </>
  );
}

export default Works;
