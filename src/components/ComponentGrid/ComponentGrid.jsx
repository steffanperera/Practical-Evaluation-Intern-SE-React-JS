import React from "react";
import classes from "./ComponentGrid.module.css";
import GridItem from "./GridItem";

const ComponentGrid = () => {
  return (
    <>
      <div>
        <div>
          <p>17 products</p>
        </div>
        <div>
          <p>oder by</p>
        </div>
        <div>
          <select>
            <option></option>
          </select>
        </div>
      </div>
      <div className={classes.item_container}>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </>
  );
};

export default ComponentGrid;
