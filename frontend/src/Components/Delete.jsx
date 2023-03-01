import { MdDelete } from "react-icons/md";

export default function Delete({
  setShowDelete,
  setDeleteSuccess,
  deleteData,
}) {
  function deleteContact() {
    const token = sessionStorage.getItem("token");
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(deleteData));
    fetch("http://localhost:8080/contact/deletcontact", {
      method: "POST",
      body: formdata,
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(() => {
        setShowDelete(false);
        setDeleteSuccess(true);
      });
  }
  return (
    <div className="popup-main">
      <span className="popup-body">
        <MdDelete className="popup-icon" />
        <span className="popup-heading">Delete Contacts</span>
        {deleteData.length != 0 ? (
          <span className="popup-msg">
            Sure you want to delete the contacts?
          </span>
        ) : (
          <span className="popup-msg" style={{ color: "red" }}>
            No selected data to delete
          </span>
        )}
        <span className="popup-warn">
          <button
            className="popup-btn"
            onClick={() => {
              setShowDelete(false);
            }}
          >
            Cancel
          </button>
          {deleteData.length != 0 ? (
            <button className="popup-btn warn-btn-yes" onClick={deleteContact}>
              OK
            </button>
          ) : null}
        </span>
      </span>
    </div>
  );
}
