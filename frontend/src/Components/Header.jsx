import { FaUserAlt } from "react-icons/fa";
import "../Styles/Header.css";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">Contact Manager</div>
      <div className="search-container">
        <input
          type="text"
          className="header-search"
          placeholder="Search By Email"
        />
        {/* <button className="header-btn">Search</button> */}
      </div>
      {/* <div className="header-side"> */}
        <div className="sidebar">
          <FaUserAlt size={15} />
          <span className="header-name">username</span>
        </div>
        {/* <button className="logout-btn"> */}
          {/* <BiLogOut /> */}
          {/* Logout */}
        {/* </button> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
