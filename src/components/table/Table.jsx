// import React, { useMemo } from 'react';
// import { useTable, useRowSelect } from 'react-table';
import MOCK_DATA from '../../assets/api/MOCK_DATA.json';
// import { COLUMNS } from '../../assets/table';
// import { Checkbox } from './Checkbox';
// import './Table.module.scss';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
  //   const columns = useMemo(() => COLUMNS, []);
  //   const data = useMemo(() => MOCK_DATA, []);

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     rows,
  //     prepareRow,
  //     selectedFlatRows,
  //   } = useTable(
  //     {
  //       columns,
  //       data,
  //     },
  //     useRowSelect,
  //     (hooks) => {
  //       hooks.visibleColumns.push((columns) => {
  //         return [
  //           {
  //             id: 'selection',
  //             Header: ({ getToggleAllRowsSelectedProps }) => (
  //               <Checkbox {...getToggleAllRowsSelectedProps} />
  //             ),
  //             Cell: ({ row }) => (
  //               <Checkbox {...row.getToggleAllRowsSelectedProps} />
  //             ),
  //             ...columns,
  //           },
  //         ];
  //       });
  //     }
  //   );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   selectedFlatRows,
  // } = tableInstance;

  //   return (
  //     <>
  //       <table {...getTableProps()}>
  //         <thead>
  //           {headerGroups.map((headerGroup) => (
  //             <tr {...headerGroup.getHeaderGroupProps}>
  //               {headerGroup.headers.map((column) => (
  //                 <th {...column.g}>{column.render('Header')}</th>
  //               ))}
  //             </tr>
  //           ))}
  //         </thead>
  //         <tbody {...getTableBodyProps()}>
  //           {rows.map((row) => {
  //             prepareRow(row);
  //             return (
  //               <tr {...row.getRowProps()}>
  //                 {row.cells.map((cell) => {
  //                   return (
  //                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  //                   );
  //                 })}
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //       <code>
  //         {JSON.stringify(
  //           {
  //             selectedFlatRows: selectedFlatRows.map((row) => row.original),
  //           },
  //           null,
  //           2
  //         )}
  //       </code>
  //     </>
  //   );
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const columnDefs = [
    {
      headerName: 'ID',
      field: 'id',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { headerName: 'Name', field: 'first_name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Registration', field: 'registration' },
    { headerName: 'Visit', field: 'visit' },
    { headerName: 'Status', field: 'status' },
  ];

  // const defaultColDef = {
  //   editable: true,
  //   flex: 1,
  //   filter: true,
  //   floatingFilter: true,
  // };

  const onGridReady = (params) => {
    console.log('grid is ready');
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        params.api.applyTransaction({ add: resp }); //adding API data to grid
      });
  };
  //define selection type single or multiple
  const rowSelectionType = 'multiple';

  //function will trigger once selection changed
  const onSelectionChanged = (event) => {
    console.log('SELECTEDALL', event.api.getSelectedRows());
  };

  // function to allow selection to row
  const isRowSelectable = (node) => {
    return node.data
      ? node.data.id % 1 === 0 || node.data.email.includes('.org')
      : false;
  };
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Users</h3>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          // defaultColDef={defaultColDef}
          // onGridReady={API}
          rowData={MOCK_DATA}
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
