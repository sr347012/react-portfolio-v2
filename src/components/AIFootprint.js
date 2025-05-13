import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CommuteIcon from "@mui/icons-material/Commute";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function AIFootprint() {
  return (
    <>
      <div className="history-heading">AI Footprint</div>
      <div className="AI-div">
        <div className="AI-div-heading">Certifications</div>
        <div className="AI-flex">
          <div className="AI-div-pic-pmle"></div>
          <div className="AI-div-details">
            <li>Certified as Google cloud machine learning Engineer</li>
          </div>
        </div>
        <div className="AI-flex">
          <div className="AI-div-details">
            <li>Certified as Google cloud database Engineer</li>
          </div>
          <div className="AI-div-pic-pde"></div>
        </div>
      </div>
      <hr className="AI-hr"></hr>
      <div className="AI-div">
        <div className="AI-div-heading">Projects</div>
        <div className="AI-flex">
          <div className="AI-div-pic">
            <SmartToyIcon sx={{ color: "#ef9166", fontSize: 150 }} />
          </div>
          <div className="AI-div-details">
            <li>
              Tour boy :- A project based on dynamic selection of tourist places
              and virtual guidance based on Google gemini.
            </li>
          </div>
        </div>
        <div className="AI-flex">
          <div className="AI-div-details">
            <li>
              Loan assistant bot : A virtual bot for assisting in verification
              of loan documents using face recognition.
            </li>
          </div>
          <div className="AI-div-pic">
            <AssignmentIndIcon sx={{ color: "#ef9166", fontSize: 150 }} />
          </div>
        </div>
        <div className="AI-flex">
          <div className="AI-div-pic">
            <CommuteIcon sx={{ color: "#ef9166", fontSize: 150 }} />
          </div>
          <div className="AI-div-details">
            <li>
              Connected Cars : Driver behaviour analysis and introduction of
              facial authentication for connected cars using AWS.
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIFootprint;
