import React from "react";
import classes from "./ShoppingCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ({ cartItems, onCartRemove }) => {
  console.log(cartItems);

  const onClickHandler = (e) => {
    e.preventDefault();
    onCartRemove(e.target.id);
  };

  const onCloseCartHandler = (e) => {
    e.preventDefault();
    console.log("ehe");
    document.getElementById("cartContainer").style.width = "0vw";
  };

  return (
    <div className={classes.cart_container} id="cartContainer">
      <button className={classes.remove_button} onClick={onCloseCartHandler}>
        <FontAwesomeIcon icon={faXmark} size="lg" color="white" />
      </button>
      <h2 className={classes.shopping_cart_title}>Shopping Cart</h2>
      {cartItems.map((cartItem, index) => (
        <div className={classes.cart_item} key={index}>
          <div className={classes.cart_image}>
            <img src={cartItem.details.image} />
          </div>
          <div className={classes.cart_details}>
            <div className={classes.cart_name_quantity}>
              <p className={classes.cart_item_name}>{cartItem.name}</p>
              <p className={classes.cart_item_quantity}>1</p>
            </div>
            <div>
              <p className={classes.cart_item_price}>{cartItem.details.price}</p>
              <button className={classes.remove_button} id={cartItem.id} onClick={onClickHandler}>
                <FontAwesomeIcon icon={faXmark} size="lg" color="white" id={cartItem.id} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
