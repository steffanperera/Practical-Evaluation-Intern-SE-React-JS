import React from "react";
import Button from "../ui/Button";
import classes from "./GridItem.module.css";

const GridItem = ({ itemDetails, addToCartPress }) => {
  const addToCartHandler = (cartId) => {
    addToCartPress(cartId);
  };

  return (
    <div className={classes.item}>
      <div className={classes.div_one}>
        <img src={itemDetails.details.image} />
        <p className={classes.tag}>{itemDetails.details.tag}</p>
      </div>

      <div className={classes.div_two}>
        <p className={classes.item_name}>{itemDetails.name}</p>
        <div className={classes.divider}>
          <p>___</p>
        </div>
        <p className={classes.item_price}>{itemDetails.details.price}$</p>
        <p className={classes.item_details}>{itemDetails.details.size}</p>
        <p className={classes.item_details}>{itemDetails.details.type}</p>
        <Button id={itemDetails.id} addToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default GridItem;
