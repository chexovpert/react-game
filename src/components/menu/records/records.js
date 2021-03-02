import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useConfig } from "../../config-file/config";
import MenuTheme from "../../music/menutheme.mp3";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
}));

// function createData(number, score, date, time) {
//   return { number, score, date, time };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24,),
//   createData('Ice cream sandwich', 237, 9.0, 37 ),
//   createData('Eclair', 262, 16.0, 24 ),
//   createData('Cupcake', 305, 3.7, 67 ),
//   createData('Gingerbread', 356, 16.0, 49),
// ];

export default function DenseTable() {
  const classes = useStyles();
  const config = useConfig();
  config.trackHandler(MenuTheme);
  let rows = null;

  if ("records" in localStorage) {
    rows = JSON.parse(localStorage.records);
  }

  return (
    <TableContainer component={Paper} className={classes.paper}>
      {rows ? (
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Date and time</TableCell>
              {/* <TableCell align="right">Time</TableCell> */}
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index + 1}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.date} {row.time}</TableCell>
                {/* <TableCell align="right">{row.time}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No records for now</p>
      )}
      <Link to="/">
        <Button variant="contained" color="secondary">
          Menu
        </Button>
      </Link>
    </TableContainer>
  );
}
