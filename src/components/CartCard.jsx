import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/shopping-cart-context";

const CartCard = ({ cartItem }) => {
  const { setCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product-details/${cartItem?.product.id}`);
  };

  const handleDeleteItem = (id, event) => {
    event.stopPropagation();
    setCart(cart?.filter((element) => id !== element.product.id));
  };

  const handleOption = (id, event) => {
    event.stopPropagation();

    let desiredQty = event.target.value;

    const productIndex = cart.findIndex(
      (cartItem) => cartItem?.product.id === id
    );

    setCart((prevState) =>
      prevState.map((item, index) => {
        if (index === productIndex) {
          return { ...item, qty: Number(desiredQty) };
        }
        return item;
      })
    );
  };

  return (
    <div key={cartItem?.product.id} className="cart-item">
      <div onClick={handleProductClick} className="cart-wrapper">
        <img src={cartItem?.product.image} alt="" />
        <div>
          <h3>{cartItem?.product.title}</h3>
          <button
            onClick={(event) => handleDeleteItem(cartItem?.product.id, event)}
          >
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>{" "}
            Remove item{cartItem?.qty > 1 ? "s" : ""}
          </button>
        </div>
      </div>
      <div className="cart-qty">
        <select onChange={(event) => handleOption(cartItem?.product.id, event)}>
          <option value={cartItem?.qty}>{cartItem?.qty}</option>
          {Array.from({ length: 10 }, (_, index) => {
            const optionValue = index + 1;
            return optionValue !== cartItem?.qty ? (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ) : null;
          })}
        </select>
        <p>{cartItem?.product.price * cartItem?.qty} €</p>
      </div>
    </div>
  );
};

export default CartCard;
