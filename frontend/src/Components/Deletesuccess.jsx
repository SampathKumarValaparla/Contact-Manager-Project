import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Deletesuccess({ setDeleteSuccess, setDeleteData }) {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <BsFillCheckCircleFill className="popup-icon" />
        <span className="popup-heading">Deleted Contacts</span>
        <button
          className="popup-btn"
          onClick={() => {
            setDeleteSuccess(false);
            setDeleteData([]);
          }}
        >
          OK
        </button>
      </span>
    </div>
  );
}
