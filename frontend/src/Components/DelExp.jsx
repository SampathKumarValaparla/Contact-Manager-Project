import { useState } from "react";
import "../Styles/DelExp.css";
import { MdDelete } from "react-icons/md";
import { BiImport, BiExport } from "react-icons/bi";
import Import from "./Import";
import Delete from "./Delete";
import Importsuccess from "./Importsuccess";
import Deletesuccess from "./Deletesuccess";

function DelExp({ deleteData, setDeleteData, getData }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  return (
    <div className="delexp">
      {showImport ? (
        <Import
          setShowImport={setShowImport}
          setImportSuccess={setImportSuccess}
        />
      ) : null}
      {showDelete ? (
        <Delete
          setShowDelete={setShowDelete}
          setDeleteSuccess={setDeleteSuccess}
          deleteData={deleteData}
          setDeleteData={setDeleteData}
        />
      ) : null}

      {importSuccess ? (
        <Importsuccess setImportSuccess={setImportSuccess} getData={getData} />
      ) : null}
      {deleteSuccess ? (
        <Deletesuccess setDeleteSuccess={setDeleteSuccess} getData={getData} />
      ) : null}

      <span className="filter">
        <select className="inputs">
          <option value="">Select Date</option>
        </select>
        <input
          className="inputs filter-input"
          type="text"
          placeholder="Filter"
        />
      </span>
      <span className="delexp-btns">
        <button
          className="delexp-btn"
          onClick={() => {
            setShowDelete(true);
          }}
        >
          <MdDelete />
          Delete
        </button>
        <button
          className="delexp-btn"
          onClick={() => {
            setShowImport(true);
          }}
        >
          <BiImport />
          Import
        </button>
        <button className="delexp-btn">
          <BiExport />
          Export
        </button>
      </span>
    </div>
  );
}

export default DelExp;
