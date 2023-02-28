import { MdDelete } from "react-icons/md";

export default function Delete() {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <MdDelete className="popup-icon" />
        <span className="popup-heading">Delete Contacts</span>
        <span className="popup-msg">Sure you want to delete the contacts?</span>
        <span className="popup-warn">
          <button className="popup-btn" onClick={() => {}}>
            Cancel
          </button>
          <button className="popup-btn warn-btn-yes" onClick={() => {}}>
            OK
          </button>
        </span>
      </span>
    </div>
  );
}
