import React from "react";
import { Link } from "react-router-dom";
import styleObj from "./menu.module.scss";
import Button from "@material-ui/core/Button";

function Menu() {
  const menuItems = [
    {
      id: "Start",
      title: "Start game",
      listener: () => {
        //go();
        // showCover();
      },
    },
    { id: "Settings", title: "Settings" },
    { id: "About", title: "About" },
  ];
  //console.log(styleObj)
  return (
    <section className={`${styleObj.menu} ${styleObj.menu_shown}`}>
      {menuItems.map((item) => {
        return <MenuItem props={item} key={item.id} />;
      })}
    </section>
  );
}

function MenuItem({ props }) {
  return (
    <Link to={props.id}>
      {/* <div id={props.id} onClick={props.listener}>
        {props.title}
      </div> */}
      <Button
        id={props.id}
        onClick={props.listener}
        variant="contained"
        color="secondary"
      >
        {props.title}
      </Button>
    </Link>
  );
}

export default Menu;
