import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Deletesuccess({ getData, setDeleteSuccess }) {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <BsFillCheckCircleFill className="popup-icon" />
        <span className="popup-heading">Deleted Contacts</span>
        <button
          className="popup-btn"
          onClick={() => {
            getData();
            setDeleteSuccess(false);
          }}
        >
          OK
        </button>
      </span>
    </div>
  );
}
