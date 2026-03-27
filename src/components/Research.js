import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import Publications from "./Publications";

function Research() {
  const egoText =
    "Egocentric vision often called as First person vision is a part of computer vision, where a wearer wears a camera and the video feed is recorded for analysis . Examples include convergence or divergence of groups, identification of land terrain/hill etc.,";
  const badText =
    "Badminton is one of the racquet sports where the shuttle as light as 5 gms can travel upto 420 km/hr during a smash. It can be played both singles and doubles. People say that inorder to play a perfect shot, mind, hand and feet should move in coordination.";
  const gripText =
    "There are two types of grips in Badminton. Forehand grip - if the shuttle is coming towards the foreside (racquet arm) of the body, its called forehand grip. backhand grip - if a shuttle is coming towards the opposite side of racquet arm, those are played with backhand grip.";

  const toolProps = {
    tooltip: {
      sx: {
        backgroundColor: "#EF9166", // Change to your desired color
        color: "black", // Change text color if needed
        boxShadow: "1px 1px 3px 2px white",
      },
    },
  };
  return (
    <>
      <div className="history-heading">Research</div>
      <Typography sx={{ color: "#EF9166",border:"1px white solid", p:2, mb: 2 }}>
        My research aims to combine the below elements and form a unique
        system which can help players and coaches improve their techniques.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            mb: "50px",
            width: 200,
            height: 150,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            // boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          },
        }}
      >
        <Tooltip title={egoText} arrow slotProps={toolProps}>
          <Paper
            className="cs-pointer"
            sx={{
              bgcolor: "#EF9166",
              boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
            }}
          >
            Egocentric vision
          </Paper>
        </Tooltip>
        <Tooltip title={badText} arrow slotProps={toolProps}>
          <Paper
            className="cs-pointer"
            sx={{
              bgcolor: "#EF9166",
              boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
            }}
          >
            Badminton
          </Paper>
        </Tooltip>
        <Tooltip title={gripText} arrow slotProps={toolProps}>
          <Paper
            className="cs-pointer"
            sx={{
              bgcolor: "#EF9166",
              boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
            }}
          >
            Grip Dynamics
          </Paper>
        </Tooltip>
      </Box>
      <Box>
        <Publications />
      </Box>
    </>
  );
}

export default Research;
