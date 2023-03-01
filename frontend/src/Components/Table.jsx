import "../Styles/Table.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import DelExp from "./DelExp";

function Table() {
  const [checked, setChecked] = useState(false);
  const [deleteData, setDeleteData] = useState([]);
  const [data, setData] = useState([]);

  const getData = () => {
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:8080/contact/",{
      method: "GET",
      headers: { Authorization: token },
    }).then(res => res.json()).then(data=>{
      setData(data.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <DelExp deleteData={deleteData} setDeleteData={setDeleteData} />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onClick={(e) => {
                    if (e.target.checked) {
                      setChecked(true);
                      let arr = [];
                      data.forEach((e) => {
                        arr.push(e._id);
                      });
                      setDeleteData(arr);
                    } else {
                      setChecked(false);
                      setDeleteData([]);
                    }
                  }}
                />
              </th>
              <th>Name</th>
              <th>Designation</th>
              <th>Company</th>
              <th>Email</th>
              <th>Industry</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((data) => (
              <tr key={data._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={checked ? true : undefined}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDeleteData([...deleteData, data._id]);
                      } else {
                        let deletevalues = deleteData.filter(
                          (e) => e != data._id
                        );
                        setDeleteData(deletevalues);
                      }
                    }}
                  />
                </td>
                <td>{data.Name}</td>
                <td>{data.Designation}</td>
                <td>{data.Company}</td>
                <td>{data.Email}</td>
                <td>{data.Industry}</td>
                <td>{data.Phone}</td>
                <td>{data.Country}</td>
                <td>
                  <span className="table-btns">
                    <MdEdit style={{ color: "#0884FF" }} />
                    <MdDelete style={{ color: "#F81D1D" }} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
