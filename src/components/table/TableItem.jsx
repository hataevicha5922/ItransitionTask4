import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TableItem = ({
  name,
  email,
  registrationDate,
  lastVisitDate,
  status,
}) => {
  return (
    <tr>
      <td>*</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{registrationDate}</td>
      <td>{lastVisitDate}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TableItem;
