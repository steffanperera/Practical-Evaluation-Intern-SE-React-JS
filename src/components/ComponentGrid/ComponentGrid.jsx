import React from "react";
import classes from "./ComponentGrid.module.css";
import GridItem from "./GridItem";
import TopBar from "./TopBar";

const ComponentGrid = ({ productItems }) => {
  return (
    <div className={classes.main_container}>
      <TopBar />
      <div className={classes.item_container}>
        {productItems.map((productiItem) => (
          <GridItem key={productiItem.id} itemDetails={productiItem} />
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
