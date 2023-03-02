import { AiFillFileAdd } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import papa from "papaparse";
import load from "../Assets/load.gif";

export default function Import({ setShowImport, setImportSuccess, getData }) {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setMessage("");
      if (acceptedFiles[0].type === "text/csv") {
        setFile(acceptedFiles[0]);
        papa.parse(acceptedFiles[0], {
          header: true,
          complete: (res) => {
            setData(res.data);
            setLoading(true);
          },
        });
      } else {
        setMessage("Please add a CSV file");
        setFile(null);
      }
    },
    multiple: false,
  });

  useEffect(() => {
    if (data.length != 0) {
      const token = sessionStorage.getItem("token");
      const formdata = new FormData();
      formdata.append("data", JSON.stringify(data));
      fetch("http://localhost:8080/contact/addcontact", {
        method: "POST",
        body: formdata,
        headers: { Authorization: token },
      })
        .then((res) => res.json())
        .then(() => {
          setShowImport(false);
          setLoading(false);
          setData([]);
          setImportSuccess(true);
        });
    }
  }, [data]);

  return (
    <div className="popup-main">
      {loading ? (
        <div className="loading-div">
          <img src={load} className="loading" />
        </div>
      ) : null}
      <span className="popup-body">
        <AiFillFileAdd className="popup-icon" />
        <span className="popup-heading">Import file</span>
        <div {...getRootProps({})}>
          <input {...getInputProps()} />
          <div className="popup-drag">
            <p>Drag and drop CSV files here or click to select CSV files</p>
            {file ? <p style={{ color: "green" }}>{file.name}</p> : null}
            {message ? <p style={{ color: "red" }}>{message}</p> : null}
          </div>
        </div>

        <button
          className="popup-btn"
          onClick={() => {
            setShowImport(false);
          }}
        >
          Cancel
        </button>
      </span>
    </div>
  );
}
