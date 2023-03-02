import Header from "./Header";
import Table from "./Table";
import { MdDashboard, MdContacts, MdLogout } from "react-icons/md";
import { createContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import Design from "./Design";

export const dataContext = createContext();

export default function Contact() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [alldata, setAlldata] = useState([]);
  const [searchdata, setSearchdata] = useState([]);

  const value = {
    data,
    setData,
    alldata,
    setAlldata,
    user,
    searchdata,
    setSearchdata,
  };

  const [dash, setDash] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:8080/contact/finduser", {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data.data);
  //     });
  // },[]);

  return (
    <dataContext.Provider value={value}>
      {!sessionStorage.getItem("token") ? (
        <div className="contacts">
          <Header />
          <div className="main">
            <div className="contacts-sidebar">
              <span className="side1">
                <button
                  className={dash ? "side-btn selected" : "side-btn"}
                  title="Dashboard"
                  onClick={() => setDash(true)}
                >
                  <MdDashboard />
                </button>
                <button
                  className={dash ? "side-btn" : "side-btn selected"}
                  title="Total Contacts"
                  onClick={() => setDash(false)}
                >
                  <MdContacts />
                </button>
              </span>
              <button
                className="side-btn side-logout"
                title="Logout"
                onClick={() => {
                  sessionStorage.setItem("token", "");
                  navigate("/");
                }}
              >
                <MdLogout />
              </button>
            </div>
            <div className="contacts-body">
              {dash ? <Dashboard /> : <Table />}
            </div>
          </div>
        </div>
      ) : (
          <div className="nopage-main">
            <Design />
            <div className="nopage">
              <span>Session expired</span>
              <span className="nopage-desc">Please login again</span>
              <button className="btn session-btn" onClick={() => navigate("/")}>
                Go to login
              </button>
            </div>
          </div>
      )}
    </dataContext.Provider>
  );
}
