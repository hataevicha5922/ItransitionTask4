import React from 'react';
import Container from 'react-bootstrap/Container';
import TableComponent from '../../components/table/Table';
import ToolBar from '../../components/toolBar/ToolBar';

const Main = () => {
  return (
    <Container>
      <ToolBar />
      <TableComponent />
    </Container>
  );
};

export default Main;
