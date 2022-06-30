import React from "react";
import classes from "./FilterButton.module.css";

const FilterButton = ({ value, onFilterButtonClick }) => {
  const sizeClickHandler = (e) => {
    e.preventDefault();
    onFilterButtonClick(e.target.id);
  };

  return (
    <button id={value} onClick={sizeClickHandler} className={classes.filter_button}>
      {value}
    </button>
  );
};

export default FilterButton;
