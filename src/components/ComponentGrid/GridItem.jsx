import React from "react";
import Button from "../ui/Button";
import classes from "./GridItem.module.css";

const GridItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.div_one}>
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"></img>
        <p className={classes.tag}>Free shipping</p>
      </div>

      <div className={classes.div_two}>
        <p className={classes.item_name}>Item name</p>
        <p className={classes.item_price}>Price</p>
        <p className={classes.item_details}>9*jjj</p>
        <Button />
      </div>
    </div>
  );
};

export default GridItem;
