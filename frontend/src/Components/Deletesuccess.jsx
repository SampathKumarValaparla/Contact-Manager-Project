import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Deletesuccess() {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <BsFillCheckCircleFill className="popup-icon" />
        <span className="popup-heading">Deleted Contacts</span>
        <button className="popup-btn" onClick={() => {}}>
          OK
        </button>
      </span>
    </div>
  );
}
