import React from "react";
import classes from "./ComponentGrid.module.css";
import GridItem from "./GridItem";
import TopBar from "./TopBar";

const ComponentGrid = () => {
  return (
    <div className={classes.main_container}>
      <TopBar />
      <div className={classes.item_container}>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </div>
  );
};

export default ComponentGrid;
