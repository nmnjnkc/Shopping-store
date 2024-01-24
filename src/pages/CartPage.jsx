import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import CartTotal from "../components/CartTotal";
import "../styles/Cart.scss";
import CartEmpty from "../components/CartEmpty";
import { bagTotalQty } from "../utils/bagQty";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const bagQty = bagTotalQty(cart);

  return (
    <>
      {cart?.length > 0 ? (
        <div className="cart">
          <div className="cart-items">
            <h2>
              Your bag ({bagQty} item{bagQty > 1 ? "s" : ""})
            </h2>
            {cart?.map((cartItem, key) => {
              return <CartCard cartItem={cartItem} key={key} />;
            })}
          </div>
          <CartTotal />
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default CartPage;
