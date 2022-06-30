import React from "react";
import Button from "../ui/Button";
import classes from "./GridItem.module.css";

const GridItem = ({ itemDetails }) => {
  const imgURL = itemDetails.details.image;

  console.log(imgURL);

  return (
    <div className={classes.item}>
      <div className={classes.div_one}>
        <img
          src={itemDetails.details.image}
          onError="this.onerror=null; this.src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80';"
        />
        <p className={classes.tag}>{itemDetails.details.tag}</p>
      </div>

      <div className={classes.div_two}>
        <p className={classes.item_name}>{itemDetails.name}</p>
        <p className={classes.item_price}>{itemDetails.details.price}</p>
        <p className={classes.item_details}>{itemDetails.details.size}</p>
        <p className={classes.item_details}>{itemDetails.details.type}</p>
        <Button />
      </div>
    </div>
  );
};

export default GridItem;
