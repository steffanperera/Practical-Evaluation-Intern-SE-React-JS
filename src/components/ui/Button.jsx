import React from "react";
import classes from "./Button.module.css";

const Button = ({ id, addToCart }) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    addToCart(e.target.id);
  };

  return (
    <div className={classes.item_button}>
      <button id={id} className={classes.main_button} type="button" onClick={onClickHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default Button;
