import { MdDelete } from "react-icons/md";
import load from "../Assets/load.gif";
import { useState } from "react";

export default function Delete({
  setShowDelete,
  setDeleteSuccess,
  deleteData,
  deleteone,
  setDeleteone,
  setDeleteData,
}) {
  const [loading, setLoading] = useState(false);

  function deleteContact() {
    if (deleteData) {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const formdata = new FormData();
      formdata.append("data", JSON.stringify(deleteData));
      fetch("http://localhost:8080/contact/deletcontact", {
        method: "POST",
        body: formdata,
        headers: { Authorization: token },
      })
        .then((res) => res.json())
        .then(async () => {
          setShowDelete(false);
          setDeleteSuccess(true);
          setDeleteData([]);
          setLoading(false);
        });
    }
    if (deleteone) {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const formdata = new FormData();
      formdata.append("data", deleteone);
      fetch("http://localhost:8080/contact/deleteonecontact", {
        method: "POST",
        body: formdata,
        headers: { Authorization: token },
      })
        .then((res) => res.json())
        .then(() => {
          setShowDelete(false);
          setDeleteSuccess(true);
          setDeleteone("");
          setLoading(false);
        });
    }
  }
  return (
    <div className="popup-main">
      {loading ? (
        <div className="loading-div">
          <img src={load} className="loading" />
        </div>
      ) : null}
      <span className="popup-body">
        <MdDelete className="popup-icon" />
        <span className="popup-heading">Delete Contacts</span>
        {deleteData?.length != 0 || deleteone ? (
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
          {deleteData?.length != 0 || deleteone ? (
            <button className="popup-btn warn-btn-yes" onClick={deleteContact}>
              OK
            </button>
          ) : null}
        </span>
      </span>
    </div>
  );
}
