import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/shopping-cart-context";

const CartTotal = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  let delivery = 0;
  let total = 0;
  let subtotal = 0;

  subtotal = cart?.reduce((total, cartItem) => {
    return (total += cartItem?.product.price * cartItem?.qty);
  }, 0);

  if (subtotal < 25) {
    delivery = 5.95;
  } else {
    delivery = 0;
  }

  total = subtotal + delivery;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-total">
      <h2>Total</h2>
      <p>
        <span>Subtotal </span>
        <span>{subtotal.toFixed(2)} €</span>{" "}
      </p>
      <p>
        <span>Delivery </span>
        <span>{delivery.toFixed(2)} €</span>{" "}
      </p>
      <p className="total">
        <span>Total (VAT included) </span>
        <span>{total.toFixed(2)} €</span>{" "}
      </p>
      <button onClick={handleCheckout}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartTotal;
