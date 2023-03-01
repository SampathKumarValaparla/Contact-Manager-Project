import Header from "./Header";
import Table from "./Table";
import { MdDashboard, MdContacts, MdLogout } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contacts">
      <Header />
      <div className="main">
        <div className="contacts-sidebar">
          <span className="side1">
            <button className="side-btn" title="Dashboard">
              <MdDashboard />
            </button>
            <button className="side-btn" title="Total Contacts">
              <MdContacts />
            </button>
          </span>
          <button className="side-btn side-logout" title="Logout">
            <MdLogout />
          </button>
        </div>
        <div className="contacts-body">
          <Table />
        </div>
      </div>
    </div>
  );
}
