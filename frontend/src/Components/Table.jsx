import "../Styles/Table.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import DelExp from "./DelExp";
import Delete from "./Delete";
import Deletesuccess from "./Deletesuccess";
import { dataContext } from "./Contact";
//import Header from "./Header";

function Table() {
  const { data, setData, alldata, setAlldata, searchdata } =
    useContext(dataContext);

  const [checked, setChecked] = useState(false);
  const [deleteData, setDeleteData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteone, setDeleteone] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [page, setPage] = useState(1);

  function getData() {
    // const token = sessionStorage.getItem("token");
    fetch(`http://localhost:8080/contact?page=${page}&total=8`, {
      method: "GET",
      // headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setAlldata(data.alldata);
        setChecked(false);
      });
  }

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    if (deleteone) {
      setShowDelete(true);
    }
  }, [deleteone]);

  useEffect(() => {
    if (!checked) {
      setDeleteData([]);
    }
  },[checked])

  return (
    <>
      {showDelete ? (
        <Delete
          setShowDelete={setShowDelete}
          setDeleteSuccess={setDeleteSuccess}
          deleteone={deleteone}
          setDeleteone={setDeleteone}
          getData={getData}
        />
      ) : null}

      {deleteSuccess ? (
        <Deletesuccess setDeleteSuccess={setDeleteSuccess} getData={getData} />
      ) : null}

      <DelExp
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        getData={getData}
      />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={checked}
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
            {(searchdata.length != 0 ? searchdata : data)?.map((data) => {
              return (
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
                            (e) => e !== data._id
                          );
                          setDeleteData(deletevalues);
                        }
                      }}
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.designation}</td>
                  <td>{data.company}</td>
                  <td>{data.email}</td>
                  <td>{data.industry}</td>
                  <td>{data.phone}</td>
                  <td>{data.country}</td>
                  <td>
                    <span className="table-btns">
                      <MdEdit style={{ color: "#0884FF" }} />
                      <MdDelete
                        style={{ color: "#F81D1D" }}
                        onClick={() => setDeleteone(data._id)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="page-div">
        <div className={alldata.length == 0 ? "page-hidden" : "pagination"}>
          <button
            className="page-btn"
            onClick={() => setPage(page - 1)}
            disabled={page == 1 ? true : false}
          >
            {"<"}
          </button>
          <span className="page">{page}</span>
          <button
            className="page-btn"
            onClick={() => setPage(page + 1)}
            disabled={
              alldata.length < 8 || page == parseInt(alldata.length / 8) + 1
                ? true
                : false
            }
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;
