import React from "react";
import Tooltip from "@mui/material/Tooltip";

function Skills() {
  return (
    <div className="skill-parent">
      <div className="skill-circle">
        <div>
          <Tooltip title="React" placement="top">
            <div className="react"></div>
          </Tooltip>
          <Tooltip title="CSS">
            <div className="css"></div>
          </Tooltip>
          <Tooltip title="HTML">
            <div className="html"></div>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Redux" placement="top">
            <div className="redux"></div>
          </Tooltip>
          <Tooltip title="Javascript">
            <div className="javascript"></div>
          </Tooltip>
          <Tooltip title="Three JS">
            <div className="three"></div>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Next JS" placement="top">
            <div className="next"></div>
          </Tooltip>
          <Tooltip title="Material UI">
            <div className="mui"></div>
          </Tooltip>
          <Tooltip title="Node">
            <div className="node"></div>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Angular" placement="top">
            <div className="angular"></div>
          </Tooltip>
          <Tooltip title="Bootstrap">
            <div className="bootstrap"></div>
          </Tooltip>

          <Tooltip title="GraphQL">
            <div className="graphQl"></div>
          </Tooltip>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Skills;
