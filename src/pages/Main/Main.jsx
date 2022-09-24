import React from 'react';
import { Button, Container } from 'react-bootstrap';
import TableComponent from '../../components/table/Table';
import ToolBar from '../../components/toolBar/ToolBar';

const Main = () => {
  return (
    <Container>
      <ToolBar />
      <TableComponent />
      <Button variant="primary">Primery button</Button>
    </Container>
  );
};

export default Main;
