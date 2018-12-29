import React from "react";
import CartItem from "./cart-item";
import _ from "lodash";


const Cart = props => {
  return (
    <React.Fragment>
      <h4 className="cart__header">{props.selectedItemsArray.length === 0 || undefined ? "Cart Empty, go shop!" : "welcome to your cart"}</h4>
      <div className="cart">
        {_.sortBy(props.selectedItemsArray, i => +i.key).map((element) => {
          return <CartItem {...element}
            delete={props.delete}
            index={element.key}
          />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
