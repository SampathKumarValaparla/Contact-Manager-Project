import { FaUserAlt } from "react-icons/fa";
import "../Styles/Header.css";
import { dataContext } from "./Contact";

const Header = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="header-container">
      <div className="logo">Contact Manager</div>
      <div className="search-container">
        <input
          type="text"
          className="header-search"
          placeholder="Search By Email..."
        />
      </div>
      <div className="sidebar">
        <FaUserAlt size={15} />
        <span className="header-name">username</span>
      </div>
    </div>
  );
};

export default Header;
