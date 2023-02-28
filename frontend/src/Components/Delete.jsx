import { MdDelete } from "react-icons/md";

export default function Delete({ setShowDelete, setDeleteSuccess }) {
  function deleteContact() {
    // fetch.then(() => {
    //   setShowDelete(false);
    //   setDeleteSuccess(true);
    // });
    setShowDelete(false);
    setDeleteSuccess(true);
  }
  return (
    <div className="popup-main">
      <span className="popup-body">
        <MdDelete className="popup-icon" />
        <span className="popup-heading">Delete Contacts</span>
        <span className="popup-msg">Sure you want to delete the contacts?</span>
        <span className="popup-warn">
          <button
            className="popup-btn"
            onClick={() => {
              setShowDelete(false);
            }}
          >
            Cancel
          </button>
          <button className="popup-btn warn-btn-yes" onClick={deleteContact}>
            OK
          </button>
        </span>
      </span>
    </div>
  );
}
