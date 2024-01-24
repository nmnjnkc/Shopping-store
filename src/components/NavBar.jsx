import React, { useRef } from "react";
import shoppingLogo from "../assets/shopping-logo.jpg";
import "../styles/NavBar.scss";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { bagTotalQty } from "../utils/bagQty";

const NavBar = ({ setSearchValue, cart }) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleCart = () => {
    navigate("/cart");
  };

  const handleHomePage = () => {
    navigate("/");
  };

  const handleSearchInputChange = () => {
    setSearchValue(inputRef.current.value.trim());
  };

  const bagQty = bagTotalQty(cart);

  const handleContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="nav-wrapper">
      <header className="nav-header" onClick={handleContactPage}>
        Contact
      </header>
      <nav>
        <img
          onClick={handleHomePage}
          src={shoppingLogo}
          alt="shopping cart logo"
        />
        <Search
          type={"text"}
          inputId={"searchInput"}
          handleInputChange={handleSearchInputChange}
          ref={inputRef}
        />
        <div>
          <svg
            onClick={handleCart}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <div onClick={handleCart} className={bagQty ? "bag-qty" : "hide-qty"}>
            <p>{bagQty}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
