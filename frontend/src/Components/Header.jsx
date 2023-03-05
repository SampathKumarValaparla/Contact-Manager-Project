import { FaUserAlt } from "react-icons/fa";
import "../Styles/Header.css";
import { dataContext } from "./Contact";
import { useContext, useState } from "react";

const Header = () => {
  const [result, setResult] = useState([]);
  const { alldata, user, setSearchdata } = useContext(dataContext);

  const HandleInputChange = (e) => {
    if (e.target.value) {
      const regex = new RegExp(`^${e.target.value.toLowerCase()}`);
      let arr = alldata.filter((data) => {
        return regex.test(data.name.toLowerCase());
      });
      setResult(arr);
    } else {
      setResult([]);
      setSearchdata([]);
    }
  };

  return (
    <div className="header-container">
      <div className="logo-header">
        <div className="logo-text">Contact Manager</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="header-search"
          placeholder="Search By Name..."
          onChange={HandleInputChange}
        />
        <div className="search-result">
          {result.map((data, i) => {
            return (
              <span
                key={i}
                className="search-data"
                onClick={() => {
                  setSearchdata([data]);
                  setResult([]);
                }}
              >
                {data.name} - {data.email}
              </span>
            );
          })}
        </div>
      </div>
      <div className="sidebar">
        <FaUserAlt size={20} />
        <span className="header-name">{user.username}</span>
      </div>
    </div>
  );
};

export default Header;
