import React, { useState, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import Confetti from "react-dom-confetti";
import "../styles/Checkout.scss";

const CheckoutPage = () => {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const { setCart } = useContext(CartContext);

  const handleClick = () => {
    setConfettiActive(true);

    setCart([]);

    setTimeout(() => {
      setConfettiActive(false);
    }, 500);
  };

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 270,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="pay-container">
      <button className="pay-bttn" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>{" "}
        Pay
      </button>
      <Confetti
        className="confetti"
        active={isConfettiActive}
        config={config}
      />
    </div>
  );
};

export default CheckoutPage;
