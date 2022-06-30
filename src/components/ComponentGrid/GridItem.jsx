import React from "react";
import classes from "./GridItem.module.css";

const GridItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.div_one}>
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"></img>
        <p>tag</p>
      </div>

      <div className={classes.div_two}>
        <title>Item name</title>
        <p>Price</p>
        <p>9*jjj</p>
        {/* <button></button>       */}
      </div>
    </div>
  );
};

export default GridItem;
