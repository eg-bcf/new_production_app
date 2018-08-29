import React from 'react';

const Line = (props) => {
  return (
  <table>
  <thead>
    <tr>
        <th>Routing No</th>
        <th>Promise Date</th>
        <th>Item Code</th>
        <th>Total Quantity On Hand</th>
        <th>Quantity Ordered</th>
        <th>Sales Order No</th>
    </tr>
  </thead>
  <tbody>
  { props.items.length > 1 ?
    props.items.map( rows => {
      return (
          <tr>
            <td colSpan="1">{rows["RoutingNo"]}</td>
            <td colSpan="1">{rows['PromiseDate']}</td>
            <td colSpan="1">{rows["ItemCode"]}</td>
            <td colSpan="1">{rows["TotalQuantityOnHand"]}</td>
            <td colSpan="1">{rows["QuantityOrdered"]}</td>
            <td colSpan="1">{rows["SalesOrderNo"]}</td>
          </tr>
    )})
    :
    <tr>
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

export default Line;
