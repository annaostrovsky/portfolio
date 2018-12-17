import React from "react";

const CartItem = props => {
  return (
    <div className="cart__item">
      <h3>{props.title}</h3>
      <img src={props.imageUrl} alt="Portfolio" />
      <div>{props.description}</div>
      <button
        className="fa fa-trash-o portfolio-element__icon"
        onClick={() => props.delete(props.index)}
      />
    </div>
  );
};

export default CartItem;
