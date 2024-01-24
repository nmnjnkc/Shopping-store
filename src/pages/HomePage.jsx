import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../store/products-context";
import ToggleArrowIcon from "../components/ToggleArrowIcon";
import Card from "../components/Card";
import "../styles/HomePage.scss";


const HomePage = ({ searchValue }) => {
  const { products } = useContext(ProductsContext);
  const [showFilter, setShowFilter] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleToggleArrow = () => {
    setToggleArrow(!toggleArrow);
  };

  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  const sortProduct = (sortingOption) => {
    switch (sortingOption) {
      case "priceLowToHigh":
        setSortedProducts([...products]?.sort((a, b) => a.price - b.price));
        break;

      case "priceHighToLow":
        setSortedProducts([...products]?.sort((a, b) => b.price - a.price));
        break;

      default:
        setSortedProducts([...products]);
    }
  };

  useEffect(() => {
    setSortedProducts(products);
    sortProduct(selectedValue);
  }, [searchValue, products]);

  useEffect(() => {
    sortProduct(selectedValue);
  }, [selectedValue]);

  const searchedProducts = sortedProducts?.filter((product) =>
    product?.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="home-page-wrapper">
      <header>
        <div className="filter-container" onClick={handleFilter}>
          {" "}
          <p>{showFilter ? "Hide" : "Show"} filters</p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 filter-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <div className="sort-container">
          Sort by:
          <select onClick={handleToggleArrow} onChange={handleSelect}>
            <option value="feature">Feature</option>
            <option value="priceLowToHigh">Price: Low - High</option>
            <option value="priceHighToLow">Price: High - Low</option>
          </select>
          <ToggleArrowIcon className="toggle-arrow" toggleIcon={toggleArrow} />
        </div>
      </header>
      {searchedProducts.length > 0 && (
        <div className="card-layout">
          {searchedProducts?.map((product, key) => (
            <Card product={product} key={key} />
          ))}
        </div>
      )}
      {!searchedProducts.length && (
        <div className="no-products">
          Non of the products are matching your search criteria
        </div>
      )}
    </div>
  );
};

export default HomePage;
