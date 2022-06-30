import React from "react";
import FilterButton from "./FilterButton";
import classes from "./SizeFilter.module.css";

const SizeFilter = () => {
  const filter = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  return (
    <div className={classes.filter_container}>
      <title>Sizes</title>
      <div className={classes.button_group}>
        {filter.map((filterItem) => (
          <FilterButton key={filterItem} value={filterItem} />
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
