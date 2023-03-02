import { FaUserAlt } from "react-icons/fa";
import "../Styles/Header.css";
import { dataContext } from "./Contact";
import { useContext, useEffect, useState } from "react"; 
import axios from 'axios';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [result, setResult] = useState([]);
  const { alldata,user } = useContext(dataContext);

const HandleInputChange = (e) => {
  setSearchQuery(e.target.value)
}
useEffect(() => {
  const search = async () => {
    try{
      if(!searchQuery.trim()){
        setResult([])
        return
      }
      const res = await axios.get("https://some-random-api.ml/animal/bird",{params: {key:searchQuery} , limit:5})
      setResult(res.data.data)
      console.log(res);
  
    }catch(error){
      console.log(error);
    }
  }
  search()
},[searchQuery])



  return (
    <div className="header-container">
      <div className="logo">Contact Manager</div>
      <div className="search-container">
        <input
          type="text"
          className="header-search"
          placeholder="Search By Email..."
          onChange={HandleInputChange}
          value={searchQuery}
        />
      </div>
      <div className="sidebar">
        <FaUserAlt size={15} />
        <span className="header-name">username</span>
      </div>
      {result && result.length > 0 &&(
        <div>
          {result.map(image => {
            <div>
              <img src={image.imageUrl}/>
            </div>
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
