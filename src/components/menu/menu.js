import React from "react";
import { Link } from "react-router-dom";
import styleObj from "./menu.module.scss";

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
      <div id={props.id} onClick={props.listener}>
        {props.title}
      </div>
    </Link>
  );
}

export default Menu;
