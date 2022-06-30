import React from "react";
import FilterButton from "./FilterButton";
import classes from "./SizeFilter.module.css";

const SizeFilter = ({ onFilterSelect }) => {
  const filter = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  const onFilterButtonClickHandler = (targeValue) => {
    onFilterSelect(targeValue);
  };

  return (
    <div className={classes.filter_container}>
      <title>Sizes</title>
      <div className={classes.button_group}>
        <h4>Sizes</h4>
        {filter.map((filterItem) => (
          <FilterButton
            key={filterItem}
            value={filterItem}
            onFilterButtonClick={onFilterButtonClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
