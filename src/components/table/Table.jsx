import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get('/users');
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const columnDefs = [
    {
      headerName: 'ID',
      field: 'id',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { headerName: 'Name', field: 'user_name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Registration', field: 'registr_data' },
    { headerName: 'Visit', field: 'visit_date' },
    { headerName: 'Status', field: 'status' },
  ];

  const rowSelectionType = 'multiple';

  const onSelectionChanged = (event) => {
    console.log('SELECTEDALL', event.api.getSelectedRows());
  };

  const isRowSelectable = (node) => {
    return node.data
      ? node.data.id % 1 === 0 || node.data.email.includes('.org')
      : false;
  };
  return (
    <div className="App">
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={users}
          rowSelection={rowSelectionType}
          onSelectionChanged={onSelectionChanged}
          rowMultiSelectWithClick={true}
          isRowSelectable={isRowSelectable}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Table;
