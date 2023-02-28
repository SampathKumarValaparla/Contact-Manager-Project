import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Importsuccess() {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <BsFillCheckCircleFill className="popup-icon" />
        <span className="popup-heading">Import Complete</span>
        <span className="popup-msg">CSV file is uploaded</span>
        <button className="popup-btn" onClick={() => {}}>
          OK
        </button>
      </span>
    </div>
  );
}
