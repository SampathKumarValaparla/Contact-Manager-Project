import "../Styles/Nopage.css";
import Design from "./Design";

export default function Nopage() {
  return (
    <div className="nopage-main">
      <Design />
      <div className="nopage">
        <span>404</span>
        <span>page not found</span>
      </div>
    </div>
  );
}
