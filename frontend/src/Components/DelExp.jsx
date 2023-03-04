import { useState, useContext, useEffect } from "react";
import "../Styles/DelExp.css";
import { MdDelete } from "react-icons/md";
import { BiImport, BiExport } from "react-icons/bi";
import Import from "./Import";
import Delete from "./Delete";
import Importsuccess from "./Importsuccess";
import Deletesuccess from "./Deletesuccess";
import { dataContext } from "./Contact";

function DelExp({ deleteData, setDeleteData, getData }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const { sort, setSort } = useContext(dataContext);

  useEffect(() => {
    getData();
  }, [sort]);

  return (
    <div className="delexp">
      {showImport ? (
        <Import
          setShowImport={setShowImport}
          setImportSuccess={setImportSuccess}
          showImport={showImport}
        />
      ) : null}
      {showDelete ? (
        <Delete
          setShowDelete={setShowDelete}
          setDeleteSuccess={setDeleteSuccess}
          deleteData={deleteData}
          setDeleteData={setDeleteData}
          showDelete={showDelete}
        />
      ) : null}

      {importSuccess ? (
        <Importsuccess setImportSuccess={setImportSuccess} getData={getData} />
      ) : null}
      {deleteSuccess ? (
        <Deletesuccess setDeleteSuccess={setDeleteSuccess} getData={getData} />
      ) : null}

      <span className="sort">
        <select
          className="inputs"
          onChange={(e) => setSort(e.target.value)}
          defaultValue="newfirst"
        >
          <option className="options" value="newfirst">
            Newest First
          </option>
          <option className="options" value="newlast">
            Newest Last
          </option>
          <option className="options" value="az">
            A-Z
          </option>
          <option className="options" value="za">
            Z-A
          </option>
          <option className="options" value="email">
            Email
          </option>
        </select>
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
