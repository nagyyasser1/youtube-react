/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const SearchBar = ({ setSearchText }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Navbar__search-container">
        <input type="text" placeholder="Search..." ref={inputRef} />
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#d64343" }}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default SearchBar;
