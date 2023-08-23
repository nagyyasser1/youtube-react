/* eslint-disable react/prop-types */
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./Navbar.css";

const Header = ({ setSearchText }) => {
  return (
    <header>
      <Logo />
      <SearchBar setSearchText={setSearchText} />
    </header>
  );
};

export default Header;
