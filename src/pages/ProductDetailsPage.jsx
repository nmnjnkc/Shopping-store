import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../store/shopping-cart-context";
import { ProductsContext } from "../store/products-context";
import ToggleArrowIcon from "../components/ToggleArrowIcon";
import "../styles/Product.scss";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addProductToCart } = useContext(CartContext);

  const [showAccordion, setShowAccordion] = useState(false);

  const product = products?.find((product) => product?.id === Number(id));

  const handleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className="product-details">
      <div className="img-wrapper">
        <img src={product?.image} alt="" />
      </div>
      <div className="info-wrapper">
        <h2>{product?.title}</h2>
        <p className="price">{product?.price} €</p>
        <button onClick={() => addProductToCart(product)}>Add to bag</button>
        <div onClick={handleAccordion} className="accordion">
          <div>
            <p>Details</p>
            <ToggleArrowIcon toggleIcon={showAccordion} />
          </div>
          {showAccordion ? <p>{product?.description}</p> : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
