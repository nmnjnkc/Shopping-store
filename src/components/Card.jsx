import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/shopping-cart-context";
import "../styles/Card.scss";


const Card = ({ product }) => {
  const navigate = useNavigate();

  const { addProductToCart } = useContext(CartContext);

  const handleProductClick = () => {
    navigate(`/product-details/${product?.id}`);
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    addProductToCart(product);
  };

  return (
    <div onClick={handleProductClick} className="card">
      <div className="info-wrapper">
        <div className="img-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="details-wrapper">
          <h2>{product?.title}</h2>
          <p>{product?.price} €</p>
        </div>
      </div>
      <button onClick={handleAddToCartClick}>Add to bag</button>
    </div>
  );
};

export default Card;
