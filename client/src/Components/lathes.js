import React from 'react';

const Lathes = (props) => {
  var tableStyle = {
    backgroundColor: '#f08080'
  }
  return (
  <table>
  <thead>
    <tr>
        <th>LATHE</th>
        <th>SEQUENCE</th>
        <th>PART NUMBER</th>
        <th>QTY</th>
        <th>START JOB</th>
        <th>FINISH JOB</th>
        <th>NEED DATE</th>
        <th>LATE?</th>
        <th>WORK ORDER #</th>
    </tr>
  </thead>
  <tbody>
  { props.lathes.length > 1 ?
    props.lathes.map( rows => {
      return ( rows["LATE?"] === 'LATE' ?
          <tr style={tableStyle}>
            <td colSpan="1">{rows.LATHE}</td>
            <td colSpan="1">{rows['SEQ #']}</td>
            <td colSpan="1">{rows["PART NUMBER"]}</td>
            <td colSpan="1">{rows.QTY}</td>
            <td colSpan="1">{rows["START JOB"]}</td>
            <td colSpan="1">{rows["FINISH JOB"]}</td>
            <td colSpan="1">{rows["NEED DATE"]}</td>
            <td colSpan="1">{rows["LATE?"]}</td>
            <td colSpan="1">{rows["WO #"]}</td>
          </tr>
          :
          <tr>
            <td colSpan="1">{rows.LATHE}</td>
            <td colSpan="1">{rows['SEQ #']}</td>
            <td colSpan="1">{rows["PART NUMBER"]}</td>
            <td colSpan="1">{rows.QTY}</td>
            <td colSpan="1">{rows["START JOB"]}</td>
            <td colSpan="1">{rows["FINISH JOB"]}</td>
            <td colSpan="1">{rows["NEED DATE"]}</td>
            <td colSpan="1">{rows["LATE?"]}</td>
            <td colSpan="1">{rows["WO #"]}</td>
          </tr>
        )
    })
    :
    <tr>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
      <td>Nothing</td>
    </tr>
  }
  </tbody>
  </table>
)}

export default Lathes;
