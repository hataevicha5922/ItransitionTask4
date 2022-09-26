import React from 'react';

const TabelHeader = ({ name, email, regDate, visitDate, status }) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>{name}</th>
        <th>{email}</th>
        <th>{regDate}</th>
        <th>{visitDate}</th>
        <th>{status}</th>
      </tr>
    </thead>
  );
};

export default TabelHeader;
