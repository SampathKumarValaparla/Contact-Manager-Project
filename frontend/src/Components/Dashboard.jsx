import { dataContext } from "./Contact";
import { useContext } from "react";
import "../Styles/Dashboard.css";

export default function Dashboard() {
  const { alldata, user } = useContext(dataContext);

    return (
      <div className="dashboard">
        {/* <span className="dash-head">Dashboard</span>
        <span className="dash-logo">{user.username[0]}</span>
        <span className="dash-text">Name : {user.username}</span>
        <span className="dash-text">Email : {user.email}</span>
        <span className="dash-text">Total contacts : {alldata.length}</span> */}
        <span className="dash-head">Dashboard</span>
        <span className="dash-logo">U</span>
        <span className="dash-text">Name : username</span>
        <span className="dash-text">Email : mail@gmail.com</span>
        <span className="dash-text">Total contacts : {alldata.length}</span>
      </div>
    );
}
