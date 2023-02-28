
import './Header.css'; // import the CSS file


const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">Contact Manager</div>
      <div className="search-container">
        <input type="text" placeholder="Search By Email" />
        <button>Search</button>
      </div>
      <div className="sidebar">
        <image src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-64.png" className="Logo" alt="Logo"/>
        <h1>username</h1>
      </div>
    </div>
  );
};

export default Header;