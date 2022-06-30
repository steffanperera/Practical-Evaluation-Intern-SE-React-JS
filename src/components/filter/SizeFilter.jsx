import React from "react";
import classes from "./SizeFilter.module.css";

const SizeFilter = () => {
  return (
    <div className={classes.filter_container}>
      <title>Sizes</title>
      <div className={classes.button_group}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default SizeFilter;
