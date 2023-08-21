import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form>
      <div className="Navbar__search-container">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#d64343" }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
