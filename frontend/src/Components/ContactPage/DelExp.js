import  { useState } from 'react';
import "./DelExp.css"

function DelExp() {
  const [selectedDate, setSelectedDate] = useState('');
  const [filterText, setFilterText] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  }

  const handleDelete = () => {
    // Code to delete row goes here
  }

  const handleImport = () => {
    // Code to import data goes here
  }

  const handleExport = () => {
    // Code to export data goes here
  }

  return (
    <tr>
      <td className='TableRow'>
        <select className='DateSelect' value={selectedDate} onChange={handleDateChange}>
          <option value="">Select Date</option>
          <option value="2022-02-28">February 28, 2022</option>
          <option value="2022-03-01">March 1, 2022</option>
          <option value="2022-03-02">March 2, 2022</option>
        </select>
      </td>
      <td>
        <input className='FilterInput' type="text" value={filterText} onChange={handleFilterChange} placeholder="Filter" />
      </td>
      <td>
        <button className='DeleteButton' onClick={handleDelete}>Delete</button>
      </td>
      <td>
        <button className='ImportButton' onClick={handleImport}>Import</button>
      </td>
      <td>
        <button className='ExportButton' onClick={handleExport}>Export</button>
      </td>
    </tr>
  );
}

export default DelExp;