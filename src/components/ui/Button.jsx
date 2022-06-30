import React from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.item_button}>
      <button className={classes.main_button} type="button">
        Add to cart
      </button>
    </div>
  );
};

export default Button;
