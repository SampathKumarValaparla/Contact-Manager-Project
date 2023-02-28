import { AiFillFileAdd } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import papa from "papaparse";

export default function Import({ setShowImport, setImportSuccess }) {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setMessage("");
      if (acceptedFiles[0].type === "text/csv") {
        setFile(acceptedFiles[0]);
        papa.parse(acceptedFiles[0], {
          header: true,
          complete: (res) => setData(res.data),
        });
        //fetch.then(()=>{
        // setShowImport(false);
        // setImportSuccess(true);
        // })
      } else {
        setMessage("Please add a CSV file");
        setFile(null);
      }
    },
    multiple: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="popup-main">
      <span className="popup-body">
        <AiFillFileAdd className="popup-icon" />
        <span className="popup-heading">Import file</span>

        {/* <label htmlFor="file" className="popup-drag">Click to add CSV file</label>
          <input id="file" type="file" accept=".csv" hidden /> */}

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
