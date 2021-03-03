import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Rslogo from "./rs_school_js.svg";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "relative",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  svg: {
    width: "100px",
    height: "30px",
    paddingTop: "10px",
  },

  footerauthor: {
    textDecoration: "none",
    color: "darkgreen",
    textShadow: "0 1px black",
    "&:hover": {
      color: "lawngreen",
      textShadow: "0 1px rgb(206, 252, 0)",
      textDecoration: "none",
    },
  },

  rslink: {
    marginRight: "30px",
    textDecoration: "none",
    color: "darkgreen",
    textShadow: " 0 1px black",
    "&:hover": {
      color: "lawngreen",
      textShadow: "0 1px rgb(206, 252, 0)",
      textDecoration: "none",
    },
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <div className="footerauthor">
        <p>
          <Link
            // onMouseEnter={toggleHover}
            // onMouseLeave={toggleHover}
            className={classes.footerauthor}
            href="https://github.com/chexovpert"
          >
            Сhexovpert
          </Link>
        </p>
      </div>
      <div className={classes.svg}>
        <img src={Rslogo}></img>
      </div>
      <p>
        <Link
          // onMouseEnter={toggleHover}
          // onMouseLeave={toggleHover}
          className={classes.rslink}
          href="https://rs.school/js/"
        >
          RS.School
        </Link>
      </p>
    </BottomNavigation>
  );
}
