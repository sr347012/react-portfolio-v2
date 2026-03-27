import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, abstract) {
  return {
    name,
    abstract,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        {/* <TableCell align="right">{row.status}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" component="div">
                Abstract
              </Typography>
              <Typography>{row.abstract}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData(
    "Review on Badminton player hand-grip analysis using ego-centric vision",
    "Many works have already been carried out on computer vision based sports analytics, activities in egocentric vision to improve player performance. But, less is explored in terms of vision based kinematic analysis in badminton where shuttle trajectory is explored, angles are derived from features, and analysing biomechanics of the player first person vision cameras. This paper identifies a research gap in spatio-temporal kinematic analysis of the player which affects his/her performance in badminton using ego-centric vision specifically with head-mounted cameras. We reviewed different works carried out so far in badminton grip analysis, sensor based networks and third-person based analytic systems in sports, analysing the limits of each work. We conclude with scope for the future work in grip analysis, stroke recognition and shuttle angle derivation using sensor free networks in egocentric vision.",
  ),
  createData(
    "Determine the shuttle trajectory during air-practise in badminton using ego-centric vision",
    "Air practice in Badminton refers to hitting a shuttle in the air a certain number of times to improve eye contact. This is more like a warm-up exercise before going for a match. In this paper, we analyse the air practice samples and derive different angles of launches for the shuttle. We propose a novel method for constructing trajectories and then deriving angles from them. First, we start with an introduction about air practice in badminton, then we move on to related work among the lines of trajectory calculation. Later, we explain the process of data collection, and discuss the results in detail, to derive the angle of launch. Finally, we end the paper with a conclusion and scope for further research.",
  ),
  //   createData(
  //     "Determine the optimum angle of a valid serve during doubles in Badminton",
  //     "Draft",
  //   ),
];
export default function Publications() {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: "#EF9166" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Publications</TableCell>
            <TableCell />
            {/* <TableCell align="right">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
