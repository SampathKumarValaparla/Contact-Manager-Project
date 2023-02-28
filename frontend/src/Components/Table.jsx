import "../Styles/Table.css";
import { MdDelete, MdEdit } from "react-icons/md";

function Table() {
  const data = [
    {
      data: 1,
      Name: "Sampath",
      Designation: "Software Developer",
      Company: "10X",
      Email: "Sampath@gmail.com",
      Industry: "Software",
      Phone: 12345,
      Country: "INDIA",
    },
    {
      data: 2,
      Name: "Sampath",
      Designation: "Software Developer",
      Company: "CTS",
      Email: "SAm@gmail.com",
      Industry: "Software",
      Phone: 54321,
      Country: "US",
    },
    {
      data: 3,
      Name: "Sampath",
      Designation: "Software Developer",
      Company: "TCS",
      Email: "San@gmail.com",
      Industry: "Hardware",
      Phone: 56789,
      Country: "USSR",
    },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <div>
          <image src="https://img.icons8.com/nolan/1x/edit.png" />
        </div>

        <thead>
          <tr>
            <th>
              <input type="checkbox" />
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
            <tr key={data.id}>
              <td>
                <input type="checkbox" />
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
  );
}

export default Table;
