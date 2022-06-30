import React from "react";
import classes from "./ComponentGrid.module.css";
import GridItem from "./GridItem";
import TopBar from "./TopBar";

const ComponentGrid = ({ productItems, count, onClickAddToCart }) => {
  const addToCartPressHandler = (itemId) => {
    onClickAddToCart(itemId);
  };

  return (
    <div className={classes.main_container}>
      <TopBar productCount={count} />
      <div className={classes.item_container}>
        {productItems.map((productiItem) => (
          <GridItem
            key={productiItem.id}
            itemDetails={productiItem}
            addToCartPress={addToCartPressHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
