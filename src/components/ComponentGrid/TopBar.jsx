import React from "react";
import classes from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={classes.topbar_container}>
      <div className={classes.product_count}>
        <p>17 products</p>
      </div>

      <div className={classes.dropdown}>
        <p className={classes.order_by}>oder by</p>
        <select className={classes.selecter} name="size" id="size">
          <option value="Color">Color</option>
          <option value="Size">Size</option>
          <option value="Brand">Brand</option>
          <option value="Price">Price</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
