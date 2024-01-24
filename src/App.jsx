import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./styles/Styles.scss";
import LoadingPage from "./pages/LoadingPage";
import BadServerPage from "./pages/BadServerPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import { CartContext } from "./store/shopping-cart-context";
import { ProductsContext } from "./store/products-context";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProductToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem?.product.id === product.id
    );

    if (existingProductIndex === -1) {
      setCart((prevState) => [
        ...prevState,
        { product: product, qty: Number(1) },
      ]);
    } else {
      setCart((prevState) =>
        prevState.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, qty: Number(item.qty + 1) };
          }
          return item;
        })
      );
    }
  };

  const cartValue = {
    cart: cart,
    setCart: setCart,
    addProductToCart: handleAddProductToCart,
  };

  const productsValue = {
    products: products,
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <BadServerPage />;
  }

  return (
    <CartContext.Provider value={cartValue}>
      <ProductsContext.Provider value={productsValue}>
        <NavBar setSearchValue={setSearchValue} cart={cart} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage searchValue={searchValue} />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
