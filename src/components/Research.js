import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

function Research() {
  return (
    <>
      <div className="history-heading">Research</div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            mb: "50px",
            width: 150,
            height: 150,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            // boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          },
        }}
      >
        <Paper
          className="cs-pointer"
          sx={{
            bgcolor: "#EF9166",
            boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          }}
        >
          Egocentric vision
        </Paper>
        <AddIcon
          sx={{
            color: "#EF9166",
            // boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          }}
        />
        <Paper
          className="cs-pointer"
          sx={{
            bgcolor: "#EF9166",
            boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          }}
        >
          Badminton
        </Paper>
        <AddIcon
          sx={{
                      color: "#EF9166",
              fontSize: "10px"
          }}
        />
        <Paper
          className="cs-pointer"
          sx={{
            bgcolor: "#EF9166",
            boxShadow: "2px 3px 5px 3px white, -3px -1px 3px 3px #EF9166",
          }}
        >
          Grip Dynamics
        </Paper>
      </Box>
    </>
  );
}

export default Research;
