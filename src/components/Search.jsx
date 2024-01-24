import { forwardRef } from "react";
import "../styles/Search.scss";

const Search = forwardRef(({ type, inputId, handleInputChange }, ref) => {
  return (
    <div className="search-input-container">
      <input
        type={type}
        id={inputId}
        placeholder="Search..."
        onChange={handleInputChange}
        className="search-input"
        ref={ref}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="search-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
});

export default Search;
